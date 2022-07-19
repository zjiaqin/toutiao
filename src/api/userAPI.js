import request from '@/utils/request'
export const Login = (data) =>
  request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
export const getUserInfo = () =>
  request({
    url: '/v1_0/user'
  })
export const getUserProfile = () =>
  request({
    url: '/v1_0/user/profile'
  })
export const updateUserProfile = (obj) =>
  request({
    url: '/v1_0/user/profile',
    method: 'PATCH',
    data: obj
  })
export const updateUserAvatar = (fd) =>
  request({
    url: '/v1_0/user/photo',
    method: 'PATCH',
    data: fd
  })
