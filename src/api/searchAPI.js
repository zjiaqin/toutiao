import request from '@/utils/request'
export const getSuggestList = (kw) =>
  request({
    url: '/v1_0/suggestion',
    params: { q: kw }
  })
export const getSearchResult = (kw, page) => {
  return request.get('/v1_0/search', {
    params: {
      q: kw, // 搜索关键词
      page // 页码值
    }
  })
}
