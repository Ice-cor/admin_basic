<template>
  <div class="table">
    <SearchBar></SearchBar>
    <SyntheticalTable v-loading="loading" :tableData="tableData" :columns="columns" @onChangePage="changeData">
      <template slot="otherColums" slot-scope="scope">
        <template v-if="scope.prop == 'handle'">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </template>

      <template slot="playBtn">
        <el-button type="primary" size="mini">新增</el-button>
      </template>
    </SyntheticalTable>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import SyntheticalTable from './components/SyntheticalTable'
import { getTableList } from '@/api'
export default {
  name: 'Table',
  components: { SearchBar, SyntheticalTable },
  data() {
    return {
      loading: false,
      tableData: [],
      columns: [
        {
          prop: 'date', label: '日期', width: 180
        },
        {
          prop: 'name', label: '姓名', width: 180
        },
        {
          prop: 'address', label: '地址'
        },
        {
          prop: 'handle', format: 'other', label: '操作', width: 100, fixed: 'right'
        }
      ],
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  },
  created () {
    this.initTable(1)
  },
  methods: {
    initTable(page) {
      this.loading = true
      getTableList({pageSize: page}).then(res => {
        this.tableData = res.list || []
        this.loading = false
      }).catch(err => {
        this.loading = false
      })
    },
    handleClick(data) {
      console.log(data)
    },
    changeData(page) {
      this.initTable(page)
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
}
</style>
