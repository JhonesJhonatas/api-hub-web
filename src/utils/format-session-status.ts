import { SessionStatus } from '@/modules/session/types/session-status'

const translations = {
  [SessionStatus.CONNECTED]: 'Connected',
  [SessionStatus.DISCONNECTED]: 'Disconnected',
  [SessionStatus.CONNECTING]: 'Connecting',
  [SessionStatus.QR_REQUIRED]: 'QR Required',
  [SessionStatus.ERROR]: 'Error',
}

export function formatSessionStatus(status: SessionStatus) {
  return translations[status]
}
