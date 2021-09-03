<template>
  <div ref="animationWrapper"></div>
</template>

<script setup lang="ts">
import lottie, { AnimationSegment } from 'lottie-web'
const animationWrapper = ref(null)
const props = defineProps({
  loop: {
    type: Boolean,
    default: false,
  },
  animationData: {
    type: undefined,
    default: null,
  },
  speed: {
    type: Number,
    default: 1,
  },
  playSegment: {
    type: Array,
    default: [0],
  },
})
onMounted(() => {
  if (animationWrapper.value) {
    const animation = lottie.loadAnimation({
      container: animationWrapper.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: true,
      animationData: JSON.parse(JSON.stringify(props.animationData)),
    })
    animation.setSpeed(props.speed)
    if (props.playSegment.length > 1) {
      animation.playSegments(props.playSegment as AnimationSegment, true)
    }
  }
})
</script>

<style scoped></style>
