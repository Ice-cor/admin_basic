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
      <!-- <template v-for="column in columns">
        <template
          :slot="column.prop"
          slot-scope="scope"
          v-if="column.format == 'custom'"
        >
          <slot
            :name="column.prop"
            v-bind:row="scope.row"
          ></slot>
        </template>
      </template> -->

      <!-- <template
        slot="otherColums"
        slot-scope="scope"
      >
        <slot
          name="otherColums"
          v-bind:row="scope.row"
        >
          {{scope.row.name}}
        </slot>
      </template> -->

      <template
        v-for="(column,index) in customColumns"
        :slot="column.prop"
        slot-scope="scope"
      >
        <slot
          :name="column.prop"
          v-bind:row="scope.row"
          :index="index"
        >222</slot>
      </template>

      <!-- <template slot="name2">
        123
      </template> -->
    </synthetical-table>
    <synthetical-pagination
      @handlePageChange="handlePageChange"
      @handleSizeChange="handleSizeChange"
      :paginationData="paginationData"
    >
      <template #playBtn>
        <slot name="playBtn"></slot>
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
  name: 'BasicPage',
  components: { SearchBar, SyntheticalTable, SyntheticalPagination },
  props: ['searchItems', 'apiUrl', 'columns'],
  data() {
    return {
      loading: false,
      tableData: [],
      searchFormData: {},
      paginationData: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
    }
  },
  created() {
    this.initPage()

  },
  computed: {
    customColumns() {
      return this.columns.filter(column => column.custom)
    }
  },
  methods: {
    initPage() {
      this.getTableData()
    },
    getTableData() {
      this.loading = true
      getTableList(this.apiUrl, {
        ...this.searchFormData,
        pageNo: this.paginationData.currentPage,
        pageSize: this.paginationData.pageSize,
      })
        .then(res => {
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
