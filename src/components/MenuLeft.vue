<template>
  <n-layout-sider
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    @mouseover="collapsed = false"
    @mouseout="collapsed = true"
    position="absolute"
  >
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="27"
      :icon-size="27"
      :options="menuItems"
      v-model:value="activeMenuItem"
      @update-value="goToPage"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import {
  HomeOutlined,
  FiberNewFilled,
  PersonOutlineRound,
} from '@vicons/material'
import { NIcon, MenuOption } from 'naive-ui'
import { currentUser } from '~/composables/firebase/auth'
import { activeMenuItem } from '~/composables/menu'

const collapsed = ref(true)

const router = useRouter()
const goToPage = (key: string, item: MenuOption) => {
  router.push({
    path: item.path as any,
  })
}

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuItems = [
  {
    label: currentUser?.value?.displayName || 'Anônimo',
    key: 'profile',
    icon: renderIcon(PersonOutlineRound),
    path: '/profile',
  },
  { label: 'Home', key: 'home', icon: renderIcon(HomeOutlined), path: '/home' },
  {
    label: 'Criar nova partida',
    key: 'create-game',
    icon: renderIcon(FiberNewFilled),
    path: '/game/new',
  },
]
</script>

<style scoped></style>
