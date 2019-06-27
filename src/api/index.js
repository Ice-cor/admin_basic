import request from '@/utils/request'
import qs from 'qs'

// get请求
const _get = (url, data) => {
  return request.get(url, {
    params: data
  })
}

// post请求
const _post = (url, data) => {
  return request.post(url, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//登陆
export function login(username, password) {
  return _post('system/login', {
    username,
    password
  })
}

//回滚时间提示
export function getRollbackTime(data) {
  return _post('advanced/getRollbackTime', data)
}

// 退出
export function outLogin() {
  return _post('system/logout', {})
}

//获取用户信息
export function getInfo() {
  return _get('manager/getManagerUser')
}

//获取用户信息2
export function getUserInfo(data) {
  return _post('user/getUserInfo', data)
}

//获取用户菜单列表
export function getMenus(operatorId, token) {
  return _post('system/getOperatorInfo', {
    operatorId,
    token
  })
}

//获取主菜单列表
export function getMangerMenu(operatorId, token) {
  return _post('role/getPermissionList', {
    operatorId,
    token
  })
}

//获取角色权限
export function getRolePermissionList(operatorId, token, roleId) {
  return _post('role/getRolePermissionList', {
    operatorId,
    token,
    roleId
  })
}

//获取table列表数据
export function getTableList(url,data) {
  return _post('group/'+url, data)
}

//获取分组列表2
export function getGroupList(data) {
  return _post('group/getGroupList', data)
}

//编辑分组
export function editGroup(data) {
  return _post('group/editGroup', data)
}

//添加分组
export function addGroup(data) {
  return _post('group/addGroup', data)
}

//分页查询用户列表
export function getUserList(data) {
  return _post('user/getUserList', data)
}

//新增用户
export function addManagerUser(data) {
  return _post('manager/addManagerUser', data)
}

//新增用户2
export function addUser(data) {
  return _post('user/addUser', data)
}

//修改用户信息
export function updateManagerUser(data) {
  return _post('manager/updateManagerUser', data)
}

//编辑用户信息
export function editUser(data) {
  return _post('user/editUser', data)
}

//查询角色列表
export function getRoleList(operatorId, token) {
  return _post('role/getRoleList', {
    operatorId,
    token
  })
}

//修改用户名称
export function updateManagerUserName(name) {
  return _post('manager/updateManagerUserName', {
    name
  })
}

//修改密码
export function editPassword(data) {
  return _post('user/editPassword', data)
}

//禁止登陆
export function updateManagerUserStatus(id, status) {
  return _post('manager/updateManagerUserStatus', {
    id,
    status
  })
}

// 重置密碼
export function resetPassword(data) {
  return _post('user/resetPassword', data)
}

// 添加角色
export function addManagerRole(data) {
  return _post('role/addRole', data)
}

// 修改角色
export function updateManagerRole(data) {
  return _post('role/editRole', data)
}

/*-------------------------------交易模块---------------------------------------*/

// 查询充值交易
export function listDepositRecord(data) {
  return _post('fund/listDepositRecord', data)
}

// 查询融租交易
export function listInvestRecord(data) {
  return _post('fund/listInvestRecord', data)
}

// 查询返利交易
export function listRebateRecord(data) {
  return _post('fund/listRebateRecord', data)
}

// 查询收益交易
export function listIncomeRecord(data) {
  return _post('fund/listIncomeRecord', data)
}

// 查询提现交易
export function listWithdrawRecord(data) {
  return _post('fund/listWithdrawRecord', data)
}

// 提现审核
export function approveWithdraw(id, status) {
  return _post('fund/approveWithdraw', {
    withdrawId: id,
    approveStatus: status
  })
}

/*-------------------------------产品模块---------------------------------------*/

// 产品列表
export function listProduct(data) {
  return _post('fund/listProduct', data)
}

// 编辑产品
export function updateProduct(data) {
  return _post('fund/updateProduct', data)
}

// 添加产品
export function addProduct(data) {
  return _post('fund/addProduct', data)
}

//返利规则
export function listRebateRule() {
  return _get('fund/listRebateRule')
}

// 添加返利
export function addRebateRule(data) {
  return _post('fund/addRebateRule', data)
}

// 编辑返利
export function updateRebateRule(data) {
  return _post('fund/updateRebateRule', data)
}

/*-------------------------------客户模块---------------------------------------*/

// 客户列表
export function listUserInfor(data) {
  return _post('user/listUserInfor', data)
}

// 用户基本/账户信息
export function queryUserAccount(id) {
  return _post('fund/queryUserAccount', {
    userId: id
  })
}

// 投资信息
export function queryUserInvestRecord(page, id) {
  return _post('fund/queryUserInvestRecord', {
    currentNo: page,
    userId: id
  })
}

// 资金记录信息
export function queryUserFundRecord(page, id) {
  return _post('fund/queryUserFundRecord', {
    currentNo: page,
    userId: id
  })
}

// 邀请信息
export function getUserInviteRecord(page, id) {
  return _post('fund/getUserInviteRecord', {
    currentNo: page,
    userId: id
  })
}

// 返现信息
export function queryUserFundRebateRecord(page, id) {
  return _post('fund/queryUserFundRebateRecord', {
    currentNo: page,
    userId: id
  })
}

/*-------------------------------高级管理---------------------------------------*/
/*--------已分派案件---------*/
//已分派案件列表
export function getInnerAllotList(data) {
  return _post('advanced/getInnerAllotList', data)
}

//查询催收员列表
export function getOperatorList(data) {
  return _post('advanced/getOperatorList', data)
}

//已分派队列转单
export function turnAlreadyAllot(data) {
  return _post('advanced/turnAlreadyAllot', data)
}

//销案
export function setSettle(data) {
  return _post('advanced/setSettle', data)
}
/*--------未分派案件---------*/
//未分派案件
export function getUnAllotList(data) {
  return _post('advanced/getUnAllotList', data)
}

//未分派队列转单
export function turnUnAllot(data) {
  return _post('advanced/turnUnAllot', data)
}
/*--------申请结案队列---------*/
//申请结案队列列表
export function getApplySettleList(data) {
  return _post('advanced/getApplySettleList', data)
}

//同意结案
export function adoptApplySettle(data) {
  return _post('advanced/adoptApplySettle', data)
}

//拒绝结案
export function rejectApplySettle(data) {
  return _post('advanced/rejectApplySettle', data)
}
/*--------催收案件查询---------*/
//历史案件查询列表
export function getCaseQueryList(data) {
  return _post('advanced/getCaseQueryList', data)
}

// //历史案件查询列表（催收员）
// export function getCaseQueryList2(data) {
//   return _post('workorder/getCaseQueryList', data)
// }

/*--------案件重置---------*/
//获取案件重置人员列表
export function getResetCaseList(data) {
  return _post('advanced/getResetCaseList', data)
}

//重置案件确认
export function resetCase(data) {
  return _post('advanced/resetCase', data)
}

/*-------------------------------工单管理---------------------------------------*/

/*--------待处理催收工单---------*/
//获取待处理工单队列列表信息
export function getWaitHandleList(data) {
  return _post('workorder/getWaitHandleList', data)
}

//获取用户信息
export function getUserBaseInfo(data) {
  return _post('collection/getUserBaseInfo', data)
}

//获取催收件信息
export function getApplyBaseDetail(data) {
  return _post('collection/getApplyBaseDetail', data)
}

//获取通讯录列表
export function getUserPhoneList(data) {
  return _post('special/getUserPhoneList', data)
}

//获取联系人信息
export function getContactsInfo(data) {
  return _post('special/getContactsInfo', data)
}

//获取通话记录
// export function getCallInfo(data) {
//   return _post('special/getCallInfo', data)
// }

//获取还款历史
export function getRepayList(data) {
  return _post('collection/getRepayList', data)
}

//获取还款详情
export function getRepayDetail(data) {
  return _post('collection/getRepayDetail', data)
}

//获取催收员行动类型列表
export function getColActionType(data) {
  return _post('type/getColActionType', data)
}

//获取催收记录类型列表
export function getRecordType(data) {
  return _post('type/getRecordType', data)
}

//添加催收记录type/getSms
export function addColRecord(data) {
  return _post('colrecord/addColRecord', data)
}

//获取短信平台列表
export function getSms(data) {
  return _post('type/getSms', data)
}

//分页查询催收记录（催收件详情）
export function getColRecordList(data) {
  return _post('colrecord/getColRecordList', data)
}

//获取当日需处理工单列表
export function getTodayHandleList(data) {
  return _post('workorder/getTodayHandleList', data)
}

//获取催收提醒时间
export function getRemindDate(data) {
  return _post('colrecord/getRemindDate', data)
}

//获取照片
export function getFastPhotoInfo(data) {
  return _post('special/getFastPhotoInfo', data)
}

//获取银行卡
export function getBankCardList(data) {
  return _post('special/getBankCardList', data)
}
//添加重点案件&取消重点案件
export function setImportant(data) {
  return _post('workorder/setImportant', data)
}
//获取公共案件列表
export function getPubCaseQueryList(data) {
  return _post('workorder/getPubCaseQueryList', data)
}
//获取公共案件列表
export function pullPubCase(data) {
  return _post('workorder/pullPubCase', data)
}
/*--------当日需处理---------*/
//案件丢案
export function dropCase(data) {
  return _post('workorder/dropCase', data)
}

//案件留案
export function extendRollbackTime(data) {
  return _post('workorder/extendRollbackTime', data)
}

/*--------案件查询---------*/
//催收记录查询
export function findApplyRecordList(data) {
  return _post('collection/findApplyRecordList', data)
}

//催收记录查询(管理员)
export function getAllApplyRecordQuery(data) {
  return _post('advanced/getAllApplyRecordQuery', data)
}
//案件查询
export function getCaseQueryList2(data) {
  return _post('workorder/getCaseQueryList', data)
}

//获取通讯录type/getClientType
export function getCallInfo(data) {
  return _post('moxie/getCallInfo', data)
}

//获取客户端类型
export function getClientType(data) {
  return _post('type/getClientType', data)
}

//获取客户端类型
export function updateUserAllotStatus(data) {
  return _post('user/updateUserAllotStatus', data)
}

//获取分派详情
export function getColApplyAllotList(data) {
  return _post('advanced/getColApplyAllotList', data)
}

//编辑用户分派数
export function updateUserAllotCount(data) {
  return _post('user/updateUserAllotCount', data)
}

//编辑用户分派数
export function getTodayAllotList(data) {
  return _post('advanced/getTodayAllotList', data)
}

//未还案件库
export function getUnRepayCaseQueryList(data) {
  return _post('workorder/getUnRepayCaseQueryList', data)
}

//催收件统计
export function getStatisticsEverDay(data) {
  return _post('statistics/getStatisticsEverDay', data)
}

//个人催收件统计
export function getStatisticsOperator(data) {
  return _post('statistics/getStatisticsOperator', data)
}

//每日未还统计
export function getStatisticsUnRepay(data) {
  return _post('statistics/getStatisticsUnRepay', data)
}

//分单管理
export function getAllotList(data) {
  return _post('user/getAllotList', data)
}

//S2留案数量修改
export function updateUserHoldApplyCount(data) {
  return _post('user/updateUserHoldApplyCount', data)
}

//获取讯鸟
export function getXunniaoInfo(data) {
  return _post('user/getXunniaoInfo', data)
}

//保存讯鸟
export function saveXunniaoInfo(data) {
  return _post('user/saveXunniaoInfo', data)
}

//导出excel 催收记录
export function exportApplyRecord(data) {
  return _get('advanced/exportApplyRecord', data)
}

//催收员首页
export function message(data) {
  return _post('home/message', data)
}

//app登陆信息
export function applicationInfo(data) {
  return _post('home/applicationInfo', data)
}

//承诺还款列表
export function getCommitmentList(data) {
  return _post('workorder/getCommitmentList', data)
}

//获取语音机器人账户
export function getAccount(data) {
  return _post('advanced/getAccount', data)
}

//获取机器人
export function getRobot(data) {
  return _post('advanced/getRobot', data)
}

//获取余额
export function getRobotBalance(data) {
  return _post('advanced/getRobotBalance', data)
}

//新增机器人配置
export function saveVoiceRobot(data) {
  return _post('advanced/saveVoiceRobot', data)
}

//机器人配置队列
export function getVoiceRobotList(data) {
  return _post('advanced/getVoiceRobotList', data)
}

//更新机器人配置启用状态
export function updateVoiceRobotEnableStatus(data) {
  return _post('advanced/updateVoiceRobotEnableStatus', data)
}

//更新机器人配置
export function updateVoiceRobot(data) {
  return _post('advanced/updateVoiceRobot', data)
}

export function getWordsTemplate(data) {
  return _post('advanced/getWordsTemplate', data)
}
