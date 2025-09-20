<script setup lang="ts">
import NavbarComponent from '@/components/organisms/navbar-component.vue'
</script>

<template>
  <main class="flex flex-col gap-4">
    <NavbarComponent />
    <div class="w-10/12 mx-auto">
      <router-view />
    </div>
  </main>
</template>
