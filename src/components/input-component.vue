<script setup lang="ts">
const props = defineProps<{
  id: string
  label: string
  type: string
  error?: string
  placeholder?: string
  modelValue: string
}>()
</script>

<template>
  <div>
    <div class="flex items-center justify-between gap-2">
      <label :for="props.id">{{ props.label }}</label>
      <span class="text-red-500">{{ props.error }}</span>
    </div>
    <input
      :id="props.id"
      :type="props.type"
      :placeholder="props.placeholder"
      class="bg-zinc-700 text-white px-4 py-2 rounded w-full"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
