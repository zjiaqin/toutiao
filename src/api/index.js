import { Login } from './userAPI'
import {
  getUserChannel,
  getArtList,
  dislikeArticle,
  reportArticle,
  getAllChannel,
  updateUserChannel
} from './homeAPI'
import {
  getArticleDetail,
  followUser,
  unfollowUser,
  addLike,
  delLike
} from './articleAPI'
import { getSuggestList, getSearchResult } from './searchAPI'
export const LoginAPI = Login
export const getUserChannelAPI = getUserChannel
export const getArtListAPI = getArtList
export const dislikeArticleAPI = dislikeArticle
export const reportArticleAPI = reportArticle
export const getAllChannelAPI = getAllChannel
export const updateUserChannelAPI = updateUserChannel
export const getSuggestListAPI = getSuggestList
export const getSearchResultAPI = getSearchResult
export const getArticleDetailAPI = getArticleDetail
export const followUserAPI = followUser
export const unfollowUserAPI = unfollowUser
export const addLikeAPI = addLike
export const delLikeAPI = delLike
