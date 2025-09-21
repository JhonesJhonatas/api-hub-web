<template>
  <BaseModalComponent :isOpen="props.isOpen" :onClose="props.onClose" title="Chat">
    <div>
      <h1>Chat</h1>
    </div>
  </BaseModalComponent>
</template>

<script setup lang="ts">
import BaseModalComponent from '@/components/base-modal-component.vue'

const props = defineProps<{
  isOpen: boolean
  onClose: () => void
}>()
</script>
