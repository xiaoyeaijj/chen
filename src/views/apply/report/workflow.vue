<template> 
  <div class="app-container">
    <el-card class="operate-container"
             shadow="never">
      <i class="el-icon-tickets"></i>
      <span>{{this.$route.params.apply_name}}</span>
    </el-card>
    <el-form ref="form"
             :model="form"
             label-width="80px"
             style="margin-top:20px;">
      <el-form-item label="申请人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="申请时间">
        <el-col :span="8">
          <el-date-picker placeholder="选择日期"
                          v-model="form.date"
                          type="daterange"
                          value-format="yyyy-MM-dd"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="8">
          <el-time-picker v-model="form.time"
                          is-range
                          value-format="HH:mm:ss"
                          range-separator="至"
                          start-placeholder="申请第一天开始时间"
                          end-placeholder="申请最后一天结束时间"
                          placeholder="选择时间范围"
                          style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="申请原因">
        <el-input type="textarea"
                  v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">提交申请</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import request from '@/utils/request'
  export default {
    name: 'returnApplyList',
    data () {
      return {
        form: {
          name: '',
          date: '',
          time: '',
          desc: ''
        },
      }
    },
    created () {
    },
    filters: {
    },
    methods: {
      onSubmit () {
        if (!this.form.name) {
          this.$message({ type: 'warning', message: '请填写申请人' })
          return
        }
        if (!this.form.date) {
          this.$message({ type: 'warning', message: '请选择申请日期' })
          return
        }
        if (!this.form.time) {
          this.$message({ type: 'warning', message: '请选择申请时间' })
          return
        }
        if (!this.form.desc) {
          this.$message({ type: 'warning', message: '请填写申请原因' })
          return
        }
        let apply_detail = {
          apply_name: this.form.name,
          apply_date: this.form.date,
          apply_time: this.form.time,
          apply_reason: this.form.desc
        }
        let params = {
          wfid: this.$route.params.apply_id,
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543',
          datajson: JSON.stringify(apply_detail),
          verify: 2
        }
        request({
          url: '/escalice/admin/WorkflowInstance/edit',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            this.$message({ type: 'success', message: '提交申请成功' })
          }
        })
      },
      cancel () {
        this.form.name = ''
        this.form.date = ''
        this.form.time = ''
        this.form.desc = ''
      }
    }
  }

</script>
<style scoped>
  .input-width {
    width: 203px;
  }
</style>



