import type { SessionStatus } from './session-status'
import type { SupportedEngines } from './supported-engines'

export interface Session {
  id: string
  status: SessionStatus
  engine: SupportedEngines
  sessionData?: string
  qrCode?: string
  phoneNumber?: string
  displayName?: string
  lastSeen?: Date
  errorMessage?: string
  createdAt: Date
  updatedAt: Date
}
