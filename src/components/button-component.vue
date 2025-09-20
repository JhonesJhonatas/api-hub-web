<template>
  <button
    :class="getButtonClass(props.block, props.disabled, props.typeColor)"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type TypeColor = 'default' | 'success' | 'warning' | 'error'

const props = defineProps<{
  block?: boolean
  disabled?: boolean
  typeColor?: TypeColor
}>()

const getButtonClass = (block: boolean, disabled: boolean, typeColor: TypeColor = 'default') => {
  let baseClass = 'p-2 rounded cursor-pointer hover:bg-green-700 transition-all duration-300'

  if (block) {
    baseClass += ' w-full'
  }

  if (disabled) {
    baseClass += ' bg-zinc-700 cursor-not-allowed hover:bg-zinc-700 cursor-not-allowed'
  }

  switch (typeColor) {
    case 'success':
      baseClass += ' bg-green-600 hover:bg-green-700'
      break
    case 'warning':
      baseClass += ' bg-yellow-600 hover:bg-yellow-700'
      break
    case 'error':
      baseClass += ' bg-red-600 hover:bg-red-700'
      break
    default:
      baseClass += ' bg-green-600 hover:bg-green-700'
      break
  }

  return baseClass
}
</script>
