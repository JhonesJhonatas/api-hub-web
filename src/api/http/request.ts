import { axiosInstance } from '@/api/http/axios-instance'

interface RequestProps {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  data?: unknown
}

type Respose<T> = {
  code: number
  data: T
}

export async function request<T>({ method, url, data }: RequestProps): Promise<Respose<T>> {
  const query = {}

  if (method === 'get') {
    Object.assign(query, { params: data })
  }

  if (method === 'post') {
    Object.assign(query, { body: data })
  }

  const { data: responseData, status } = await axiosInstance[method](url, query)

  return {
    data: responseData,
    code: status,
  }
}
