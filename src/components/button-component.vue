<template>
  <button
    class="bg-green-600 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-green-700 transition-all duration-300"
    @click="onClick"
  >
    <slot />
  </button>
</template>
