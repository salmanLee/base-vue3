import { defineStore } from 'pinia'
import { persist } from '../config'

export enum FontsizeModeEnum {
  large = 'large',
  default = 'default'
}
export interface SystemState {
  fontsizeMode: FontsizeModeEnum
}

const useSystemStore = defineStore('systemStore', {
  state: (): SystemState => {
    return {
      fontsizeMode: FontsizeModeEnum.default
    }
  },
  getters: {
    isLarge: (store) => store.fontsizeMode === FontsizeModeEnum.large
  },
  actions: {
    changeFontsizeMode(mode: FontsizeModeEnum) {
      this.fontsizeMode = mode
      console.log('fontsizeModeChange:', mode)
    }
  },
  persist
})

export { useSystemStore }
