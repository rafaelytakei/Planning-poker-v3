<template>
  <div class="flex flex-col items-center p-4">
    <logo class="w-2/3" />
    {{ t('home.login') }}
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped></style>
