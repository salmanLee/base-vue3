<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSystemStore } from '@/store/modules/system'
const { isLarge } = useSystemStore()
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <Suspense>
          <div class="main" :class="{ 'global-theme-large': isLarge }">
            <component :is="Component"></component>
          </div>
          <!-- TODO: 封装一下，用全局颜色和标准尺寸 -->
          <template #fallback>
            <div class="loading">
              <van-loading type="spinner" size="30px" />
            </div>
          </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
