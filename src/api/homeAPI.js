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
export const dislikeArticle = (id) =>
  request({
    url: '/v1_0/article/dislikes',
    method: 'POST',
    data: {
      target: id
    }
  })
export const reportArticle = (target, type) =>
  request({
    method: 'POST',
    url: '/v1_0/article/reports',
    data: {
      target,
      type
    }
  })
export const getAllChannel = () =>
  request({
    url: '/v1_0/channels'
  })
export const updateUserChannel = (channels) =>
  request({
    url: '/v1_0/user/channels',
    method: 'PUT',
    data: { channels }
  })
