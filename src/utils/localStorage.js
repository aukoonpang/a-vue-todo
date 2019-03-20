import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage (key, value) {
  return localStorage.set(key, value)
}

export function getLocalStorage (key) {
  return localStorage.get(key)
}

export function removeLocalStorage (key) {
  return localStorage.delete(key)
}

export function clearLocalStorage () {
  return localStorage.clear()
}

// [
//   {
//     completed: true,
//     content: "this is a finished example",
//     createTime: Mon Mar 18 2019 17: 08: 06 GMT + 0800(中国标准时间),
//     id: 0
//   }
// ]
