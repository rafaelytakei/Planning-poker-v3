<template>
  <button
    @click="handleClick"
    class="
      inline-flex
      items-center
      justify-center
      px-5
      py-3
      text-base
      font-medium
      text-center
      rounded-lg
      shadow-sm
      cursor-pointer
      transition-all
      focus:outline-none
      outline-none
    "
    :class="{
      [`hover:bg-${props.color}-600`]: true,
      [`active:bg-${props.color}-700`]: true,
      [`bg-${props.color}`]: !props.outlined,
      '': !props.outlined,
      [`text-${props.textColor}`]: !props.outlined,
      'bg-transparent': props.outlined,
      'border-1': props.outlined,
      [`border-${props.color}`]: props.outlined,
      'hover:bg-opacity-5': props.outlined,
      'active:bg-opacity-15': props.outlined,
      [`text-${props.color}`]: props.outlined,
    }"
  >
    <i-mdi-google class="mr-2" />
    <span class="relative"><slot name="default"></slot></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  outlined: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'success',
  },
  textColor: {
    type: String,
    default: 'color2',
  },
})

const emits = defineEmits(['click'])
const handleClick = () => {
  emits('click')
}
</script>

<style scoped></style>
