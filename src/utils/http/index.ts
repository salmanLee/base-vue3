import CoreRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

export const http = new CoreRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
