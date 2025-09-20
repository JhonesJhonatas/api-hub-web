<script setup lang="ts">
import ButtonComponent from '@/components/button-component.vue'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Status</th>
        <th class="text-left">Engine</th>
        <th class="text-left">Created At</th>
        <th class="text-left">Updated At</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>Active</td>
        <td>Wwebjs</td>
        <td>2021-01-01</td>
        <td>2021-01-01</td>
        <td class="flex items-center gap-2">
          <ButtonComponent>View</ButtonComponent>
          <ButtonComponent>Edit</ButtonComponent>
          <ButtonComponent>Edit</ButtonComponent>
          <ButtonComponent>Delete</ButtonComponent>
        </td>
      </tr>
    </tbody>
  </table>
</template>
