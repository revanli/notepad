

class Storage {

  setItem(name: string, data: any) {
    let value = null
    if (typeof data !== 'object' || data == null) {
      value = data
    } else {
      value = JSON.stringify(data)
    }
    localStorage.setItem(name, value)
  }

  getItem(name: string) {
    let item: any = localStorage.getItem(name)
    try {
      item = JSON.parse(item)
    } catch (e) {
      // item = item;
    }
    return item;
  }

  removeItem(name: string) {
    localStorage.removeItem(name)
  }

  clear() {
    localStorage.clear()
  }
}

export default new Storage()