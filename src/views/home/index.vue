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
      <div class="table-container">
        <el-table ref="returnApplyTable"
                  :data="list"
                  style="width: 100%;"
                  v-loading="listLoading"
                  border>
          <el-table-column label="申请人"
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
        </el-table>
      </div>
    </div>
    <div class="overview-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="out-border">
            <div class="layout-title">公告详情</div>
            <div style="padding: 40px">
              暂无公告
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request'
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
        listLoading: false,
        list: []
      }
    },
    created () {
      this.getList();
    },
    methods: {
      toApplyPage (name, id) {
        this.$router.push({ name: 'workflow', params: { apply_name: name, apply_id: id } })
      },
      getList () {
        let self = this
        self.listLoading = true
        let params = {
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543',
          wfcode: 'all'
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
