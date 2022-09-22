<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" required prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" required prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from "vue";
import { ElForm } from "element-plus";

const rules = {
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{8,10}$/,
      message: "用户名必须是8-10个字母或数字",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{8,}$/,
      message: "密码必须是8位以上的字母或数字",
      trigger: "blur"
    }
  ]
};

const formRef = ref<InstanceType<typeof ElForm>>();

const account = reactive({
  name: "",
  password: ""
});

function loginAction() {
  console.log("account正在开始登录");
  formRef.value?.validate((valid) => {
    if (!valid) {
      return;
    }
  });
}

defineExpose({ loginAction });
</script>

<style lang="less" scoped></style>
