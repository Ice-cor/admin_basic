<template>
  <div class="table">
    <SearchBar
      :searchItems="searchItems"
      @handleSearch="handleSearch"
    >
    
    </SearchBar>
    <synthetical-table
      v-loading="loading"
      :tableData="tableData"
      :columns="columns"
    >
      <template
        slot="otherColums"
        slot-scope="scope"
      >
        <template v-if="scope.prop == 'handle'">
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
      </template>

    </synthetical-table>
    <synthetical-pagination
      @handlePageChange="handlePageChange"
      @handleSizeChange="handleSizeChange"
      :paginationData="paginationData"
    >
      <template #playBtn>
        <el-button
          type="primary"
          size="mini"
        >新增</el-button>
      </template>
    </synthetical-pagination>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import SyntheticalTable from './components/SyntheticalTable'
import SyntheticalPagination from './components/SyntheticalPagination'
import { getTableList } from '@/api'
export default {
  name: 'Table',
  components: { SearchBar, SyntheticalTable, SyntheticalPagination },
  data() {
    return {
      loading: false,
      tableData: [],
      columns: [
        {
          prop: 'date',
          label: '日期',
          width: 180
        },
        {
          prop: 'name',
          label: '姓名',
          width: 180
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'handle',
          format: 'other',
          label: '操作',
          width: 100,
          fixed: 'right'
        }
      ],
      searchItems: [
        {
          type: 'select_phone',
          info: {
            fieldName: ['searchType', 'mappingType', 'searchValue'],
            placeholder: '请选择类型',
            options: [
              { label: '手机号', value: '1' },
              { label: '身份证', value: '2' },
              { label: '姓名', value: '3' }
            ]
          }
        },
        {
          type: 'select',
          info: {
            fieldName: 'fieldName2',
            placeholder: '平台类型',
            options: [
              { label: '租来用', value: '1' },
              { label: '提前用', value: '2' }
            ]
          }
        },
        {
          type: 'input',
          info: { fieldName: 'fieldName3', placeholder: '请输入1111' }
        },
        { type: 'date', info: { label: '' } }
      ],
      searchFormData: {},
      paginationData: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {
    this.initTable()
  },
  methods: {
    initTable() {
      this.getTableData()
      console.log(this.searchFormData,'searchFormData')
      console.log(this.paginationData,'paginationData');
      
    },
    getTableData() {
      this.loading = true
      getTableList({
        pageNo: this.paginationData.currentPage,
        pageSize: this.paginationData.pageSize,
        searchFormData: this.searchFormData
      }).then(res => {
        this.tableData = res.list || []
        this.paginationData.total = res.totalNum
        this.loading = false
      })
       .catch(err => {
          this.loading = false
        })
    },
    handleClick(data) {
      console.log(data)
    },
    handleSearch(data) {
      this.searchFormData = data
      this.paginationData.currentPage = 1
      this.initTable()
    },
    handlePageChange(page) {
      this.paginationData.currentPage = page
      this.initTable()
    },
    handleSizeChange(size){
       this.paginationData.pageSize = size
        this.initTable()
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
