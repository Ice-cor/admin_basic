<template>
  <div class="syntheticalTable">
    <div class="table_item">
      <el-table
        :data="tableData"
        size="small"
        style="width: 100%"
      >
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
            <!-- <template slot-scope="scope">
            <template v-if="item.format == 'other'">
              <slot :row="scope.row" :prop="item.prop" name="otherColums"/>
            </template>
            <template v-else-if="item.format === 'custom'">
              <slot :row="scope.row" :prop="item.prop" :name="item.prop"/>
            </template>
            <template v-else>
              {{ scope.row[item.prop] }}
            </template>
          </template> -->
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
              >我是第三层</slot>
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
  created() {},
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
    return {}
  },
  methods: {}
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
