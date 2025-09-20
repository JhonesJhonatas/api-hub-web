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
      </tr>
    </tbody>

    <tbody v-if="!properties.loading && properties.sessions.length === 0">
      <tr>
        <td colspan="5" class="text-center">No sessions found</td>
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
          <ButtonComponent
            :disabled="
              session.status === SessionStatus.QR_REQUIRED ||
              session.status === SessionStatus.DISCONNECTED
            "
          >
            <ChatBubbleLeftRightIcon class="w-4 h-4" />
          </ButtonComponent>
          <ButtonComponent
            :disabled="
              session.status === SessionStatus.CONNECTED ||
              session.status === SessionStatus.CONNECTING
            "
            @click="handleGetQrCode({ sessionId: session.id })"
          >
            <QrCodeIcon class="w-4 h-4" />
          </ButtonComponent>
          <ButtonComponent typeColor="warning">
            <PencilIcon class="w-4 h-4" />
          </ButtonComponent>
          <ButtonComponent typeColor="error">
            <TrashIcon class="w-4 h-4" />
          </ButtonComponent>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { format } from 'date-fns'

import ButtonComponent from '@/components/button-component.vue'

import { useSession } from '@/modules/session/composables/use-session'
import { SessionStatus } from '@/modules/session/types/session-status'

import {
  QrCodeIcon,
  PencilIcon,
  TrashIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/vue/24/outline'

const {
  properties,
  handlers: { handleListSessions, handleGetQrCode },
} = useSession()

onMounted(async () => {
  await handleListSessions()
})
</script>
