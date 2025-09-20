import { reactive } from 'vue'

import { listSessions } from '@/api/services/session-services'
import type { Session } from '@/modules/session/types/session'

export function useSession() {
  const properties = reactive({
    loading: false,
    sessions: [] as Session[],
  })

  const handleListSessions = async () => {
    properties.loading = true

    try {
      const { data } = await listSessions()

      properties.sessions = data
    } catch (error) {
      console.error(error)
    } finally {
      properties.loading = false
    }
  }

  return {
    properties,
    handlers: {
      handleListSessions,
    },
  }
}
