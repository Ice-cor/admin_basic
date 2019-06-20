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
        <slot name="test" v-bind:row="scope.row">
          {{scope.row.name}}
        </slot>
        <!-- <template v-if="scope.prop == 'handle'">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >查看</el-button>
          <el-button
            type="text"
            size="small"
          >编辑</el-button>
        </template> -->
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
  props:['searchItems','apiUrl','columns'],
  data() {
    return {
      loading: false,
      tableData: [],
      searchFormData: {},
      paginationData: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    initPage() {
      this.getTableData()
      console.log(this.searchFormData, 'searchFormData')
      console.log(this.paginationData, 'paginationData')
    },
    getTableData() {
      this.loading = true
     getTableList(this.apiUrl,{
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
      this.initPage()
    },
    handlePageChange(page) {
      this.paginationData.currentPage = page
      this.initPage()
    },
    handleSizeChange(size) {
      this.paginationData.pageSize = size
      this.initPage()
    }
  }
}
</script>

<style lang="scss">
.table {
  //纵向布局，table栏自适应，两边固定高
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
