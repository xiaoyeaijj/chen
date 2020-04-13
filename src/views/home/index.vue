<template>
  <div class="app-container">
    <div class="address-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="out-border">
<!--            <div class="layout-title">发起活动</div>-->
            <div class="color-main address-content">
              <a href="">请假申请</a>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
<!--            <div class="layout-title">发起活动</div>-->
            <div class="color-main address-content">
              <a href="">活动申请</a>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
<!--            <div class="layout-title">发起活动</div>-->
            <div class="color-main address-content">
              <a href="">课室申请</a>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
<!--            <div class="layout-title">发起活动</div>-->
            <div class="color-main address-content">
              <a href="">其他申请</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
<!--    <div class="total-layout">-->
<!--      <el-row :gutter="20">-->
<!--        <el-col :span="6">-->
<!--          <div class="total-frame">-->
<!--            <img :src="img_home_order" class="total-icon">-->
<!--            <div class="total-title">今日优惠券发放</div>-->
<!--            <div class="total-value">2000</div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <div class="total-frame">-->
<!--            <img :src="img_home_today_amount" class="total-icon">-->
<!--            <div class="total-title">今日完成订单</div>-->
<!--            <div class="total-value">5000</div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <div class="total-frame">-->
<!--            <img :src="img_home_yesterday_amount" class="total-icon">-->
<!--            <div class="total-title">今日预定总数</div>-->
<!--            <div class="total-value">5000</div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--        <div class="total-frame">-->
<!--        <svg-icon icon-class="total-week" class="total-icon">-->
<!--        </svg-icon>-->
<!--        <div class="total-title">近7天完成订单</div>-->
<!--        <div class="total-value">50000</div>-->
<!--        </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
   <!-- <el-card class="mine-layout">
      <div style="text-align: center">
        <img width="150px" height="150px" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg">
      </div>
      <div style="text-align: center">mall全套学习教程连载中！</div>
      <div style="text-align: center;margin-top: 5px"><span class="color-main">关注公号</span>，第一时间获取。</div>
    </el-card>-->
    <div class="un-handle-layout">
      <div class="layout-title">待审批事务</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">讨论帖处理</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">门店类型申请</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">高校合作申请</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">无效优惠券</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">新优惠券登记</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待发放优惠券</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">新商店申请</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">异常积分用户</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">广告合作申请</span>
              <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="overview-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="out-border">
            <div class="layout-title">公告详情</div>
            <div style="padding: 40px">
              <el-row>
                <el-col :span="6" class="color-danger overview-item-value">100</el-col>
                <el-col :span="6" class="color-danger overview-item-value">400</el-col>
                <el-col :span="6" class="color-danger overview-item-value">50</el-col>
                <el-col :span="6" class="color-danger overview-item-value">500</el-col>
              </el-row>
              <el-row class="font-medium">
                <el-col :span="6" class="overview-item-title">已下架</el-col>
                <el-col :span="6" class="overview-item-title">已上架</el-col>
                <el-col :span="6" class="overview-item-title">紧张</el-col>
                <el-col :span="6" class="overview-item-title">全部</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
<!--        <el-col :span="12">-->
<!--          <div class="out-border">-->
<!--            <div class="layout-title">用户总览</div>-->
<!--            <div style="padding: 40px">-->
<!--              <el-row>-->
<!--                <el-col :span="6" class="color-danger overview-item-value">100</el-col>-->
<!--                <el-col :span="6" class="color-danger overview-item-value">200</el-col>-->
<!--                <el-col :span="6" class="color-danger overview-item-value">1000</el-col>-->
<!--                <el-col :span="6" class="color-danger overview-item-value">5000</el-col>-->
<!--              </el-row>-->
<!--              <el-row class="font-medium">-->
<!--                <el-col :span="6" class="overview-item-title">今日新增</el-col>-->
<!--                <el-col :span="6" class="overview-item-title">昨日新增</el-col>-->
<!--                <el-col :span="6" class="overview-item-title">本月新增</el-col>-->
<!--                <el-col :span="6" class="overview-item-title">会员总数</el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
      </el-row>
    </div>
  </div>
</template>

