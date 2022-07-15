import request from '@/utils/request'
export const getUserChannel = () =>
  request({
    url: '/v1_0/user/channels'
  })
export const getArtList = (id, time) =>
  request({
    url: '/v1_0/articles',
    params: {
      channel_id: id, // 频道的 Id
      timestamp: time // 时间戳
    }
  })
