<script lang="ts" setup>
import { YContainer } from '@/components'
import { useRouter } from 'vue-router'
const router = useRouter()

function goHome() {
  router.push('home')
}
function goBack() {
  router.back()
}
console.log('import.meta.env', import.meta.env)
</script>

<template>
  <YContainer class="container">
    <div class="title">oops～页面不存在！</div>
    <div class="content">404</div>
    <div class="footer">
      <van-button plain type="primary" @click="goHome">去首页</van-button>
      <van-button plain type="primary" @click="goBack">上一页</van-button>
    </div>
  </YContainer>
</template>

<style lang="less" scoped>
.container {
  padding-top: 300px;

  .title {
    font-size: 36px;
    color: @primary2;
  }

  .content {
    margin-top: 80px;
    margin-bottom: 80px;
    font-size: 200px;
    color: @primary2;
    font-weight: bolder;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button:first-child {
      margin-right: 60px;
    }
  }
}
</style>
