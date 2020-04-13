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
            <el-input v-model="search.keyword" class="input-width" placeholder="商家名称"></el-input>
          </el-form-item>
          <el-form-item label="创建时间：">
            <el-date-picker
              class="input-width"
              v-model="listQuery.createTime"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="经营类型：">
            <el-select v-model="listQuery.status" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in statusOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>门店列表</span>
      <el-button
        size="mini"
        @click="handleAdd"
        class="btn-add">添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="orderTable"
                :data="list"
                style="width: 100%;"
                @selection-change="handleSelectionChange"
                v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="80" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="商家名称" width="120" align="center">
          <template slot-scope="scope">{{scope.row.shop_name}}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="180" align="center">
          <template slot-scope="scope">{{scope.row.create_date}}</template>
        </el-table-column>
        <el-table-column label="经营类型" align="center">
          <template slot-scope="scope">{{scope.row.type_name}}</template>
        </el-table-column>
        <el-table-column label="省份" align="center">
          <template slot-scope="scope">{{scope.row.province}}</template>
        </el-table-column>
        <el-table-column label="城市" align="center">
          <template slot-scope="scope">{{scope.row.city}}</template>
        </el-table-column>
        <el-table-column label="区域" align="center">
          <template slot-scope="scope">{{scope.row.county}}</template>
        </el-table-column>
        <el-table-column label="街道" width="120" align="center">
          <template slot-scope="scope">{{scope.row.street}}</template>
        </el-table-column>
        <el-table-column label="管理员" align="center">
          <template slot-scope="scope">{{scope.row.manager_name}}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
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
    <div class="batch-operate-container">
      <el-select
        size="small"
        v-model="operateType" placeholder="批量操作">
        <el-option
          v-for="item in operateOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button
        style="margin-left: 20px"
        class="search-button"
        @click="handleBatchOperate()"
        type="primary"
        size="small">
        确定
      </el-button>
    </div>
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
      title="填写门店信息"
      :visible.sync="dialogVisible" width="50%">
      <el-form :model="returnReason"
               ref="reasonForm" label-width="150px">
        <el-form-item label="门店名字：">
          <el-input v-model="returnReason.shop_name" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="所在省份：">
          <el-input v-model="returnReason.province" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="所在城市：">
          <el-input v-model="returnReason.city" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="所在区域：">
          <el-input v-model="returnReason.area" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="所在城镇：">
          <el-input v-model="returnReason.count" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="所在街道：">
          <el-input v-model="returnReason.street" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="门店电话：">
          <el-input v-model="returnReason.shop_tel" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="门店类型：">
          <el-input v-model="returnReason.shop_type" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="所在大学：">
          <el-input v-model="returnReason.shop_college" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="门店照片：">
          <el-input v-model="returnReason.shop_pics" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="门店描述：">
          <el-input v-model="returnReason.shop_desc" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="营业执照：">
          <el-input v-model="returnReason.shop_bussin_licence_id" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="开始营业：">
          <el-input v-model="returnReason.bussin_time_st" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="结束营业：">
          <el-input v-model="returnReason.bussin_time_ed" class="input-width"></el-input>
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
  import {fetchList,closeOrder,deleteOrder,updateReason,addReason, SearchList,deleteReason} from '@/api/order'
  import {formatDate} from '@/utils/date';
  import LogisticsDialog from '@/views/oms/order/components/logisticsDialog';
  const defaultListQuery = {
    pageNum: 1,
    pageSize: 10,
    orderSn: null,
    receiverKeyword: null,
    status: null,
    orderType: null,
    sourceType: null,
    createTime: null,

  };
  const defaultReturnReason = {
    shop_name:"",
    shop_college:"",
    shop_tel:"",
    shop_type:"",
    shop_id:"",
    province:"",
    city:"",
    area:"",
    county:"",
    street:"",
    shop_pics:"",
    shop_desc:"",
    shop_bussin_licence_id:"",
    bussin_time_st:"",
    bussin_time_ed:"",
  };
  export default {
    name: "orderList",
    components:{LogisticsDialog},
    data() {
      return {
        search:{
          keyword:""
        },

        listQuery: Object.assign({}, defaultListQuery),
        listLoading: true,
        list: null,
        total: null,
        operateType: null,
        multipleSelection: [],
        dialogVisible:false,
        returnReason:Object.assign({},defaultReturnReason),
        closeOrder:{
          dialogVisible:false,
          content:null,
          orderIds:[]
        },
        statusOptions: [
          {
            label: '烧烤',
            value: 0
          },
          {
            label: '糖水',
            value: 1
          },
          {
            label: '水果',
            value: 2
          },
          {
            label: '快餐',
            value: 3
          },
          {
            label: '面包',
            value: 4
          }
        ],
        orderTypeOptions: [
          {
            label: '正常订单',
            value: 0
          },
          {
            label: '秒杀订单',
            value: 1
          }
        ],
        sourceTypeOptions: [
          {
            label: 'PC订单',
            value: 0
          },
          {
            label: 'APP订单',
            value: 1
          }
        ],
        operateOptions: [
          {
            label: "批量发货",
            value: 1
          },
          {
            label: "关闭订单",
            value: 2
          },
          {
            label: "删除订单",
            value: 3
          }
        ],
        logisticsDialogVisible:false
      }
    },
    created() {
      this.getList();
    },
    filters: {
      formatCreateTime(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
      formatPayType(value) {
        if (value === 1) {
          return '支付宝';
        } else if (value === 2) {
          return '微信';
        } else {
          return '未支付';
        }
      },
      formatSourceType(value) {
        if (value === 1) {
          return 'APP订单';
        } else {
          return 'PC订单';
        }
      },
      formatStatus(value) {
        if (value === 1) {
          return '待发货';
        } else if (value === 2) {
          return '已发货';
        } else if (value === 3) {
          return '已完成';
        } else if (value === 4) {
          return '已关闭';
        } else if (value === 5) {
          return '无效订单';
        } else {
          return '待付款';
        }
      },
    },
    methods: {
      handleAdd() {
        this.dialogVisible=true;
        this.operateReasonId=null;

      },
      handleResetSearch() {
        this.listQuery = Object.assign({}, defaultListQuery);
      },
      handleSearchList() {


        SearchList(this.search).then(response=>{
          this.list=response.data.list;

        });

      },
      handleSelectionChange(val){
        this.multipleSelection = val;
      },

      handleCloseOrder(index, row){
        this.closeOrder.dialogVisible=true;
        this.closeOrder.orderIds=[row.id];
      },
      handleUpdate(index, row){
        this.dialogVisible=true;
        this.operateReasonId=row.id;
        this.returnReason=row;

      },
      handleDeliveryOrder(index, row){
        let listItem = this.covertOrder(row);
        this.$router.push({path:'/oms/deliverOrderList',query:{list:[listItem]}})
      },
      handleViewLogistics(index, row){
        this.logisticsDialogVisible=true;
      },
      handleDeleteOrder(index, row){
        let ids=[];
        ids.push(row.id);
        this.deleteOrder(ids);
      },
      handleSizeChange(val){
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
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
      handleCloseOrderConfirm() {
        if (this.closeOrder.content == null || this.closeOrder.content === '') {
          this.$message({
            message: '操作备注不能为空',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        let params = new URLSearchParams();
        params.append('ids', this.closeOrder.orderIds);
        params.append('note', this.closeOrder.content);
        closeOrder(params).then(response=>{
          this.closeOrder.orderIds=[];
          this.closeOrder.dialogVisible=false;
          this.getList();
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          console.log(response.data);
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
        });
      },
      deleteOrder(ids){
        this.$confirm('是否要进行该删除操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = new URLSearchParams();
          params.append("ids",ids);
          deleteOrder(params).then(response=>{
            this.$message({
              message: '删除成功！',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        })
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
      covertOrder(order){
        let address=order.receiverProvince+order.receiverCity+order.receiverRegion+order.receiverDetailAddress;
        let listItem={
          orderId:order.id,
          orderSn:order.orderSn,
          receiverName:order.receiverName,
          receiverPhone:order.receiverPhone,
          receiverPostCode:order.receiverPostCode,
          address:address,
          deliveryCompany:null,
          deliverySn:null
        };
        return listItem;
      }
    }
  }
</script>
<style scoped>
  .input-width {
    width: 203px;
  }
</style>


