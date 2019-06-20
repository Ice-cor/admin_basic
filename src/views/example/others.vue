<template>
  <div class="others">
    <my-table
      :searchItems="searchItems"
      :columns="columns"
      apiUrl="getTableList"
    >

    </my-table>
  </div>
</template>

<script>
import MyTable from '@/components/BasicPage'
export default {
  name: 'Others',
  components: {
    MyTable
  },
  data() {
    return {
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
      ]
    }
  }
}
</script>

