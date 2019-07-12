<template>
  <basic-dialog
    :show.sync="show"
    :form-data="dialogData"
    :success-callback="sureAdd"
    title="新增项"
    v-on="$listeners"
  >
    <template slot="form">
      <el-form>
        <el-form-item label="姓名：">
            <el-input placeholder="请输入姓名"></el-input>
        </el-form-item>
      </el-form>
    </template>

  </basic-dialog>
</template>

<script>
import BasicDialog from '@/components/BasicDialog'
export default {
  name: 'Details',
  props: ['dialogData'],
  created () {
      console.log(this.dialogData,'dia');
      
  },
  data() {
    return {
      show: false
    }
  },
  components: {
    BasicDialog
  },
  methods: {
    sureAdd() {
      this.show = false
      this.successCall()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>