<template>
  <div class="others">
    <basic-page
      ref="basicPage"
      :searchItems="searchItems"
      :columns="columns"
      :selectionalRows="true"
      @getSelectionalRows="getSelectionalRows"
      apiUrl="getTableList"
    >
      <template v-slot:handle="slotProps">
        <el-button
          @click="handleClick(slotProps.row)"
          type="text"
          size="small"
        >查看</el-button>
        <el-button
          type="text"
          size="small"
        >编辑</el-button>
      </template>
      <template #tag>
        <el-tag>我是自定义内容</el-tag>
      </template>
      <template #playBtn>
        <el-button
          type="primary"
          size="mini"
          @click="add"
        >新增</el-button>
      </template>
    </basic-page>
    <Details
      :dialogData="dialogData"
      :success-call="successCall"
      ref="details"
    >

    </Details>
    <el-dialog
      title="查看信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <h5>日期：{{dialogData.date}}</h5>
      <h5>姓名：{{dialogData.name}}</h5>
      <h5>地址：{{dialogData.address}}</h5>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="initPage"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import BasicPage from '@/components/BasicPage'
import Details from './components/details'
export default {
  name: 'Others',
  components: {
    BasicPage,
    Details
  },
  data() {
    return {
      dialogData: {},
      selectionalRows: [],
      dialogVisible: false,
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
        // {type: 'other',info:{aaa:[{fieldName: '123',placeholder}]}}
      ],
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
          prop: 'tag',
          custom: true,
          label: '自定义',
          width: 200
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'handle',
          custom: true,
          label: '操作',
          width: 100,
          fixed: 'right'
        }
      ]
    }
  },
  methods: {
    successCall() {
      this.$refs.basicPage.initPage()
    },
    handleClick(data) {
      console.log(data, 'data')
      this.dialogData = data
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    },
    getSelectionalRows(data) {
      console.log(data, '我是爸爸')
    },
    initPage() {
      //调用子的initPage方法
      this.$refs.basicPage.initPage()
      this.dialogVisible = false
    },
    add() {
      this.$refs.details.show = true
      this.$api.system
        .add({})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

