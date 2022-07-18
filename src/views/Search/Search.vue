<template>
  <div>
    <!-- Header 头部区域 -->
    <div class="search-header">
      <!-- 后退图标 -->
      <van-icon
        name="arrow-left"
        color="white"
        size="17"
        class="goback"
        @click="$router.back()"
      />
      <!-- 搜索组件 -->
      <van-search
        v-model.trim="kw"
        placeholder="请输入搜索关键词"
        background="#007BFF"
        shape="round"
        ref="searchRef"
        @input="onInput"
      />
    </div>
    <!-- 搜索建议 -->
    <div class="sugg-list" v-if="suggestList.length !== 0">
      <div
        class="sugg-item"
        v-for="(item, i) in suggestList"
        :key="i"
        v-html="item"
        @click="gotoSearchResult"
      >
        {{ item }}
      </div>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history" v-else>
      <!-- 标题 -->
      <van-cell title="搜索历史">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="delete" class="search-icon" @click="history = []" />
        </template>
      </van-cell>

      <!-- 历史列表 -->
      <div class="history-list">
        <span
          class="history-item"
          v-for="(tag, i) in history"
          :key="i"
          @click="gotoSearchResult"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getSuggestListAPI } from '@/api'
export default {
  name: 'Search',
  data() {
    return {
      kw: '',
      timerId: null,
      suggestList: [],
      history: JSON.parse(localStorage.getItem('history')) || []
    }
  },
  mounted() {
    const ipt = document.querySelector('input[type=search]')
    ipt && ipt.focus()
  },
  methods: {
    onInput() {
      clearTimeout(this.timerId)
      if (this.kw.length === 0) {
        this.suggestList = []
        return
      }
      this.timerId = setTimeout(() => {
        // 搜索建议
        this.initsuggestList(this.kw)
      }, 500)
    },
    async initsuggestList(kw) {
      const { data: res } = await getSuggestListAPI(kw)
      if (res.message === 'OK') {
        // 为 suggestList 数据赋值
        this.hlightKeywords(res.data.options)
        this.suggestList = res.data.options
        const newHistory = this.history.filter((item) => item !== kw)
        newHistory.unshift(kw)
        this.history = newHistory
      }
    },
    hlightKeywords(arr) {
      // 1. 根据用户输入的 kw，动态创建正则表达式
      const reg = new RegExp(this.kw, 'ig')

      // 循环数组中的每一项
      arr.forEach((item, index) => {
        // 2. TODO：调用字符串的 replace 方法，进行关键词的高亮处理
        arr[index] = item.replace(reg, (val) => {
          return `<span style="color: red; font-weight: bold;">${val}</span>`
        })
      })
    },
    gotoSearchResult(e) {
      const kw = e.currentTarget.innerText
      // this.$router.push(`/search/${kw}`)
      this.$router.push({
        name: 'search-result',
        params: { kw }
      })
    }
  },
  watch: {
    history(newVal) {
      localStorage.setItem('history', JSON.stringify(newVal))
    }
  }
}
</script>

<style lang="less" scoped>
.search-header {
  height: 46px;
  display: flex;
  align-items: center;
  background-color: #007bff;
  overflow: hidden;
  // 后退按钮
  .goback {
    padding-left: 14px;
  }
  // 搜索组件
  .van-search {
    flex: 1;
  }
}
.sugg-list {
  .sugg-item {
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
    font-size: 14px;
    line-height: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}

.history-list {
  padding: 0 10px;
  .history-item {
    display: inline-block;
    font-size: 12px;
    padding: 8px 14px;
    background-color: #efefef;
    margin: 10px 8px 0px 8px;
    border-radius: 10px;
  }
}
</style>
