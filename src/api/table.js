import ajax from '@/utils/ajax'

export function getList(data) {
  let params = {
    name: data.name || '',
    phone: data.phone || '',
    card: data.card || '',
    mode: data.mode || '',
    _page: data.page || 1,
    _limit: data.limit || 8
  }
  // 删除为空属性
  Object.keys(params).forEach(item => {
    if (!params[item]) {
      delete params[item]
    }
  })
  return ajax({
    url: 'list',
    method: 'get',
    params
  })
}
