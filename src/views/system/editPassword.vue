<template>
  <div class="editPassword">
    <div class="main">
      <h2>登录密码修改</h2>
      <el-form
        label-position="left"
        label-width="80px"
        :model="formData"
        :rules="rules"
        ref="formData"
      >
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input v-model="formData.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="formData.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="formData.confirmPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { editPassword } from '@/api'

export default {
  name: 'editPassword',
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.formData.confirmPassword !== '') {
          this.$refs.formData.validateField('confirmPassword')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        oldPassword: { required: true, message: '请输入旧密码' },
        newPassword: { required: true, message: '请输入新密码' },
        confirmPassword: {
          validator: validatePass2,
          trigger: 'blur',
          required: true
        }
      }
    }
  },
  created() {
    // this.loading = true
    // this.initTable()
    // 获取菜单列表
  },
  methods: {
    submitForm() {
      this.$refs['formData'].validate(valid => {
        if (valid) {
          editPassword(this.formData).then(res => {
            if (res.status == 0) {
              this.$message.success('修改成功！')
              this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.editPassword {
  width: 100%;
  height: 100%;
  background-color: #fff;
  h2 {
    margin-bottom: 24px;
  }
  .main {
    width: 300px;
    padding-top: 100px;
    margin-left: 100px;
    // margin: 0 auto;
  }
}
</style>
