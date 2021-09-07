<template>
  <n-layout class="layout flex flex-col" has-sider>
    <menu-left />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </n-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout {
  height: 100vh;
  padding-left: 64px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
