import request from '@/utils/request'
import system from './components/system'
import group from './components/group'
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

export default {
  system,
  group
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
