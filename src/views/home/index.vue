<template>
  <div class="app-container">
    <div class="address-layout">
      <el-row :gutter="20">
        <el-col :span="6"
                v-for="(item,index) in applyList"
                :key="index">
          <div class="out-border">
            <div class="color-main address-content">
              <el-button type="primary"
                         @click="toApplyPage(item.apply_name,item.apply_id)"
                         plain>{{item.apply_name}}</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="un-handle-layout">
      <div class="layout-title">待审批事务</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">讨论帖处理</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">门店类型申请</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">高校合作申请</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">无效优惠券</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">新优惠券登记</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待发放优惠券</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">新商店申请</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">异常积分用户</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">广告合作申请</span>
              <span style="float: right"
                    class="color-danger">(10)</span>
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
                <el-col :span="6"
                        class="color-danger overview-item-value">100</el-col>
                <el-col :span="6"
                        class="color-danger overview-item-value">400</el-col>
                <el-col :span="6"
                        class="color-danger overview-item-value">50</el-col>
                <el-col :span="6"
                        class="color-danger overview-item-value">500</el-col>
              </el-row>
              <el-row class="font-medium">
                <el-col :span="6"
                        class="overview-item-title">已下架</el-col>
                <el-col :span="6"
                        class="overview-item-title">已上架</el-col>
                <el-col :span="6"
                        class="overview-item-title">紧张</el-col>
                <el-col :span="6"
                        class="overview-item-title">全部</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { str2Date } from '@/utils/date';
  import img_home_order from '@/assets/images/home_order.png';
  import img_home_today_amount from '@/assets/images/home_today_amount.png';
  import img_home_yesterday_amount from '@/assets/images/home_yesterday_amount.png';
  const DATA_FROM_BACKEND = {
    columns: ['date', 'orderCount', 'orderAmount'],
    rows: [
      { date: '2020-1-01', orderCount: 200, orderAmount: 1093 },
      { date: '2020-1-02', orderCount: 400, orderAmount: 2230 },
      { date: '2020-1-03', orderCount: 600, orderAmount: 3623 },
      { date: '2020-1-04', orderCount: 700, orderAmount: 6423 },
      { date: '2020-1-05', orderCount: 800, orderAmount: 8492 },
      { date: '2020-1-06', orderCount: 1000, orderAmount: 6293 },
      { date: '2020-1-07', orderCount: 500, orderAmount: 2293 },
      { date: '2020-1-08', orderCount: 300, orderAmount: 6293 },
      { date: '2020-1-09', orderCount: 500, orderAmount: 5293 },
      { date: '2020-1-10', orderCount: 400, orderAmount: 3293 },
      { date: '2020-1-11', orderCount: 300, orderAmount: 2293 },
      { date: '2020-1-12', orderCount: 900, orderAmount: 8293 },
      { date: '2020-1-13', orderCount: 1000, orderAmount: 10293 },
      { date: '2020-1-14', orderCount: 100, orderAmount: 1293 },
      { date: '2020-1-15', orderCount: 500, orderAmount: 4293 }
    ]
  };
  export default {
    name: 'home',
    data () {
      return {
        applyList: [
          {
            apply_name: '请假申请',
            apply_id: '0ecbe10c-1a6f-26f4-713b-f32277484d2f'  // 流程id
          },
          {
            apply_name: '活动申请',
            apply_id: '12df0ebb-b225-481a-9f17-4a0f71d994be'
          },
          {
            apply_name: '课室申请',
            apply_id: '18fbfb01-f992-b078-de63-a9af10ffdbc3'
          },
          {
            apply_name: '其他申请',
            apply_id: '58f8cd08-f7ce-1dcb-bb2e-1aa71a307c25'
          }
        ],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
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
            onClick (picker) {
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
          area: true,
          axisSite: { right: ['orderAmount'] },
          labelMap: { 'orderCount': '好评数量', 'orderAmount': '预定数量' }        },
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
    created () {
      this.initOrderCountDate();
      this.getData();
    },
    methods: {
      toApplyPage (name, id) {
        this.$router.push({ name: 'workflow_qjsq', params: { apply_name: name, apply_id: id } })
      },
      handleDateChange () {
        this.getData();
      },
      initOrderCountDate () {
        let start = new Date();
        start.setFullYear(2019);
        start.setMonth(12);
        start.setDate(1);
        const end = new Date();
        end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7);
        this.orderCountDate = [start, end];
      },
      getData () {
        setTimeout(() => {
          this.chartData = {
            columns: ['date', 'orderCount', 'orderAmount'],
            rows: []
          };
          for (let i = 0; i < DATA_FROM_BACKEND.rows.length; i++) {
            let item = DATA_FROM_BACKEND.rows[i];
            let currDate = str2Date(item.date);
            let start = this.orderCountDate[0];
            let end = this.orderCountDate[1];
            if (currDate.getTime() >= start.getTime() && currDate.getTime() <= end.getTime()) {
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
    border: 1px solid #dcdfe6;
    padding: 20px;
    height: 100px;
  }
  .total-icon {
    color: #409eff;
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
    border: 1px solid #dcdfe6;
  }
  .layout-title {
    color: #606266;
    padding: 15px 20px;
    background: #f2f6fc;
    font-weight: bold;
  }
  .un-handle-content {
    padding: 20px 40px;
  }
  .un-handle-item {
    border-bottom: 1px solid #ebeef5;
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
    border: 1px solid #dcdfe6;
  }
  .statistics-layout {
    margin-top: 20px;
    border: 1px solid #dcdfe6;
  }
  .mine-layout {
    position: absolute;
    right: 140px;
    top: 107px;
    width: 250px;
    height: 235px;
  }
  .address-content {
    padding: 20px;
    font-size: 18px;
  }
</style>
