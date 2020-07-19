var Mock = require('mockjs')

var Random = Mock.Random
/* eslint-disable */ 
Mock.mock('https://www.test.com/mock/system/login', {
  status: 0,
  operatorId: -1,
  token: '67347ca5-9b37-45d5-a408-c023d89e97c8',
  operatorInfo: {
    operatorId: -1,
    name: '系统管理员',
    username: 'admin',
    roleId: -1,
    roleName: '系统管理员',
    menus: [{
        index: 1000,
        text: '系统管理',
        name: 'system',
        leaf: false,
        icon: 'icon',
        items: [{
            index: 1010,
            text: '修改密码',
            name: 'editPassword',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100001
          },
          {
            index: 1020,
            text: '角色管理',
            name: 'roleList',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100002
          },
        ],
        seq: 100000
      },
      {
        index: -1000,
        text: '实例',
        name: 'example',
        leaf: false,
        icon: 'example',
        items: [{
            index: 1010,
            text: '表格',
            name: 'others',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100001
          },
          {
            index: 1010,
            text: '无',
            name: 'none',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100001
          }
        ]
      }
    ],
    specialPermissions: [{
        index: -1000,
        text: '特殊权限',
        name: 'permission'
      },
      {
        index: -1001,
        text: '电话本查看权限',
        name: 'getPhoneList'
      },
      {
        index: -1004,
        text: '还款明细查看权限',
        name: 'getRepayList'
      },
      {
        index: -1007,
        text: '通话记录查看权限',
        name: 'getCallList'
      },
      {
        index: -1008,
        text: '用户短信记录查看权限',
        name: 'getSmsList'
      },
      {
        index: -1009,
        text: '银行卡查看权限',
        name: 'geBankList'
      }
    ]
  }
})

Mock.mock('https://www.test.com/mock/system/getOperatorInfo', {
  status: 0,
  operatorId: -1,
  token: '67347ca5-9b37-45d5-a408-c023d89e97c8',
  operatorInfo: {
    operatorId: -1,
    name: '系统管理员',
    username: 'admin',
    roleId: -1,
    roleName: '系统管理员',
    menus: [{
        index: 1000,
        text: '系统管理',
        name: 'system',
        leaf: false,
        icon: 'icon',
        items: [{
            index: 1010,
            text: '修改密码',
            name: 'editPassword',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100001
          },
          {
            index: 1020,
            text: '角色管理',
            name: 'roleList',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100002
          },
        ],
        seq: 100000
      },
      {
        index: -1000,
        text: '实例',
        name: 'example',
        leaf: false,
        icon: 'example',
        items: [{
            index: 1010,
            text: '表格',
            name: 'others',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100001
          },
          {
            index: 1010,
            text: '无',
            name: 'none',
            leaf: true,
            icon: 'setting',
            items: [],
            seq: 100001
          }
        ]
      }
    ],
    specialPermissions: [{
        index: -1000,
        text: '特殊权限',
        name: 'permission'
      },
      {
        index: -1001,
        text: '电话本查看权限',
        name: 'getPhoneList'
      },
      {
        index: -1004,
        text: '还款明细查看权限',
        name: 'getRepayList'
      },
      {
        index: -1007,
        text: '通话记录查看权限',
        name: 'getCallList'
      },
      {
        index: -1008,
        text: '用户短信记录查看权限',
        name: 'getSmsList'
      },
      {
        index: -1009,
        text: '银行卡查看权限',
        name: 'geBankList'
      }
    ]
  }
})

Mock.mock('https://www.test.com/mock/system/logout',{
    "status": 0,
    "data": {}
  })

Mock.mock('https://www.test.com/mock/group/getTableList',(req, res) => {
  const pageSize = JSON.parse(req.body).pageSize
  // console.log(body.pageSize)
  let list;
  if (pageSize === 10) {
    list =  Mock.mock({
      "list|10": [{
        'name': '@cname',
        'date': '@date(yyyy-mm-dd)',
        'address': '@county(true)'
      }]
    }).list
  } else if (pageSize === 20) {
    list  = Mock.mock({
      "list|20": [{
        'name': '@cname',
        'date': '@date(yyyy-mm-dd)',
        'address': '@county(true)'
      }]
    }).list
  }
  return {
    'status': 0,
    'totalNum': 50,
    "list": list
  }
})