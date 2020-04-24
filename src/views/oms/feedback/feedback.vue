<template> 
    <div class="app-container">
        <el-button type="primary"
                   @click="openAddDialog">新增反馈</el-button>
        <div class="table-container">
            <el-table ref="returnApplyTable"
                      :data="list"
                      style="width: 100%;"
                      v-loading="listLoading"
                      border>
                <el-table-column type="index"
                                 width="60"
                                 align="center"></el-table-column>
                <el-table-column label="反馈更新时间"
                                 align="center">
                    <template slot-scope="scope">{{scope.row.update_date}}</template>
                </el-table-column>
                <el-table-column label="反馈详情"
                                 align="center">
                    <template slot-scope="scope">{{scope.row.details}}</template>
                </el-table-column>
                <el-table-column label="操作"
                                 width="160"
                                 align="center">
                    <template slot-scope="scope">
                        <el-button size="mini"
                                   @click="openEditDialog(scope.row)">编辑</el-button>
                        <el-button size="mini"
                                   @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="新增反馈"
                   :visible.sync="dialogVisible"
                   width="50%">
            <el-form :model="dialogForm"
                     ref="dialogForm"
                     label-width="150px">
                <el-form-item label="反馈详情:">
                    <el-input v-model="dialogForm.details"
                              class="input-width"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="feedbackEdit">确 定</el-button>
            </span>
        </el-dialog>
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
                dialogVisible: false,
                dialogForm: {
                    details: ''
                },
                dialogtype: 1,
                editId: ''
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
                    page: '',
                    limit: ''
                }
                request({
                    url: '/escalice/admin/Feedback/list',
                    method: 'post',
                    data: params
                }).then(res => {
                    if (res.code == 200) {
                        self.listLoading = false
                        let datalist = res.data.list
                        self.list = datalist
                    }
                })
            },
            openAddDialog () {
                this.dialogVisible = true;
                this.dialogtype = 1
                this.dialogForm.details = ''
            },
            openEditDialog (row) {
                this.dialogVisible = true;
                this.dialogtype = 2;
                this.editId = row.id
                this.dialogForm.details = row.details
            },
            feedbackEdit (row) {
                let self = this
                let params = {
                    user_id: '11ea-2f09-b8b8-70188b39697a-b8725543',
                    details: this.dialogForm.details
                }
                if (this.dialogtype == 2) {
                    params.id = this.editId
                }
                let msg = this.dialogtype == 1 ? '反馈成功' : '编辑成功'
                request({
                    url: '/escalice/admin/Feedback/edit',
                    method: 'post',
                    data: params
                }).then(res => {
                    this.dialogVisible = false
                    this.$message({ type: 'success', message: msg })
                    self.getList();
                })
            },
            handleDelete (row) {
                let self = this
                let params = {
                    user_id: '11ea-2f09-b8b8-70188b39697a-b8725543',
                    id: row.id
                }
                request({
                    url: '/escalice/admin/Feedback/del',
                    method: 'post',
                    data: params
                }).then(res => {
                    this.$message({ type: 'success', message: '删除成功' })
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



