<template>
  <div class="roleList">
    <basic-page
      :searchItems="searchItems"
      :columns="columns"
      apiUrl="admin"
    >
      <template slot="handle" slot-scope="slotProps" >
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
      <template  slot="name2">
        <el-button size="mini">
          你好ma 
        </el-button>
      </template>
      <template v-slot:createTime="scope">
        <span>{{scope.row.createTime | parseTime}}</span>
      </template>
      <template #playBtn>
        <el-button
          type="primary"
          size="mini"
        >新增</el-button>
      </template>
    </basic-page>
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
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import BasicPage from '@/components/BasicPage'
export default {
  name: 'Others',
  components: {
    BasicPage
  },
  data() {
    return {
      dialogData: {},
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
          prop: 'nickname',
          label: '姓名',
          width: 120
        },
        {
          prop: 'roles/name',
          label: '角色名',
          width: 120,
        },
        {
          prop: 'username',
          label: '登录账号',
          width: 120
        },
        {
          prop: 'createTime',
          label: '创建时间',
          custom: true,
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
    handleClick(data) {
      console.log(data, 'data222')
      this.dialogData = data
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

