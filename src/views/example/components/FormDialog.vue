<template>
  <el-dialog
    title="提示"
    :visible.sync="show"
    width="30%"
    :close-on-click-modal="false"
    center>
    <el-form label-position="right" label-width="80px" :model="formData">
      <el-form-item label="名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formData.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formData.type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="show = false">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  export default {
    name: 'form-dialog',
    props: ['isShow'],
    data() {
      return {
        formData: {
          pass: '',
          checkPass: '',
          age: ''
        }
      }
    },
    computed: {
      show: {
        get() {return this.isShow},
        set(value) {
          this.$emit('update:isShow', value)
        }
      }
    }
  }
</script>

<style lang="scss">
  
</style>