<template> 
  <div class="app-container">
    <el-card class="filter-container"
             shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float:right"
                   type="primary"
                   @click="handleSearchList()"
                   size="small">
          查询搜索
        </el-button>
        <el-button style="float:right;margin-right: 15px"
                   @click="handleResetSearch()"
                   size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true"
                 :model="listQuery"
                 size="small"
                 label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input v-model="search.keyword"
                      class="input-width"
                      placeholder="管理员名字，账号"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <div class="table-container">
      <el-table ref="returnApplyTable"
                :data="list"
                style="width: 100%;"
                v-loading="listLoading"
                border>
        <el-table-column type="index"
                         width="60"
                         align="center"></el-table-column>
        <el-table-column label="用户id"
                         align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="用户姓名"
                         align="center">
          <template slot-scope="scope">{{scope.row.user_name}}</template>
        </el-table-column>
        <el-table-column label="用户角色"
                         align="center">
          <template slot-scope="scope">{{scope.row.admin_type}}</template>
        </el-table-column>
        <el-table-column label="用户账号"
                         align="center">
          <template slot-scope="scope">{{scope.row.account}}</template>
        </el-table-column>
        <el-table-column label="操作"
                         width="160"
                         align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleUpdate(scope.row)">编辑</el-button>
            <el-button size="mini"
                       @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="编辑用户权限"
               :visible.sync="dialogVisible"
               width="50%">
      <el-form :model="returnReason"
               ref="reasonForm"
               label-width="150px">
        <el-form-item label="用户级别：">
          <el-input v-model="returnReason.admin_type"
                    class="input-width"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="handleConfirmEdit">确 定</el-button>
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
        search: {
          keyword: ""
        },
        list: [],
        listLoading: false,
        dialogVisible: false,
        returnReason: {
          admin_type: ''
        },
        editId: ''
      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList (keyword) {
        let self = this
        self.listLoading = true
        let params = {
          keyword: keyword || ''
        }
        request({
          url: '/escalice/admin/account/list',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            self.listLoading = false
            self.list = res.data.list
          }
        })
      },
      handleSearchList () {
        this.getList(this.search.keyword)
      },
      handleResetSearch () {
        this.search.keyword = ''
      },
      handleUpdate (row) {
        this.editId = row.id;
        this.returnReason.admin_type = row.admin_type
        this.dialogVisible = true
      },
      deleteUser (row) {
        let self = this
        let params = {
          id: row.id
        }
        request({
          url: '/escalice/admin/account/del',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            self.$message({ type: 'success', message: '删除成功' })
            self.getList()
          }
        })
      },
      handleConfirmEdit () {
        let self = this
        let params = {
          id: self.editId,
          admin_type: self.returnReason.admin_type
        }
        request({
          url: '/escalice/admin/account/add',
          method: 'post',
          data: params
        }).then(res => {
          if (res.code == 200) {
            self.dialogVisible = false
            self.returnReason.admin_type = ''
            self.editId = ''
            self.$message({ type: 'success', message: '编辑成功' })
            self.getList()
          }
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

