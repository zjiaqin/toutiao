import { Login } from './userAPI'
import {
  getUserChannel,
  getArtList,
  dislikeArticle,
  reportArticle,
  getAllChannel,
  updateUserChannel
} from './homeAPI'
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
