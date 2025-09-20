import { request } from '@/api/http/request'

import type { ListSessionsResponse } from '@/modules/session/types/list-sessions'

export function listSessions() {
  return request<ListSessionsResponse>({
    method: 'get',
    url: '/session/all',
  })
}
