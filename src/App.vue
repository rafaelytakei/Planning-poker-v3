<template>
  <n-theme-editor>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
      <n-notification-provider>
        <router-view />
      </n-notification-provider>
    </n-config-provider>
  </n-theme-editor>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
const themeOverrides = {
  common: {
    baseColor: '#f1faeeFF',
    bodyColor: '#1d3557FF',
    textColorBase: '#f1faeeFF',
  },
  Menu: {
    itemIconColorCollapsed: '#a8dadcFF',
    itemIconColor: '#a8dadcFF',
    itemIconColorHover: '#f1faeeFF',
    itemTextColorHover: '#f1faeeFF',
    arrowColorChildActive: '#a8dadcFF',
    itemTextColorActive: '#1d3557FF',
    itemIconColorActive: '#1d3557FF',
    itemIconColorChildActive: '#f1faeeFF',
    itemColorActive: '#F1FAEE2A',
  },
  Layout: {
    siderColor: '#457b9dFF',
  },
  Label: {
    groupLabelColor: '#f1faeeFF',
  },
  Form: {
    labelTextcolor: '#f1faeeFF',
  },
  Input: {
    textColor: '#f1faeeFF',
    caretColor: '#a8dadcFF',
    borderHover: '1px solid #a8dadcFF',
    borderFocus: '1px solid #a8dadcFF',
  },
  Button: {
    colorSuccess: '#a8dadc',
    textColorSuccess: '#1d3557FF',
    textColorHoverSuccess: '#1d3557FF',
    textColorPressedSuccess: '#1d3557FF',
    textColorFocusSuccess: '#1d3557FF',
    textcolorDisabledSuccess: '#1d3557FF',
    colorHoverSuccess: '#9DE8EBFF',
    colorPressedSuccess: '#99C5C6FF',
    colorFocusSuccess: '#9DE8EBFF',
    colorDisabledSuccess: '#9EBDBEFF',
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');
#app {
  font-family: 'Source Sans Pro', 'sans-serif';
}
</style>
