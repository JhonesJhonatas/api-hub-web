import { reactive } from 'vue'

import { disconnectSession, getQrCode, listSessions } from '@/api/services/session-services'
import type { Session } from '@/modules/session/types/session'
import type { GetQrCodeProps } from '@/modules/session/types/get-qr-code'
import type { DisconnectSessionProps } from '../types/disconnect-session'

export function useSession() {
  const properties = reactive({
    loading: false,
    sessions: [] as Session[],
    qrCode: '' as string,
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

  const handleGetQrCode = async (props: GetQrCodeProps) => {
    properties.loading = true

    try {
      const { data } = await getQrCode(props)

      console.log({
        data,
      })

      properties.qrCode = data.qrCode
    } catch (error) {
      console.error(error)
    } finally {
      properties.loading = false
    }
  }

  const handleDisconnectSession = async (props: DisconnectSessionProps) => {
    properties.loading = true

    try {
      await disconnectSession(props)
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
      handleGetQrCode,
      handleDisconnectSession,
    },
  }
}
