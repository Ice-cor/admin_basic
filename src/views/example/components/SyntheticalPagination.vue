<template>
  <div class="pagination">
    <slot name="playBtn"><span></span></slot>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next"
      :total="paginationData.total"
      :page-size="paginationData.pageSize"
      :current-page="paginationData.currentPage"
      @current-change="changePage"
      @size-change="changeSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'SyntheticalPagination',
  props:{
      paginationData:{
          type: Object,
          required: true
      }
  },
  methods: {
    changePage(page) {
      this.$emit('handlePageChange', page)
    },
    changeSize(size){
        this.$emit('handleSizeChange', size)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 12px 0 12px 12px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>