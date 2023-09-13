<script lang="ts" setup></script>
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
}
</style>
