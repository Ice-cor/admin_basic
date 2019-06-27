// 金额分隔符
export function moneySplit(value) {
  if (!value) return '0.00'
  else if (value == '--') return value
  // 预定义整数部分
  const inpart = parseInt(value).toFixed(0)
  const intpartFormat = inpart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  // 预定义小数部分
  let floatpat = '.00'
  const value2Array = value.toString().split('.')
  // 表示数据有小数位
  if (value2Array.length == 2) {
    floatpat = value2Array[1].toString()
    if (floatpat.length == 1) {
      return intpartFormat + '.' + floatpat + '0'
    } else {
      return intpartFormat + '.' + floatpat
    }
  } else {
    return intpartFormat + floatpat
  }
}

// 数字分隔符
export function numberSplit(value) {
  if (!value) return '0'
  const inpart = parseInt(value).toFixed(0)
  return inpart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 姓名脱敏
export function nameHide(value) {
  if (!value) return value
  return value.substr(0, 1) + new Array(value.length).join('*')
}

// 身份证脱敏
export function cardHide(value) {
  if (!value || value.length < 9) return value
  return value.replace(/^(.{6})(?:\d+)(.{4})$/, '$1******$2')
}

// 日期分割符
export function parseTime(time, cFormat) {
  if (time === null) {
    return ''
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else if (('' + time).length === 10) {
    time = parseInt(time) * 1000
    date = new Date(time)
  } else {
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
