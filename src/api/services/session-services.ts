import { request } from '@/api/http/request'

import type { GetQrCodeProps, GetQrCodeResponse } from '@/modules/session/types/get-qr-code'
import type { ListSessionsResponse } from '@/modules/session/types/list-sessions'

export function listSessions() {
  return request<ListSessionsResponse>({
    method: 'get',
    url: '/session/all',
  })
}

export function getQrCode(props: GetQrCodeProps) {
  return request<GetQrCodeResponse>({
    method: 'get',
    url: `/session/qr-code/${props.sessionId}`,
  })
}
