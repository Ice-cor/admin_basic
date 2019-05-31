<template>
  <div class="searchBar">
    <el-form
      rel="form"
      :model="{}"
      size="mini"
      :inline="true"
    >
      <el-form-item style="width: 360px">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-select
            v-model="select"
            slot="prepend"
            placeholder="请选择"
          >
            <el-option
              label="餐厅名"
              value="1"
            ></el-option>
            <el-option
              label="订单号"
              value="2"
            ></el-option>
            <el-option
              label="用户电话"
              value="3"
            ></el-option>
          </el-select>
          <el-select
            v-model="select"
            slot="prepend"
            placeholder="请选择"
          >
            <el-option
              label="餐厅名"
              value="1"
            ></el-option>
            <el-option
              label="订单号"
              value="2"
            ></el-option>
            <el-option
              label="用户电话"
              value="3"
            ></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入内容"
          style="width: 138px;"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入内容"
          style="width: 138px;"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="value"
          placeholder="请选择"
        >
          <el-option
            label="餐厅名"
            value="1"
          ></el-option>
          <el-option
            label="订单号"
            value="2"
          ></el-option>
          <el-option
            label="用户电话"
            value="3"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="value"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item style="width: 360px">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-select
            v-model="select"
            slot="prepend"
            placeholder="请选择"
          >
            <el-option
              label="餐厅名"
              value="1"
            ></el-option>
            <el-option
              label="订单号"
              value="2"
            ></el-option>
            <el-option
              label="用户电话"
              value="3"
            ></el-option>
          </el-select>
          <el-select
            v-model="select"
            slot="prepend"
            placeholder="请选择"
          >
            <el-option
              label="餐厅名"
              value="1"
            ></el-option>
            <el-option
              label="订单号"
              value="2"
            ></el-option>
            <el-option
              label="用户电话"
              value="3"
            ></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入内容"
          style="width: 138px;"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入内容"
          style="width: 138px;"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="value"
          placeholder="请选择"
        >
          <el-option
            label="餐厅名"
            value="1"
          ></el-option>
          <el-option
            label="订单号"
            value="2"
          ></el-option>
          <el-option
            label="用户电话"
            value="3"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="value"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      value: '',
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
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