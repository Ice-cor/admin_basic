<template>
  <div class="syntheticalTable">
    <div class="table_item">
      <el-table
        :data="tableData"
        size="small"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          v-if="$attrs.selectionalRows"
        >
        </el-table-column>
        <template v-for="(item,index) in columns">
          <el-table-column
            v-if="!item.custom"
            :fixed="item.fixed"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :class-name="item.bold ? 'bold' : ''"
            :key="index"
          >
          </el-table-column>
          <el-table-column
            v-else
            :fixed="item.fixed"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :class-name="item.bold ? 'bold' : ''"
            :key="index"
          >
            <template scope="scope">
              <slot
                :name="item.prop"
                :row="scope.row"
              ></slot>
            </template>
          </el-table-column>
        </template>

      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SyntheticalTable',
  created() {
    
  },
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
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      // this.multipleSelection = val
      this.$emit('getSelectionalRows', val)
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
}
</style>
