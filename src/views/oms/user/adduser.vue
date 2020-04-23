<template> 
    <div class="app-container">
        <el-card class="operate-container"
                 shadow="never">
            <i class="el-icon-tickets"></i>
            <span>添加用户</span>
        </el-card>
        <el-form ref="form"
                 style="margin-top:20px;"
                 :model="form"
                 label-width="80px">
            <el-form-item label="用户账号">
                <el-input v-model="form.useraccount"></el-input>
            </el-form-item>
            <el-form-item label="用户密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="用户姓名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="用户性别">
                <el-input v-model="form.usersex"></el-input>
            </el-form-item>
            <el-form-item label="用户电话">
                <el-input v-model="form.userphone"></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱">
                <el-input v-model="form.useremail"></el-input>
            </el-form-item>
            <el-form-item label="用户角色权限">
                <el-input v-model="form.userright"></el-input>
            </el-form-item>
            <el-button type="primary"
                       @click="handleAddUser">确定添加用户</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import request from '@/utils/request'
    export default {
        name: 'adduser',
        data () {
            return {
                form: {
                    useraccount: '',
                    password: '',
                    username: '',
                    usersex: '',
                    userphone: '',
                    useremail: '',
                    userright: ''
                },
            }
        },
        created () {
        },
        methods: {
            handleAddUser () {
                if (!this.form.useraccount) {
                    this.$message({ type: 'warning', message: '请填写用户账号' })
                    return
                } else if (!this.form.password) {
                    this.$message({ type: 'warning', message: '请填写密码' })
                    return
                } else if (!this.form.username) {
                    this.$message({ type: 'warning', message: '请填写用户姓名' })
                    return
                } else if (!this.form.usersex) {
                    this.$message({ type: 'warning', message: '请填写用户性别' })
                    return
                } else if (!this.form.userphone) {
                    this.$message({ type: 'warning', message: '请填写用户电话' })
                    return
                } else if (!this.form.useremail) {
                    this.$message({ type: 'warning', message: '请填写用户邮箱' })
                    return
                } else if (!this.form.userright) {
                    this.$message({ type: 'warning', message: '请填写用户角色权限' })
                    return
                }
                let params = {
                    account: this.form.useraccount,
                    password: this.form.password,
                    user_name: this.form.username,
                    gender: this.form.usersex,
                    gender: this.form.userphone,
                    email: this.form.useremail,
                    admin_type: this.form.userright
                }
                request({
                    url: '/escalice/admin/account/add',
                    method: 'post',
                    data: params
                }).then(res => {
                    if (res.code == 200) {
                        this.form.useraccount = ''
                        this.$message({ type: 'success', message: '添加用户成功' })
                    }
                })
            }
        }
    }

</script>
<style scoped>
    .input-width {
      width: 250px;
    }
</style>



