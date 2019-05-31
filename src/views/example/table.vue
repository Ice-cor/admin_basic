<template>
  <div class="table">
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
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="table_item">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small"
            >查看</el-button>
            <el-button
              type="text"
              size="small"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-button
        type="primary"
        size="mini"
        style="margin-left: 10px;"
      >新增</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      value: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        
      ],
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style lang="scss">
.table {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // padding: 12px;
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
  .table_item {
    flex: 1;
    padding: 12px;
    background-color: #fff;
    border-radius: 4px;
    // min-height: 650px;
    // height: 720px;
    overflow-y: auto;
  }
  .pagination {
    padding: 12px 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
}
</style>