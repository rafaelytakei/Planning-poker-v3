<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
  </n-config-provider>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');
#app {
  font-family: 'Source Sans Pro', 'sans-serif';
}
</style>
