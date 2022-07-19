<template>
  <div class="login-container">
    <!-- NavBar 组件：只需提供 title 标题 -->
    <van-nav-bar title="黑马头条 - 登录" fixed />

    <van-form @submit="login">
      <van-field
        v-model="form.mobile"
        name="手机号码"
        label="手机号码"
        placeholder="请输入手机号码"
        required
        :rules="[
          { required: true, message: '请输入手机号码', trigger: 'onBlur' },
          {
            pattern: /^1\d{10}$/,
            message: '请填写正确的手机号',
            trigger: 'onBlur'
          }
        ]"
      />
      <van-field
        v-model="form.code"
        type="password"
        name="登录密码"
        label="登录密码"
        placeholder="请输入密码"
        required
        :rules="[
          { required: true, message: '请填写登录密码', trigger: 'onBlur' }
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// 按需导入vuex的方法
import { mapMutations } from 'vuex'

import { LoginAPI } from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    // 映射mutations中的方法
    ...mapMutations(['updateTokenInfo']),
    async login() {
      try {
        const res = await LoginAPI(this.form)
        // 当登录成功将服务器返回的token信息提交给updateTokenInfo方法，运用该方法将token信息传进vuex的state库中
        this.updateTokenInfo(res.data.data)

        // 登录成功跳转到主页
        const navPath = this.$route.query.pre || '/'
        console.log(navPath)
        this.$router.replace(navPath)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('登录失败')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  padding-top: 46px;
}
</style>
