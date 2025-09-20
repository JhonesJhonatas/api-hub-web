<script setup lang="ts">
import { useRouter } from 'vue-router'

import ButtonComponent from '@/components/atoms/button-component.vue'

const router = useRouter()

const handleLogout = () => {
  router.push('/')
}
</script>

<template>
  <div class="w-10/12 bg-zinc-800 mx-auto p-4 rounded mt-4 flex items-center justify-between">
    <div class="flex flex-col">
      <h1 class="text-xl font-bold">Api-Hub</h1>
      <span class="text-zinc-400 text-sm">Manage your APIs</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <ButtonComponent @click="handleLogout">Sair</ButtonComponent>
      </div>
    </div>
  </div>
</template>
