<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar fixed>
      <template #left>
        <img src="../../assets/logo.png" alt="logo" class="logo" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="white" />
      </template>
    </van-nav-bar>
    <!-- 频道列表栏 -->
    <van-tabs v-model="active" sticky offset-top="1.22666667rem">
      <van-tab :title="obj.name" v-for="obj in userChannel" :key="obj.id">{{
        obj.name
      }}</van-tab>
    </van-tabs>
    <van-icon name="plus" size="16" class="plus" />
  </div>
</template>

<script>
import { getUserChannelAPI } from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      userChannel: []
    }
  },
  methods: {
    async initUserChannel() {
      const res = await getUserChannelAPI()
      console.log(res)
      if (res.data.message === 'OK') {
        // 3. 为用户的频道列表赋值
        this.userChannel = res.data.data.channels
      }
    }
  },
  created() {
    this.initUserChannel()
  }
}
</script>

<style lang="less" scoped>
// 组件外层容器的样式
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
}
// logo 样式
.logo {
  height: 80%;
}
.plus {
  position: fixed;
  top: 58px;
  right: 10px;
  z-index: 999;
}
</style>
