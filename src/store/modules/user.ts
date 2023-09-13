import { defineStore } from 'pinia'

interface UserInfo {
  userName: string
  userId: string | number
}
interface State {
  userInfo: UserInfo
  token: string
}

const useUserStore = defineStore('userStore', {
  state: (): State => {
    return {
      userInfo: {
        userName: '',
        userId: ''
      },
      token: ''
    }
  },
  getters: {
    userString: (state) => state.userInfo.userName + '_' + state.userInfo.userId
  },
  actions: {
    changeUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})

export { useUserStore }
