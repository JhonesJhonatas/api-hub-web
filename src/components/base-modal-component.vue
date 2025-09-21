<template>
  <teleport to="body">
    <div
      v-if="props.isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg p-6 shadow-xl w-96 relative">
        <button
          @click="props.onClose"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  isOpen: boolean
  onClose: () => void
  title: string
}>()
</script>
