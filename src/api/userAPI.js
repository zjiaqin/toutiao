import request from '@/utils/request'
export const Login = (data) =>
  request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
