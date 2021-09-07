<template>
  <div class="flex flex-col justify-center items-center w-full">
    <lottie-wrapper
      :animation-data="lottieProfile"
      class="w-32 mb-15"
      :loop="true"
    />
    <n-h5 v-if="route.query.new"
      >Antes de prosseguir, digite abaixo como prefere ser chamado:</n-h5
    >
    <div class="w-64">
      <n-form>
        <n-form-item :label="route.query.new ? undefined : 'Nome de display'">
          <n-input placeholder="" v-model:value="displayName" />
        </n-form-item>
      </n-form>
    </div>
    <n-button type="success" class="mt-5" @click="handleSave" :loading="saving"
      >Salvar alterações</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { useNotification } from 'naive-ui'
import * as lottieProfile from '~/assets/lottie/profile.json'
import { currentUser, setUserDisplayName } from '~/composables/firebase/auth'
import { activeMenuItem } from '~/composables/menu'

activeMenuItem.value = 'profile'

const displayName = ref(currentUser?.value?.displayName || '')

const notification = useNotification()
const saving = ref(false)

const handleSave = async () => {
  saving.value = true
  await setUserDisplayName(displayName.value)
  notification.success({
    title: 'Sucesso!',
    meta: 'Seu perfil foi atualizado!',
    duration: 3000,
  })
  saving.value = false
}

const route = useRoute()

if (route.query.new) {
}
</script>

<style scoped></style>
