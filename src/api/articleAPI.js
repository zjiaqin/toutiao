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
export const getCmtList = (artId, offset) =>
  request({
    url: '/v1_0/comments',
    params: {
      type: 'a',
      source: artId,
      offset
    }
  })
export const addLikeCmt = (target) =>
  request({
    url: '/v1_0/comment/likings',
    method: 'POST',
    data: {
      target
    }
  })
export const delLikeCmt = (cmtId) =>
  request({
    method: 'DELETE',
    url: `/v1_0/comment/likings/${cmtId}`
  })
export const pubComment = (artId, content) =>
  request({
    method: 'POST',
    url: '/v1_0/comments',
    data: {
      target: artId,
      content
    }
  })
