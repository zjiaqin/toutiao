<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.back()"
      fixed
    />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image
            round
            class="avatar"
            :src="userProfile.photo"
            @click="$refs.fileRef.click()"
          />
          <!-- 文件选择框 -->
          <input
            type="file"
            accept="image/*"
            @change="onFileChange"
            v-show="false"
            ref="fileRef"
          />
        </template>
      </van-cell>
      <van-cell
        title="名称"
        is-link
        :value="userProfile.name"
        @click="onNameCellClick"
      />
      <van-cell
        title="生日"
        is-link
        :value="userProfile.birthday"
        @click="onBirthCellClick"
      />
    </van-cell-group>
    <!-- 修改用户名称的弹出组件 -->
    <van-dialog
      v-model="showNameDialog"
      title="修改名称"
      show-cancel-button
      :before-close="beforeClose"
    >
      <van-field
        v-model.trim="name"
        placeholder="请输入用户名"
        center
        input-align="center"
        maxlength="7"
        ref="nameRef"
      />
    </van-dialog>
    <!-- 修改生日的动作面板 -->
    <van-action-sheet v-model="showBirthSheet">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择出生日期"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showBirthSheet = false"
        @confirm="updateBirthday"
      />
    </van-action-sheet>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { updateUserProfileAPI, updateUserAvatarAPI } from '@/api/'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'UserEdit',
  data() {
    return {
      // 是否展示修改姓名的对话框
      showNameDialog: false,
      // 用户填写的姓名
      name: '',
      // 是否展示修改生日的对话框
      showBirthSheet: false,
      // 年月日
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2050, 11, 31),
      currentDate: new Date()
    }
  },
  methods: {
    ...mapActions(['initUserProfile']),
    onNameCellClick() {
      this.name = this.userProfile.name
      this.showNameDialog = true
      this.$nextTick(() => {
        this.$refs.nameRef.focus()
      })
    },
    beforeClose(action, done) {
      // 点击了“取消”按钮
      if (action === 'cancel') return done()
      // 1. 提示用户“名称的长度为1-7个字符”
      if (this.name === '' || this.name.length > 7) {
        this.$notify({
          type: 'warning',
          message: '名称的长度为1-7个字符',
          duration: 2000
        })
        // 2. 让文本框持续获得焦点
        this.$refs.nameRef.focus()
        // 3. 阻止对话框关闭
        return done(false)
      } else {
        this.updateName(done)
      }
    },
    async updateName(done) {
      try {
        const { data: res } = await updateUserProfileAPI({ name: this.name })
        if (res.message === 'OK') {
          // 关闭对话框
          done()
          // 重新请求用户的简介信息
          this.initUserProfile()
          // 提示用户更新成功
          this.$notify({
            type: 'success',
            message: '名称更新成功！',
            duration: 2000
          })
        }
      } catch (e) {
        if (e.response.status === 409) {
          // 提示用户名称被占用
          this.$notify({
            type: 'warning',
            message: '名称被占用，请更换后重试！',
            duration: 2000
          })
          // 阻止关闭对话框
          done(false)
          // 让文本框持续获得焦点
          this.$refs.nameRef.focus()
        } else {
          // 关闭对话框
          done()
          // 提示用户名更新失败
          this.$notify({
            type: 'danger',
            message: '名称更新失败！',
            duration: 2000
          })
        }
      }
    },
    // 点击生日修改事件
    onBirthCellClick() {
      this.currentDate = this.userProfile.birthday
        ? new Date(this.userProfile.birthday)
        : new Date()
      this.showBirthSheet = true
    },
    // 更新生日方法
    async updateBirthday(value) {
      this.showBirthSheet = false
      const dateStr = dayjs(value).format('YYYY-MM-DD')
      const { data: res } = await updateUserProfileAPI({ birthday: dateStr })
      if (res.message === 'OK') {
        this.initUserProfile()
        this.$notify({
          type: 'success',
          message: '生日修改成功!',
          duration: 2000
        })
      }
    },
    // 文件上传的方法
    async onFileChange(e) {
      const files = e.currentTarget.files
      if (files.length === 0) return
      const fd = new FormData()
      fd.append('photo', files[0])
      const { data: res } = await updateUserAvatarAPI(fd)
      if (res.message === 'OK') {
        this.initUserProfile()
        this.$notify({
          type: 'success',
          message: '更新头像成功！',
          duration: 2000
        })
      }
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  created() {
    this.initUserProfile()
  }
}
</script>

<style lang="less" scoped>
.user-edit-container {
  padding-top: 46px;
}

.user-edit-container {
  padding-top: 46px;
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>
