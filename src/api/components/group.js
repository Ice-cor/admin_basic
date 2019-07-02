import { _get, _post } from '../apiMethods.js'

const group = {
  //获取table列表数据
  getTableList(data) {
    return _post('group/getTableList', data)
  },

  //获取分组列表2
  getGroupList(data) {
    return _post('group/getGroupList', data)
  },

  //编辑分组
  editGroup(data) {
    return _post('group/editGroup', data)
  },

  //添加分组
  addGroup(data) {
    return _post('group/addGroup', data)
  }
}

export default group
