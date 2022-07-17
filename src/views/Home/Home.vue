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
      <van-tab :title="obj.name" v-for="obj in userChannel" :key="obj.id">
        <!-- 在每一个用户频道下，渲染出对应的“文章列表组件” -->
        <art-list :channelId="obj.id"> </art-list>
      </van-tab>
    </van-tabs>
    <!-- 频道管理小+号 -->
    <van-icon name="plus" size="16" class="plus" @click="showPopup" />
    <!-- 频道管理弹出层 -->
    <van-popup
      v-model="show"
      :close-on-click-overlay="false"
      @closed="isDel = false"
    >
      <div class="popup-container">
        <!-- 弹出层的头部区域 -->
        <van-nav-bar title="频道管理">
          <template #right>
            <van-icon
              name="cross"
              size="14"
              color="white"
              @click="show = false"
            />
          </template>
        </van-nav-bar>

        <!-- 弹出层的主体区域 -->
        <div class="pop-body">
          <!-- 我的频道 -->
          <div class="my-channel-box">
            <div class="channel-title">
              <div>
                <span class="title-bold">已添加频道：</span>
                <span class="title-gray">{{
                  isDel ? '点击移除频道' : '点击进入频道'
                }}</span>
              </div>
              <span class="btn-edit" @click="isDel = !isDel">{{
                isDel ? '完成' : '编辑'
              }}</span>
            </div>
            <!-- 我的频道列表 -->
            <van-row type="flex">
              <van-col
                span="6"
                v-for="(item, index) in userChannel"
                :key="item.id"
              >
                <!-- 用户的频道 Item 项 -->

                <div
                  class="channel-item van-hairline--surround"
                  @click="onUserChannelClick(item, index)"
                >
                  {{ item.name }}

                  <van-badge
                    color="transparent"
                    class="cross-badge"
                    v-if="
                      isDel && item.name !== '推荐' && userChannel.length > 2
                    "
                  >
                    <template #content>
                      <van-icon
                        name="cross"
                        class="badge-icon"
                        color="#cfcfcf"
                        size="12"
                      />
                    </template>
                  </van-badge>
                </div>
              </van-col>
            </van-row>
          </div>

          <!-- 分隔线 -->
          <div class="van-hairline--top sp-line"></div>

          <!-- 更多频道 -->
          <div class="more-channel-box">
            <div class="channel-title">
              <div>
                <span class="title-bold">可添加频道：</span>
                <span class="title-gray">点击添加频道</span>
              </div>
            </div>
            <!-- 更多频道列表 -->
            <van-row type="flex">
              <van-col span="6" v-for="item in moreChannels" :key="item.id">
                <div
                  class="channel-item van-hairline--surround"
                  @click="addChannel(item)"
                >
                  {{ item.name }}
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import ArtList from '@/components/ArtList/ArtList.vue'
import {
  getUserChannelAPI,
  getAllChannelAPI,
  updateUserChannelAPI
} from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      userChannel: [],
      show: false,
      allChannel: [],
      isDel: false
    }
  },
  methods: {
    async initUserChannel() {
      const { data: res } = await getUserChannelAPI()
      if (res.message === 'OK') {
        // 3. 为用户的频道列表赋值
        this.userChannel = res.data.channels
      }
    },
    async initAllChannel() {
      const { data: res } = await getAllChannelAPI()
      if (res.message === 'OK') {
        // 为全部频道数组赋值
        this.allChannel = res.data.channels
      }
    },
    async updateChannel() {
      // 1. 准备要提交到服务器的数据
      const channels = this.userChannel
        .filter((item) => item.name !== '推荐')
        .map((item, index) => {
          return {
            id: item.id,
            seq: index + 1
          }
        })
      const { data: res } = await updateUserChannelAPI(channels)
      if (res.message === '更新用户频道成功') {
        // 提示用户添加成功
        this.$notify({ type: 'success', message: '更新成功', duration: 1000 })
      }
    },

    showPopup() {
      this.show = true
    },
    addChannel(item) {
      // 将用户点击的频道，添加到“用户频道”列表中
      this.userChannel.push(item)
      // 添加到数据库中
      this.updateChannel()
    },
    // 点击频道删除，删除用户频道
    onUserChannelClick(channel, index) {
      if (this.isDel) {
        // 如果面板处在删除页面状态，那么执行删除操作
        if (channel.name === '推荐') return
        this.userChannel = this.userChannel.filter(
          (item) => item.id !== channel.id
        )
        this.updateChannel()
      } else {
        this.active = index
        this.show = false
      }
    }
  },
  created() {
    // 请求用户的频道列表数据
    this.initUserChannel()
    // 请求所有的频道列表数据
    this.initAllChannel()
  },
  components: {
    ArtList
  },
  computed: {
    // 更多频道的数据
    moreChannels() {
      // 1. 对数组进行 filter 过滤，返回的是符合条件的新数组
      return this.allChannel.filter((item) => {
        // 判断当前循环项，是否在 “我的频道” 列表之中
        const index = this.userChannel.findIndex((x) => x.id === item.id)
        // 如果不在，则 return true，表示需要把这一项存储到返回的新数组之中
        if (index === -1) return true
        return false
      })
    }
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
.van-popup,
.popup-container {
  background-color: transparent;
  height: 100%;
  width: 100%;
}

.popup-container {
  display: flex;
  flex-direction: column;
}

.pop-body {
  flex: 1;
  overflow: scroll;
  padding: 8px;
  background-color: white;
}

.my-channel-box,
.more-channel-box {
  .channel-title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 28px;
    padding: 0 6px;
    .title-bold {
      font-weight: bold;
    }
    .title-gray {
      color: gray;
      font-size: 12px;
    }
  }
}

.btn-edit {
  border: 1px solid #a3a2a2;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
  border-radius: 6px;
  font-size: 12px;
}

.channel-item {
  font-size: 12px;
  text-align: center;
  line-height: 36px;
  background-color: #fafafa;
  margin: 6px;
}

.cross-badge {
  position: absolute;
  right: -3px;
  top: 0;
  border: none;
}

.sp-line {
  margin: 10px 0 20px 0;
}
</style>
