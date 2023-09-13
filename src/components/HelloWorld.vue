<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '@/store/modules/user'
// import { accountLoginNoLoading } from '@/api/user'
// import { accountLogin } from '@/api/user'
import { useRouter } from 'vue-router'
import { CHANNEL } from '@/utils/channel'
import { useBridge } from '@/router/femobile1Bridge'

defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()
const router = useRouter()
const bridge = useBridge()

userStore.changeUserInfo({
  userName: '周杰伦',
  userId: 123
})
onBeforeMount(async () => {
  console.log('渠道：', CHANNEL)
  // await accountLogin()
  // await accountLoginNoLoading()
})

const goDetail = () => {
  router.push('detail')
}
const go404 = () => {
  router.push('xxxx')
}

const goBridgeHome = () => {
  bridge.push('home')
}
const goBridgeLogin = () => {
  bridge.push('login')
}
const goNeedLoginPage = () => {
  router.push('logined')
}
</script>

<template>
  <h1>userStore: {{ userStore.userInfo.userName }}</h1>
  <h1>userString: {{ userStore.userString }}</h1>
  <h1>{{ msg }}</h1>

  <div class="card">
    <van-button type="primary" @click="goDetail">跳转详情</van-button>
    <van-button type="primary" @click="go404">404页</van-button>
    <van-button type="primary" @click="goBridgeHome">旧首页</van-button>
    <van-button type="primary" @click="goBridgeLogin">旧登录</van-button>
    <van-button type="primary" @click="goNeedLoginPage">登录后</van-button>
    <van-button type="primary" @click="count++">count is {{ count }}</van-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="less" scoped>
.read-the-docs {
  position: relative;
  font-size: 80px;
  color: @primary1;
}
</style>
