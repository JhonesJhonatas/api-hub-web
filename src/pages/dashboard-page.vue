<script setup lang="ts">
import SessionsTable from '@/components/organisms/sessions-table.vue'
import ButtonComponent from '@/components/atoms/button-component.vue'
</script>

<template>
  <session class="flex flex-col gap-4 bg-zinc-800 rounded p-4">
    <div class="flex items-center justify-between">
      <span class="text-2xl font-bold">Sessions</span>
      <ButtonComponent>Create Session</ButtonComponent>
    </div>
    <hr class="border-zinc-700" />
    <SessionsTable />
  </session>
</template>

<style scoped></style>
