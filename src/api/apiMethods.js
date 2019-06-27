import request from '@/utils/request'

export const _get = (url, data) => {
    return request.get(url, {
      params: data
    })
  }
  
  // post请求
  export const _post = (url, data) => {
    return request.post(url, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
