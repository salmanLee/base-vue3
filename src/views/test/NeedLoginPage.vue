<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { testLogined } from '@/api/user'
import { onBeforeMount } from 'vue'
const router = useRouter()

onBeforeMount(async () => {
  await testLogined()
})

function goBack() {
  router.back()
}
</script>

<template>
  <YContainer class="container">
    <div class="title">needLoginPage</div>
    <van-button type="primary" @click="goBack">回首页</van-button>
  </YContainer>
</template>

<style lang="less" scoped>
.container {
  .title {
    font-size: 43px;
    text-align: center;
    color: @primary1;
  }
}
</style>
