<template>
  <div class="basicDialog">
    <el-dialog
      :visible="isShow"
      :close-on-click-modal="false"
      :show-close="false"
      :title="title"
      :width="width"
      :top="top"
      center
      @close="closeMask">
      <el-form ref="Form" :model="formData" :rules="rules" :inline="inline" label-width="100px" label-position="right">
        <slot name="form"/>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelHandle">取消</el-button>
        <slot name="resetBtn"/>
        <el-button type="primary" @click="sureHandle">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BasicDialog',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '530px'
    },
    top: {
      type: String,
      default: '15vh'
    },
    inline: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object
    },
    rules: {
      type: Object
    },
    successCallback: {
      type: Function,
      required: true
    }
  },
  computed: {
    isShow: {
      get() { return this.show },
      set(value) {
        this.$emit('update:show', value)
      }
    }
  },
  methods: {
    cancelHandle() {
      this.isShow = false
    },
    sureHandle() {
      this.$refs.Form.validate(valid => {
        if (valid) {
          this.successCallback()
        }
      })
    },
    closeMask() {
      this.$refs.Form.resetFields()
    }
  }
}
</script>
