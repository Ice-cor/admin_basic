<template>
  <div class="syntheticalTable">
    <div class="table_item">
      <el-table :data="tableData" size="small" style="width: 100%">
        <el-table-column
          v-for="(item,index) in columns"
          :fixed="item.fixed"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :class-name="item.bold ? 'bold' : ''"
          :key="index">
          <template slot-scope="scope">
            <template v-if="item.format == 'other'">
              <slot :row="scope.row" :prop="item.prop" name="otherColums"/>
            </template>

            <template v-else>
              {{ scope.row[item.prop] }}
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <slot name="playBtn"><span></span></slot>
      <el-pagination background layout="prev, pager, next" :total="11" @current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SyntheticalTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    initTable: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changePage(page) {
      this.$emit('onChangePage', page)
    } 
  }
}
</script>

<style lang="scss" scoped>
.syntheticalTable {
  flex: 1;
  display: flex;
  flex-direction: column;
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
    padding: 12px 0 12px 12px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
