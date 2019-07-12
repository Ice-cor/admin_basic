import Mock from 'mockjs'

// console.log(Mock,'mockkkk')

// Mock.mock('http://localhost:8080/system/login', 'post', {
//   status: 0,
//   operatorId: -1,
//   token: '67347ca5-9b37-45d5-a408-c023d89e97c8',
//   operatorInfo: {
//     operatorId: -1,
//     name: '系统管理员',
//     username: 'admin',
//     roleId: -1,
//     roleName: '系统管理员',
//     menus: [
//       {
//         index: 1000,
//         text: '系统管理',
//         name: 'system',
//         leaf: false,
//         icon: 'icon',
//         items: [
//           {
//             index: 1010,
//             text: '修改密码',
//             name: 'editPassword',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100001
//           },
//           {
//             index: 1020,
//             text: '角色管理',
//             name: 'roleList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100002
//           },
//           {
//             index: 1030,
//             text: '用户管理',
//             name: 'operatorList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100003
//           },
//           {
//             index: 1040,
//             text: '分组管理',
//             name: 'groupList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100004
//           }
//         ],
//         seq: 100000
//       },
//       {
//         index: -1000,
//         text: '实例',
//         name: 'example',
//         leaf: false,
//         icon: 'example',
//         items: [
//           {
//             index: 1010,
//             text: '表格',
//             name: 'table',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100001
//           },
//           {
//             index: 1010,
//             text: '其他',
//             name: 'others',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100001
//           }
//         ]
//       }
//     ],
//     specialPermissions: [
//       {
//         index: -1000,
//         text: '特殊权限',
//         name: 'permission'
//       },
//       {
//         index: -1001,
//         text: '电话本查看权限',
//         name: 'getPhoneList'
//       },
//       {
//         index: -1004,
//         text: '还款明细查看权限',
//         name: 'getRepayList'
//       },
//       {
//         index: -1007,
//         text: '通话记录查看权限',
//         name: 'getCallList'
//       },
//       {
//         index: -1008,
//         text: '用户短信记录查看权限',
//         name: 'getSmsList'
//       },
//       {
//         index: -1009,
//         text: '银行卡查看权限',
//         name: 'geBankList'
//       }
//     ]
//   }
// })

// Mock.mock('http://localhost:8080/system/getOperatorInfo', 'post', {
//   status: 0,
//   operatorInfo: {
//     operatorId: -1,
//     name: '系统管理员',
//     username: 'admin',
//     roleId: -1,
//     roleName: '系统管理员',
//     menus: [
//       {
//         index: 1000,
//         text: '系统管理',
//         name: 'system',
//         leaf: false,
//         icon: 'setting',
//         items: [
//           {
//             index: 1010,
//             text: '修改密码',
//             name: 'editPassword',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100001
//           },
//           {
//             index: 1020,
//             text: '角色管理',
//             name: 'roleList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100002
//           },
//           {
//             index: 1030,
//             text: '用户管理',
//             name: 'operatorList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100003
//           },
//           {
//             index: 1040,
//             text: '分组管理',
//             name: 'groupList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 100004
//           }
//         ],
//         seq: 100000
//       },
//       {
//         index: 2000,
//         text: '高级管理',
//         name: 'advanced',
//         leaf: false,
//         icon: 'lock',
//         items: [
//           {
//             index: 2001,
//             text: '案件重置',
//             name: 'resetCase',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 200001
//           },
//           {
//             index: 2002,
//             text: '未分派案件',
//             name: 'unAllotCase',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 200002
//           },
//           {
//             index: 2010,
//             text: '已分派案件',
//             name: 'innerAllotCase',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 200004
//           },
//           {
//             index: 2004,
//             text: '催收案件查询',
//             name: 'advancedCaseQuery',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 200007
//           },
//           {
//             index: 2005,
//             text: '申请结案队列',
//             name: 'applySettleQuery',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 200009
//           }
//         ],
//         seq: 200000
//       },
//       {
//         index: 3000,
//         text: '工单管理',
//         name: 'workorder',
//         leaf: false,
//         icon: 'customerservice',
//         items: [
//           {
//             index: 3001,
//             text: '待处理催收工单',
//             name: 'waitHandle',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 400001
//           },
//           {
//             index: 3002,
//             text: '当日需处理',
//             name: 'todayHandle',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 400002
//           },
//           {
//             index: 3003,
//             text: '案件查询',
//             name: 'workorderCaseQuery',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 400003
//           },
//           {
//             index: 3005,
//             text: '催收记录查询',
//             name: 'findApplyRecordList',
//             leaf: true,
//             icon: 'setting',
//             items: [],
//             seq: 400005
//           }
//         ],
//         seq: 400000
//       }
//     ],
//     specialPermissions: [
//       {
//         index: -1000,
//         text: '特殊权限',
//         name: 'permission'
//       },
//       {
//         index: -1001,
//         text: '电话本查看权限',
//         name: 'getPhoneList'
//       },
//       {
//         index: -1004,
//         text: '还款明细查看权限',
//         name: 'getRepayList'
//       },
//       {
//         index: -1007,
//         text: '通话记录查看权限',
//         name: 'getCallList'
//       },
//       {
//         index: -1008,
//         text: '用户短信记录查看权限',
//         name: 'getSmsList'
//       },
//       {
//         index: -1009,
//         text: '银行卡查看权限',
//         name: 'geBankList'
//       }
//     ]
//   }
// })

// Mock.mock('http://localhost:8080/group/getTableList', 'post', {
//   status: 0,
//   list: [
//     {
//       date: '2016-05-02',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1518 弄'
//     },
//     {
//       date: '2016-05-04',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1517 弄'
//     },
//     {
//       date: '2016-05-01',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1519 弄'
//     },
//     {
//       date: '2016-05-03',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1516 弄'
//     },
//     {
//       date: '2016-05-02',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1518 弄'
//     },
//     {
//       date: '2016-05-04',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1517 弄'
//     },
//     {
//       date: '2016-05-01',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1519 弄'
//     },
//     {
//       date: '2016-05-03',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1516 弄'
//     },
//     {
//       date: '2016-05-02',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1518 弄'
//     },
//     {
//       date: '2016-05-02',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1518 弄'
//     }
//   ],
//   totalNum: 50
// })
