<template>
  <div class="searchBar">
    <el-form
      ref="searchForm"
      :model="searchFormData"
      size="mini"
      :inline="true"
      label-width="100px"
    >
      <template v-for="(item,index) in searchItems">
        <el-form-item
          v-if="item.type === 'select_phone'"
          :key="item.type+index"
          style="width: 360px"
          :label="item.info.label"
        >
          <el-input
            placeholder="请输入内容"
            v-model="searchFormData.searchValue"
            class="input-with-select"
          >
            <el-select
              v-model="searchFormData.searchType"
              slot="prepend"
              placeholder="请选择"
            >
              <el-option
                v-for="option in item.info.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="searchFormData.mappingType"
              slot="prepend"
              placeholder="请选择"
            >
              <el-option
                label="等于"
                value="1"
              ></el-option>
              <el-option
                label="半模糊"
                value="2"
              ></el-option>
              <el-option
                label="全模糊"
                value="3"
              ></el-option>
            </el-select>
          </el-input>
        </el-form-item>

        <el-form-item
          v-else-if="item.type === 'select'"
          :key="item.type+index"
          :label="item.info.label"
        >
          <el-select
            v-model="searchFormData[item.info.fieldName]"
            :placeholder="item.info.placeholder || '请选择'"
          >
            <el-option
              v-for="option in item.info.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          v-else-if="item.type === 'input'"
          :key="item.type+index"
          :label="item.info.label"
        >
          <el-input
            v-model="searchFormData[item.info.fieldName]"
            :placeholder="item.info.placeholder || '请输入内容'"
          ></el-input>
        </el-form-item>

        <el-form-item
          v-else-if="item.type === 'date'"
          :key="item.type+index"
          :label="item.info.label"
        >
          <el-date-picker
            v-model="dateTime"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="timeFomat"
          >
          </el-date-picker>
        </el-form-item>
      </template>
      <!-- <template >
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
      </template> -->
      <el-form-item>
        <el-button type="primary" @click="handleSearch(searchFormData)">查询</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['searchItems'],
  created() {},
  data() {
    return {
      searchFormData: {},
      dateTime: '',
      pageNum: 1
    }
  },
  methods: {
    timeFomat() {
      this.searchFormData.startTime = this.dateTime[0]
      this.searchFormData.endTime = this.dateTime[1]
    },
    handleSearch(searchFormData){
      this.$emit('handleSearch',searchFormData)
    },
    resetForm(formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].resetFields()
        this.dateTime = ''
        this.searchFormData = {}
        this.handleSearch(this.searchFormData)
      }
    }
  }
}
</script>

<style lang="scss">
.searchBar {
  background-color: #fff;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  .el-input-group__prepend {
    background-color: #fff;
    padding: 0;
    .el-select {
      margin-left: 0;
      margin-right: 0;
    }
    & > .el-select:first-child {
      border-right: 1px solid #c0c4cc;
    }
  }
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>
