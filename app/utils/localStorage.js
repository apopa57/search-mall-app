const isLocalStorageAvailable = (function isAvailableIffe() {
  const test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}())

export default {
  get(key) {
    if (isLocalStorageAvailable) {
      let value = localStorage.getItem(key)

      if (!value) return null

      if (value[0] === '{') {
        value = JSON.parse(value)
      }

      return value
    }
    return null
  },

  set(key, value) {
    if(typeof value === 'object') {
      value = JSON.stringify(value)
    }

    if (isLocalStorageAvailable) {
      return localStorage.setItem(key, value)
    }

    return null
  }
}
