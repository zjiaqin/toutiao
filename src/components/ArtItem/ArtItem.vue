<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ article.title }}</span>
          <!-- 单张图片 -->
          <img
            v-lazy="article.cover.images[0]"
            alt=""
            class="thumb"
            v-if="article.cover.type === 1"
          />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="article.cover.type === 3">
          <img
            v-for="(item, index) in article.cover.images"
            :key="index"
            v-lazy="item"
            alt=""
            class="thumb"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >{{ article.aut_name }} &nbsp;&nbsp;{{ article.comm_count }}评论
            &nbsp;&nbsp; {{ article.pubdate | dateFormat }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon
            name="cross"
            is-link
            title="基础用法"
            @click="show = true"
          />
        </div>
      </template>
    </van-cell>
    <!-- 文章删除举报的动作反馈面板 -->
    <van-action-sheet
      v-model="show"
      cancel-text="取消"
      :closeable="false"
      @closed="isFirst = true"
    >
      <!-- 一级面板模板 -->
      <div v-if="isFirst">
        <van-cell
          :title="item.name"
          clickable
          class="center-title"
          v-for="item in actions"
          :key="item.name"
          @click="onCellClick(item.name)"
          get-container="body"
        />
      </div>
      <!-- 二级面板模板 -->
      <div v-else>
        <van-cell
          title="返回"
          clickable
          title-class="center-title"
          @click="isFirst = true"
        />
        <van-cell
          :title="item.label"
          clickable
          title-class="center-title"
          v-for="item in reports"
          :key="item.type"
          @click="reportArticle(item.type)"
        />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { dislikeArticleAPI, reportArticleAPI } from '@/api'
import reports from '@/api/reports'
export default {
  name: 'ArtItem',
  data() {
    return {
      // 动作面板参数
      show: false,
      actions: [
        { name: '不感兴趣' },
        { name: '反馈垃圾内容' },
        { name: '拉黑作者' }
      ],
      // 是否展示一级面板的逻辑判断
      isFirst: true,
      // 第二级面板数据
      reports
    }
  },
  props: {
    // 文章的信息对象
    article: {
      type: Object, // 数据类型
      required: true // 必填项
    }
  },
  methods: {
    async onCellClick(name) {
      if (name === '不感兴趣') {
        const { data: res } = await dislikeArticleAPI(this.artId)
        if (res.message === 'OK') {
          // 删除列表中的该行
          this.$emit('remove-article', this.artId)
        }
        this.show = false
      } else if (name === '拉黑作者') {
        console.log('拉黑作者')
        this.show = false
      } else if (name === '反馈垃圾内容') {
        // TODO：展示二级反馈面板
        this.isFirst = false
      }
    },
    async reportArticle(type) {
      const { data: res } = await reportArticleAPI(this.artId, type)
      if (res.message === 'OK') {
        this.$emit('remove-article', this.artId)
      }
      this.show = false
    }
  },
  computed: {
    // 文章 Id 的计算属性
    artId() {
      // 注意：文章对象的 art_id 是大数对象，需要调用 .toString() 方法转换为字符串形式
      return this.article.art_id.toString()
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
.center-title {
  text-align: center;
}
</style>