<script>
  import {str2Date} from '@/utils/date';
  import img_home_order from '@/assets/images/home_order.png';
  import img_home_today_amount from '@/assets/images/home_today_amount.png';
  import img_home_yesterday_amount from '@/assets/images/home_yesterday_amount.png';
  const DATA_FROM_BACKEND = {
    columns: ['date', 'orderCount','orderAmount'],
    rows: [
      {date: '2020-1-01', orderCount: 200, orderAmount: 1093},
      {date: '2020-1-02', orderCount: 400, orderAmount: 2230},
      {date: '2020-1-03', orderCount: 600, orderAmount: 3623},
      {date: '2020-1-04', orderCount: 700, orderAmount: 6423},
      {date: '2020-1-05', orderCount: 800, orderAmount: 8492},
      {date: '2020-1-06', orderCount: 1000, orderAmount: 6293},
      {date: '2020-1-07', orderCount: 500, orderAmount: 2293},
      {date: '2020-1-08', orderCount: 300, orderAmount: 6293},
      {date: '2020-1-09', orderCount: 500, orderAmount: 5293},
      {date: '2020-1-10', orderCount: 400, orderAmount: 3293},
      {date: '2020-1-11', orderCount: 300, orderAmount: 2293},
      {date: '2020-1-12', orderCount: 900, orderAmount: 8293},
      {date: '2020-1-13', orderCount: 1000, orderAmount: 10293},
      {date: '2020-1-14', orderCount: 100, orderAmount: 1293},
      {date: '2020-1-15', orderCount: 500, orderAmount: 4293}
    ]
  };
  export default {
    name: 'home',
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setFullYear(2019);
              start.setMonth(12);
              start.setDate(1);
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一月',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setFullYear(2019);
              start.setMonth(12);
              start.setDate(1);
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        orderCountDate: '',
        chartSettings: {
          xAxisType: 'time',
          area:true,
          axisSite: { right: ['orderAmount']},
          labelMap: {'orderCount': '好评数量', 'orderAmount': '预定数量'}},
        chartData: {
          columns: [],
          rows: []
        },
        loading: false,
        dataEmpty: false,
        img_home_order,
        img_home_today_amount,
        img_home_yesterday_amount
      }
    },
    created(){
      this.initOrderCountDate();
      this.getData();
    },
    methods:{
      handleDateChange(){
        this.getData();
      },
      initOrderCountDate(){
        let start = new Date();
        start.setFullYear(2019);
        start.setMonth(12);
        start.setDate(1);
        const end = new Date();
        end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7);
        this.orderCountDate=[start,end];
      },
      getData(){
        setTimeout(() => {
          this.chartData = {
            columns: ['date', 'orderCount','orderAmount'],
            rows: []
          };
          for(let i=0;i<DATA_FROM_BACKEND.rows.length;i++){
            let item=DATA_FROM_BACKEND.rows[i];
            let currDate=str2Date(item.date);
            let start=this.orderCountDate[0];
            let end=this.orderCountDate[1];
            if(currDate.getTime()>=start.getTime()&&currDate.getTime()<=end.getTime()){
              this.chartData.rows.push(item);
            }
          }
          this.dataEmpty = false;
          this.loading = false
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .app-container {
    margin-top: 40px;
    margin-left: 120px;
    margin-right: 120px;
  }
  .address-layout {
  }
  .total-layout {
    margin-top: 20px;
  }
  .total-frame {
    border: 1px solid #DCDFE6;
    padding: 20px;
    height: 100px;
  }
  .total-icon {
    color: #409EFF;
    width: 60px;
    height: 60px;
  }
  .total-title {
    position: relative;
    font-size: 16px;
    color: #909399;
    left: 70px;
    top: -50px;
  }
  .total-value {
    position: relative;
    font-size: 18px;
    color: #606266;
    left: 70px;
    top: -40px;
  }
  .un-handle-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }
  .layout-title {
    color: #606266;
    padding: 15px 20px;
    background: #F2F6FC;
    font-weight: bold;
  }
  .un-handle-content {
    padding: 20px 40px;
  }
  .un-handle-item {
    border-bottom: 1px solid #EBEEF5;
    padding: 10px;
  }
  .overview-layout {
    margin-top: 20px;
  }
  .overview-item-value {
    font-size: 24px;
    text-align: center;
  }
  .overview-item-title {
    margin-top: 10px;
    text-align: center;
  }
  .out-border {
    border: 1px solid #DCDFE6;
  }
  .statistics-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }
  .mine-layout {
    position: absolute;
    right: 140px;
    top: 107px;
    width: 250px;
    height: 235px;
  }
  .address-content{
    padding: 20px;
    font-size: 18px
  }
</style>
