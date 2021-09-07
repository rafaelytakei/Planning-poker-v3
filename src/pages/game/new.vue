<template>
  <div>Teste</div>
</template>

<script setup lang="ts">
import { activeMenuItem } from '~/composables/menu'

activeMenuItem.value = 'create-game'
</script>

<style scoped></style>
