<script setup lang="ts">
const props = defineProps<{
  block?: boolean
}>()
</script>

<template>
  <button
    class="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition-all duration-300"
    :class="{ 'w-full': props.block }"
  >
    <slot />
  </button>
</template>
