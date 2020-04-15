<template> 
  <div class="app-container">
    <el-card class="operate-container"
             shadow="never">
      <i class="el-icon-tickets"></i>
      <span>个人信息展示页</span>
    </el-card>
    <el-form ref="form"
             style="margin-top:20px;"
             :model="form"
             label-width="80px">
      <el-form-item label="用户姓名">
        <el-input disabled
                  v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="用户性别">
        <el-input disabled
                  v-model="form.usersex"></el-input>
      </el-form-item>
      <el-form-item label="用户电话">
        <el-input disabled
                  v-model="form.userphone"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input disabled
                  v-model="form.useremail"></el-input>
      </el-form-item>
      <el-form-item label="用户账号">
        <el-input disabled
                  v-model="form.useraccount"></el-input>
      </el-form-item>
      <el-button type="primary"
                 @click="openUpdateDialog">修改资料</el-button>
      <el-button type="primary"
                 @click="dialogFormVisible = true">修改密码</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="修改个人信息"
               :visible.sync="editDialogFormVisible">
      <el-form :model="editForm">
        <el-form-item label="用户姓名"
                      label-width="120px">
          <el-input v-model="editForm.username"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户性别"
                      label-width="120px">
          <el-input v-model="editForm.usersex"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户电话"
                      label-width="120px">
          <el-input v-model="editForm.userphone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱"
                      label-width="120px">
          <el-input v-model="editForm.useremail"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="updateUserInfo">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="收货地址"
               :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="旧密码"
                      prop="oldPass">
          <el-input type="password"
                    v-model="ruleForm.oldPass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="passwordUpdate('ruleForm')">提交</el-button>
          <el-button type="primary"
                     @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import request from '@/utils/request'
  export default {
    name: 'returnApplyList',
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: '陈线截',
          usersex: '男',
          userphone: '13812346589',
          useremail: 'chen@heywoods.cn',
          useraccount: 'student'
        },
        editForm: {
          username: '',
          usersex: '',
          userphone: '',
          useremail: '',
          useraccount: ''
        },
        dialogFormVisible: false,
        editDialogFormVisible: false,
        ruleForm: {
          oldPass: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    created () {
      this.initUserInfo();
    },
    methods: {
      initUserInfo () {
        let params = {
          userid: '11ea-2f09-b8b8-70188b39697a-b8725543'
        }
        request({
          url: '/escalice/admin/account/recode',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            let { user_name, gender, mobile, email, account } = res.data.user
            this.form.username = user_name
            this.form.usersex = gender
            this.form.userphone = mobile
            this.form.useremail = email
            this.form.useraccount = account
          }
        })
      },
      openUpdateDialog () {
        this.editDialogFormVisible = true

        this.editForm.username = this.form.username
        this.editForm.usersex = this.form.usersex
        this.editForm.userphone = this.form.userphone
        this.editForm.useremail = this.form.useremail
        this.editForm.useraccount = this.form.useraccount
      },
      updateUserInfo () {
        let params = {
          id: '11ea-2f09-b8b8-70188b39697a-b8725543',
          user_name: this.editForm.username,
          gender: this.editForm.usersex,
          mobile: this.editForm.userphone,
          email: this.editForm.useremail
        }
        request({
          url: '/escalice/admin/account/edit',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            this.editDialogFormVisible = false
            this.initUserInfo()
            this.$message({ type: 'success', message: '修改成功' })
          }
        })
      },
      passwordUpdate (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {
              user_id: '11ea-2f09-b8b8-70188b39697a-b8725543',
              old_password: this.ruleForm.oldPass,
              new_password: this.ruleForm.checkPass
            }
            request({
              url: '/escalice/admin/account/update',
              method: 'post',
              data: params
            }).then(res => {
              if (res.code == 200) {
                this.dialogFormVisible = false
                this.$message({ type: 'success', message: '密码修改成功' })
              } else if (res.code == 100) {
                this.$message({ type: 'warning', message: res.msg })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>
<style scoped>
  .input-width {
    width: 203px;
  }
</style>



