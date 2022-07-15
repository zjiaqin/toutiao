import request from '@/utils/request'
export const getUserChannel = () =>
  request({
    url: '/v1_0/user/channels'
  })
