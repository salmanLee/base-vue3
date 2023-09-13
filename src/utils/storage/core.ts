import { KeyType } from './config'
type StorageType = 'localStorage' | 'sessionStorage'
type SetValue = string | undefined | null | number | Record<string, any> | any[]

class Storage {
  storageType: globalThis.Storage
  constructor(storageType: StorageType) {
    if (storageType === 'sessionStorage') this.storageType = globalThis.sessionStorage
    else this.storageType = globalThis.localStorage
  }

  set(key: KeyType, value: SetValue): void {
    const warpped = {
      value
    }
    this.storageType.setItem(key, JSON.stringify(warpped))
  }

  has(key: string): boolean {
    return this.get(key) !== null
  }

  get(key: string): SetValue {
    const data = this.storageType.getItem(key)
    if (data) {
      const parsedData = JSON.parse(data)
      return parsedData.value
    }
    return null
  }

  del(key: string): void {
    this.storageType.removeItem(key)
  }

  clear(): void {
    this.storageType.clear()
  }
}

export default Storage
