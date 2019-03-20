// 月份处理
var numToMon = function (value) {
  switch (value) {
    case 0:
      return '一'
      break
    case 1:
      return '二'
      break
    case 2:
      return '三'
      break
    case 3:
      return '四'
      break
    case 4:
      return '五'
      break
    case 5:
      return '六'
      break
    case 6:
      return '七'
      break
    case 7:
      return '八'
      break
    case 8:
      return '九'
      break
    case 9:
      return '十'
      break
    case 10:
      return '十一'
      break
    case 11:
      return '十二'
      break
    default:
      break
  }
}
// 星期处理
var numToDay = function (value) {
  switch (value) {
    case 0:
      return '日'
      break
    case 1:
      return '一'
      break
    case 2:
      return '二'
      break
    case 3:
      return '三'
      break
    case 4:
      return '四'
      break
    case 5:
      return '五'
      break
    case 6:
      return '六'
      break
    default:
      break
  }
}

// 获取元素偏移
function getElementActuaOffset (element) {
  var actualLeft = element.offsetLeft
  var actualTop = element.offsetTop
  var current = element.offsetParent
  if (current === null) {
    console.log(element.className)
  }
  while (current !== null) {
    actualLeft += current.offsetLeft
    actualTop += current.offsetTop
    current = current.offsetParent
  }
  return { left: actualLeft, top: actualTop }
}

const utils = {
  numToMon, numToDay
}

export default utils
