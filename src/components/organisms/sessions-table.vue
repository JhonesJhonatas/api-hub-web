<script setup lang="ts">
import { onMounted } from 'vue'
import { format } from 'date-fns'

import ButtonComponent from '@/components/atoms/button-component.vue'

import { useSession } from '@/modules/session/composables/use-session'

const {
  properties,
  handlers: { handleListSessions },
} = useSession()

onMounted(async () => {
  await handleListSessions()
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="text-left" colspan="2">Name</th>
        <th class="text-left">Status</th>
        <th class="text-left">Engine</th>
        <th class="text-left">Created At</th>
        <th class="text-left">Updated At</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>

    <tbody v-if="properties.loading">
      <tr>
        <td colspan="5" class="text-center">Loading...</td>
        <td colspan="5" class="text-center">Loading...</td>
        <td colspan="5" class="text-center">Loading...</td>
        <td colspan="5" class="text-center">Loading...</td>
      </tr>
    </tbody>

    <tbody v-if="!properties.loading && properties.sessions.length > 0">
      <tr v-for="session in properties.sessions" :key="session.id">
        <td colspan="2">{{ session.id }}</td>
        <td>{{ session.status }}</td>
        <td>{{ session.engine }}</td>
        <td>{{ format(session.createdAt, 'dd/MM/yyyy HH:mm') }}</td>
        <td>{{ format(session.updatedAt, 'dd/MM/yyyy HH:mm') }}</td>
        <td class="flex items-center gap-2">
          <ButtonComponent>View</ButtonComponent>
          <ButtonComponent>Edit</ButtonComponent>
          <ButtonComponent>Delete</ButtonComponent>
        </td>
      </tr>
    </tbody>

    <tbody v-if="!properties.loading && properties.sessions.length === 0">
      <tr>
        <td colspan="5" class="text-center">No sessions found</td>
      </tr>
    </tbody>
  </table>
</template>
