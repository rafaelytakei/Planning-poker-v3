<template>
  <router-view v-slot="{ Component }">
    <div class="flex flex-col h-full w-full bg-color2">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </div>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
