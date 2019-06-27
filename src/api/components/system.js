import { _get, _post } from '../apiMethods.js'

//登陆
export function login(username, password) {
  return _post('system/login', {
    username,
    password
  })
}
