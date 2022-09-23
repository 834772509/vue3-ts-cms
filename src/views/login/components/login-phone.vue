<template>
  <div class="login-account">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号" required prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" required prop="code">
        <div class="code">
          <el-input v-model="phone.code" />
          <el-button class="btn-getcode" type="primary" @click="btn_getcode"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const rules = {
  number: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{11}$/,
      message: "手机号必须是11个位数字",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{6}$/,
      message: "验证码必须是6位数字",
      trigger: "blur"
    }
  ]
};

const phone = reactive({
  number: "",
  code: ""
});

function btn_getcode() {
  console.log("获取验证码");
}
</script>

<style lang="less" scoped>
.code {
  display: flex;
  .btn-getcode {
    margin-left: 8px;
  }
}
</style>
