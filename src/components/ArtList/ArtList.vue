<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      :disabled="finished"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <!-- 文章列表行组件 -->
        <art-item
          v-for="obj in artlist"
          :key="obj.art_id"
          :article="obj"
          @remove-article="removeArticle"
        >
        </art-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArtItem from '../ArtItem/ArtItem.vue'
import { getArtListAPI } from '@/api'
export default {
  name: 'ArtList',
  props: {
    channelId: {
      type: Number, // 数值类型
      required: true // 必填项
    }
  },
  data() {
    return {
      timestamp: Date.now(),
      artlist: [],
      // loading 表示是否正在进行上拉加载的请求
      //   每当触发 List 组件的上拉加载更多时，List 组件会自动把 loading 设为 true
      //   每当下一页的数据请求回来以后，需要程序员手动的把 loading 设为 false，
      //   否则：再次触发上拉加载更多时，不会发起请求！！
      loading: true,
      // finished 表示所有数据是否加载完毕
      //    false 表示还有下一页的数据
      //    true  表示所有数据都已加载完毕
      finished: false,
      // 下拉刷新
      isLoading: false
    }
  },

  methods: {
    async initArtList(isRefresh) {
      // 请求 API 接口
      const { data: res } = await getArtListAPI(this.channelId, this.timestamp)
      if (res.message === 'OK') {
        // 为时间戳重新赋值
        this.timestamp = res.data.pre_timestamp
        // 为 artlist 赋值
        if (isRefresh) {
          this.artlist = [...res.data.results, ...this.artlist]
          this.isLoading = false
        } else {
          this.artlist = [...this.artlist, ...res.data.results]
          this.loading = false
        }

        // 3. 判断所有的数据是否已加载完毕
        if (res.data.pre_timestamp === null) {
          this.finished = true
        }
      }
    },
    onLoad() {
      this.initArtList()
    },
    onRefresh() {
      this.initArtList(true)
    },
    removeArticle(id) {
      this.artlist = this.artlist.filter(
        (item) => item.art_id.toString() !== id
      )
      if (this.artlist.length < 10) {
        // 主动请求下一页的数据
        this.initArtList()
      }
    }
  },
  created() {
    this.initArtList()
  },
  components: {
    ArtItem
  }
}
</script>

<style lang="less" scoped></style>
