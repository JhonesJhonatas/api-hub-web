<template>
  <button :class="getButtonClass(props.block, props.disabled)" :disabled="props.disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  block?: boolean
  disabled?: boolean
}>()

const getButtonClass = (block: boolean, disabled: boolean) => {
  let baseClass =
    'bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition-all duration-300'

  if (block) {
    baseClass += ' w-full'
  }

  if (disabled) {
    baseClass += ' bg-zinc-700 cursor-not-allowed hover:bg-zinc-700 cursor-not-allowed'
  }

  return baseClass
}
</script>
