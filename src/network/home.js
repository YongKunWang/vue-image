import { request } from './request'

export function loginFormSubmit(username, password) {
  return request({
    url: '/post',
    method: 'post',
    params: {
      username,
      password
    }
  })
}
