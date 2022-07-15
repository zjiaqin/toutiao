<template>
  <div>
    <art-item v-for="obj in artlist" :key="obj.art_id" :article="obj">
    </art-item>
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
      artlist: []
    }
  },

  methods: {
    async initArtList() {
      // 请求 API 接口
      const { data: res } = await getArtListAPI(this.channelId, this.timestamp)
      if (res.message === 'OK') {
        // 为时间戳重新赋值
        this.timestamp = res.data.pre_timestamp
        // 为 artlist 赋值
        this.artlist = res.data.results
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
