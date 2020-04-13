<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float:right"
          type="primary"
          @click="handleSearchList()"
          size="small">
          查询搜索
        </el-button>
        <el-button
          style="float:right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input v-model="search.keyword" class="input-width" placeholder="用户名字，预定门店"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>预定列表</span>
      <!--<el-button
        size="mini"
        @click="handleAdd"
        class="btn-add">添加
      </el-button>-->
    </el-card>
    <div class="table-container">
      <el-table ref="returnApplyTable"
                :data="list"
                style="width: 100%;"
                @selection-change="handleSelectionChange"
                v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="预定id" width="80" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="用户名字" align="center">
          <template slot-scope="scope">{{scope.row.user_name}}</template>
        </el-table-column>
        <el-table-column label="学生号" align="center">
          <template slot-scope="scope">{{scope.row.student_id }}</template>
        </el-table-column>
        <el-table-column label="所在高校" width="180" align="center">
          <template slot-scope="scope">{{scope.row.user_college }}</template>
        </el-table-column>
        <el-table-column label="预定门店" align="center">
          <template slot-scope="scope">{{scope.row.shop_name}}</template>
        </el-table-column>
        <el-table-column label="预定时间" align="center">
          <template slot-scope="scope">{{scope.row.pre_order_date}}</template>
        </el-table-column>
        <el-table-column label="预定状态" align="center">
          <template slot-scope="scope">{{scope.row.state}}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="180" align="center">
          <template slot-scope="scope">{{scope.row.create_date}}</template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              @click="deleteReason(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    <div class="batch-operate-container">-->
    <!--      <el-select-->
    <!--        size="small"-->
    <!--        v-model="operateType" placeholder="批量操作">-->
    <!--        <el-option-->
    <!--          v-for="item in operateOptions"-->
    <!--          :key="item.value"-->
    <!--          :label="item.label"-->
    <!--          :value="item.value">-->
    <!--        </el-option>-->
    <!--      </el-select>-->
    <!--      <el-button-->
    <!--        style="margin-left: 20px"-->
    <!--        class="search-button"-->
    <!--        @click="handleBatchOperate"-->
    <!--        type="primary"-->
    <!--        size="small">-->
    <!--        确定-->
    <!--      </el-button>-->
    <!--    </div>-->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog
      title="编辑预定信息"
      :visible.sync="dialogVisible" width="50%">
      <el-form :model="returnReason"
               ref="reasonForm" label-width="150px">
        <el-form-item label="预定状态：">
          <el-input v-model="returnReason.state" class="input-width"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {formatDate} from '@/utils/date';
  import {fetchList,deleteApply,updateReason,addReason,SearchList} from '@/api/preOrder';
  import {deleteReason} from "../../../api/preOrder";
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
    state:0,
  };
  const defaultStatusOptions=[
    {
      label: '益禾堂',
      value: "11ea-2ef5-8d58-70188b39697a-44a2fd0e"
    },
    {
      label: '码头1978',
      value: "11ea-2f7f-ba88-70188b39697a-58316328"
    },
    {
      label: '铁饭碗',
      value: "11ea-2f7f-ba88-70188b39697a-9c44af25"
    },
    {
      label: '韩拾林',
      value: "11ea-2f7f-ba88-70188b39697a-d1641846"
    }
  ];
  export default {
    name:'returnApplyList',
    data() {
      return {
        search:{
          keyword:""
        },
        listQuery:Object.assign({},defaultListQuery),
        statusOptions: Object.assign({},defaultStatusOptions),
        list:null,
        total:null,
        listLoading:false,
        multipleSelection:[],
        operateType:1,
        operateOptions: [
          {
            label: "批量删除",
            value: 1
          }
        ],
        dialogVisible:false,
        returnReason:Object.assign({},defaultReturnReason),
      }
    },
    created(){
      this.getList();
    },
    filters:{
      formatTime(time) {
        if(time==null||time===''){
          return 'N/A';
        }
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
      formatStatus(status){
        for(let i=0;i<defaultStatusOptions.length;i++){
          if(status===defaultStatusOptions[i].value){
            return defaultStatusOptions[i].label;
          }
        }
      },
      formatReturnAmount(row){
        return row.productRealPrice*row.productCount;
      }
    },
    methods:{
      handleAdd() {
        this.dialogVisible=true;
        this.operateReasonId=null;
        this.returnReason=Object.assign({},defaultReturnReason);
      },
      handleSelectionChange(val){
        this.multipleSelection = val;
      },
      handleResetSearch() {
        this.listQuery = Object.assign({}, defaultListQuery);
      },
      handleSearchList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
      handleViewDetail(index,row){
        this.$router.push({path:'/oms/returnApplyDetail',query:{id:row.id}})
      },
      // handleBatchOperate(){
      //   if(this.multipleSelection==null||this.multipleSelection.length<1){
      //     this.$message({
      //       message: '请选择要操作的申请',
      //       type: 'warning',
      //       duration: 1000
      //     });
      //     return;
      //   }
      //   if(this.operateType===1){
      //     //批量删除
      //     this.$confirm('是否要进行删除操作?', '提示', {
      //       confirmButtonText: '确定',
      //       cancelButtonText: '取消',
      //       type: 'warning'
      //     }).then(() => {
      //       let params = new URLSearchParams();
      //       let ids=[];
      //       for(let i=0;i<this.multipleSelection.length;i++){
      //         ids.push(this.multipleSelection[i].id);
      //       }
      //       params.append("ids",ids);
      //       deleteApply(params).then(response=>{
      //         this.getList();
      //         this.$message({
      //           type: 'success',
      //           message: '删除成功!'
      //         });
      //       });
      //     })
      //   }
      // },
      handleSizeChange(val){
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleUpdate(index, row){
        this.dialogVisible=true;
        this.operateReasonId=row.id;
        this.returnReason=row;

      },
      handleConfirm(){
        if(this.operateReasonId==null){
          //添加操作
          addReason(this.returnReason).then(response=>{
            this.dialogVisible=false;
            this.operateReasonId=null;
            this.$message({
              message: '添加成功！',
              type: 'success',
              duration:1000
            });
            this.getList();
          });
        }else{
          //编辑操作

          updateReason(this.returnReason).then(response=>{
            this.dialogVisible=false;
            this.operateReasonId=null;
            this.$message({
              message: '修改成功！',
              type: 'success',
              duration:1000
            });
            this.getList();
          });
        }
      },
      handleCurrentChange(val){
        this.listQuery.pageNum = val;
        this.getList();
      },
      getList(){
        this.listLoading=true;
        fetchList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
        });
      },
      handleSearchList() {


        SearchList(this.search).then(response=>{
          this.list=response.data.list;

        });

      },
      deleteReason(index, row){
        this.$confirm('是否要进行该删除操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          deleteReason(row).then(response=>{
            this.$message({
              message: '删除成功！',
              type: 'success',
              duration: 1000
            });

            this.getList();
          });
        })
      },
    }
  }

</script>
<style scoped>

  .input-width {
    width: 203px;
  }

</style>



