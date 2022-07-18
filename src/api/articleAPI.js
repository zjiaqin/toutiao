import request from '@/utils/request'
export const getArticleDetail = (id) =>
  request({
    url: `/v1_0/articles/${id}`
  })

export const followUser = (target) =>
  request({
    url: '/v1_0/user/followings',
    method: 'POST',
    data: { target }
  })
export const unfollowUser = (userId) =>
  request({
    method: 'DELETE',
    url: `/v1_0/user/followings/${userId}`
  })
export const addLike = (target) =>
  request({
    method: 'POST',
    url: '/v1_0/article/likings',
    data: {
      target
    }
  })
export const delLike = (artId) =>
  request({
    method: 'DELETE',
    url: `/v1_0/article/likings/${artId}`
  })
