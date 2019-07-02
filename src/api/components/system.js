import { _get, _post } from '../apiMethods.js'

const system = {
  //登陆
  login(username, password) {
    return _post('system/login', {
      username,
      password
    })
  },
  //登出
  outLogin() {
    return _post('system/logout', {})
  },
  //获取用户菜单列表
  getMenus(operatorId, token) {
    return _post('system/getOperatorInfo', {
      operatorId,
      token
    })
  },
  add(data){
    return _post('system/add',data)
  }
}

export default system
