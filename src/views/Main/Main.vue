<template>
  <div>
    <!-- 顶部站位符 -->
    <router-view> </router-view>
    <!-- 底部的 TabBar -->
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="less" scoped></style>
