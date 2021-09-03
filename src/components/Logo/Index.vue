<template>
  <div
    class="flex justify-center items-center"
    :class="{
      'flex-col': !props.rowDisplay,
    }"
  >
    <logo-text
      class="flex-1 w-7/10 justify-center"
      :animation-duration="props.fasterTextAnimation ? 600 : 1200"
    />
    <lottie-wrapper
      :animation-data="cardsAnimation"
      class="flex-1 -mb-10 w-3/10"
      :class="{ 'ml-4': props.rowDisplay }"
      :play-segment="props.stopCardAnimation ? [0, 28] : [0]"
    />
  </div>
</template>

<script setup lang="ts">
import * as cardsLottie from '~/assets/lottie/cards.json'
const cardsAnimation = ref(JSON.parse(JSON.stringify(cardsLottie)))
const props = defineProps({
  rowDisplay: {
    type: Boolean,
    default: false,
  },
  stopCardAnimation: {
    type: Boolean,
    default: false,
  },
  fasterTextAnimation: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
