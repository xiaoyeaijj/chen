<template> 
  <div class="app-container">
    <el-card class="operate-container"
             shadow="never">
      <i class="el-icon-tickets"></i>
      <span>活动申请详情</span>
    </el-card>
    <div class="table-container">
      <el-table ref="returnApplyTable"
                :data="list"
                style="width: 100%;"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>
        <el-table-column label="活动名称"
                         width="80"
                         align="center">
          <template slot-scope="scope">{{scope.row.rank}}</template>
        </el-table-column>
        <el-table-column label="申请人"
                         align="center">
          <template slot-scope="scope">{{scope.row.shop_name}}</template>
        </el-table-column>
        <el-table-column label="申请时间"
                         align="center">
          <template slot-scope="scope">{{scope.row.shop_pic}}</template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination background
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     layout="total, sizes,prev, pager, next,jumper"
                     :current-page.sync="listQuery.pageNum"
                     :page-size="listQuery.pageSize"
                     :page-sizes="[5,10,15]"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import request from '@/utils/request'
  const defaultListQuery = {
    pageNum: 1,
    pageSize: 10,
    id: null,
    receiverKeyword: null,
    status: null,
    createTime: null,
    handleMan: null,
    handleTime: null
  };
  const defaultReturnReason = {
    student_id: "",
    real_name: "",
    mobile: "",
    college: "",
  };
  export default {
    name: 'returnApplyList',
    data () {
      return {
        search: {
          keyword: ""
        },
        listQuery: Object.assign({}, defaultListQuery),
        list: null,
        total: null,
        listLoading: false,
        multipleSelection: [],
        operateType: 1,
        operateOptions: [
          {
            label: "批量删除",
            value: 1
          }
        ],
        dialogVisible: false,
        returnReason: Object.assign({}, defaultReturnReason),
      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList () {
        let params = {
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543',
          wfcode: 'HDSQ'
        }
        request({
          url: '/escalice/admin/WorkflowInstance/tomylist',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
          }
        })
      }
    }
  }

</script>
<style scoped>
  .input-width {
    width: 203px;
  }
</style>



