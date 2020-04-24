<template> 
  <div class="app-container">
    <el-card class="operate-container"
             shadow="never">
      <i class="el-icon-tickets"></i>
      <span>请假申请详情</span>
    </el-card>
    <div class="table-container">
      <el-table ref="returnApplyTable"
                :data="list"
                style="width: 100%;"
                v-loading="listLoading"
                border>
        <el-table-column label="流程id"
                         align="center">
          <template slot-scope="scope">{{scope.row.wf_id}}</template>
        </el-table-column>
        <el-table-column label="发起人"
                         align="center">
          <template slot-scope="scope">{{scope.row.data_json.apply_name}}</template>
        </el-table-column>
        <el-table-column label="申请时间"
                         align="center">
          <template slot-scope="scope">{{scope.row.data_json.apply_date[0]}} {{scope.row.data_json.apply_time[0]}} 至 {{scope.row.data_json.apply_date[1]}} {{scope.row.data_json.apply_time[1]}}</template>
        </el-table-column>
        <el-table-column label="申请原因"
                         align="center">
          <template slot-scope="scope">{{scope.row.data_json.apply_name}}</template>
        </el-table-column>
        <el-table-column label="申请类型"
                         align="center">
          <template slot-scope="scope">{{scope.row.wf_name}}</template>
        </el-table-column>
        <el-table-column label="申请状态"
                         align="center">
          <template slot-scope="scope">{{scope.row.verf_statue}}</template>
        </el-table-column>
        <el-table-column label="操作"
                         width="160"
                         align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handlePass(scope.row)">通过</el-button>
            <el-button size="mini"
                       @click="handleReject(scope.row)">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import request from '@/utils/request'
  export default {
    name: 'returnApplyList',
    data () {
      return {
        list: null,
        listLoading: false,
      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList () {
        let self = this
        self.listLoading = true
        let params = {
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543',
          wfcode: 'QJSQ'
        }
        request({
          url: '/escalice/admin/WorkflowInstance/bymylist',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            self.listLoading = false
            let datalist = res.data.list
            if (datalist && datalist.length > 0) {
              datalist.map(item => {
                item.data_json = JSON.parse(item.data_json)
              })
            }
            self.list = datalist
          }
        })
      },
      handlePass (row) {
        let self = this
        let params = {
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543',
          instanceid: row.id,
          verify: 1
        }
        request({
          url: '/escalice/admin/WorkflowInstance/verify',
          method: 'post',
          data: params
        }).then(res => {
          this.$message({ type: 'success', message: '已通过' })
          self.getList();
        })
      },
      handleReject (row) {
        let params = {
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543',
          instanceid: row.id,
          verify: 0
        }
        request({
          url: '/escalice/admin/WorkflowInstance/verify',
          method: 'post',
          data: params
        }).then(res => {
          this.$message({ type: 'success', message: '已驳回' })
          self.getList();
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



