<template>
  <basic-dialog
    :show.sync="show"
    :form-data="dialogData"
    :success-callback="sureAdd"
    title="新增项"
    v-on="$listeners"
  >
    <template slot="form">
      <h5>日期：{{dialogData.date}}</h5>
      <h5>姓名：{{dialogData.name}}</h5>
      <h5>地址：{{dialogData.address}}</h5>
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