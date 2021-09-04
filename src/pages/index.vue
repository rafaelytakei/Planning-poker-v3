<template>
  <div class="flex flex-col items-center p-4 justify-center h-full">
    <logo class="w-full lg:w-2/3 mb-4" />
    <h5 class="text-md lg:text-xl text-color3 mb-4">
      {{ t('home.login') }}
    </h5>
    <div class="flex flex-col">
      <n-button type="info" class="mb-3" @click="googleLogin">
        <i-mdi-google class="mr-2" />{{ t('buttons.googleLogin') }}
      </n-button>
      <n-button>{{ t('buttons.anonLogin') }}</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { googleLogin } from '~/composables/firebase/auth'

const { t } = useI18n()
</script>

<style scoped>
.logo {
  width: 66%;
}
</style>
