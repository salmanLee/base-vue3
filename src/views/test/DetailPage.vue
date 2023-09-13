<script lang="ts" setup>
import { CHANNEL } from '@/utils/channel'
import { useRouter } from 'vue-router'
console.log('渠道：', CHANNEL)
const router = useRouter()

function goBack() {
  router.back()
}
</script>

<template>
  <YContainer class="container">
    <div class="title">detail</div>
    <van-button type="primary" @click="goBack">回首页</van-button>
  </YContainer>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: black;

  .title {
    font-size: 43px;
    text-align: center;
    color: @primary1;
  }
}

.global-theme-large {
  .title {
    font-size: 88px;
  }
}
</style>
