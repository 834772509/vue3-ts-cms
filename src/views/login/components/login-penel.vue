<template>
  <div class="login-penel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <!-- 账号登录 -->
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <!-- 手机登录 -->
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="button-login" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { UserFilled, Iphone } from "@element-plus/icons-vue";
import { ref } from "vue";
import loginAccount from "./login-account.vue";
import loginPhone from "./login-phone.vue";

// 定义属性
const isKeepPassword = ref(true);
const accountRef = ref();
const phoneRef = ref();
const currentTab = ref("account");

// 定义方法
function handleLoginClick() {
  if (currentTab.value === "account") {
    accountRef.value?.loginAction(isKeepPassword.value);
  } else {
    phoneRef.value?.loginAction(isKeepPassword.value);
  }
}
</script>

<style lang="less" scoped>
.login-penel {
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .button-login {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
