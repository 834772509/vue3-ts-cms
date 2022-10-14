<template>
  <div class="chat">
    <div class="input">
      <el-input v-model="title" placeholder="请输入故事标题" />
      <el-input
        type="textarea"
        :rows="20"
        placeholder="请输入您的故事"
        v-model="content"
      />
    </div>
    <div class="action">
      <el-button class="btn-commit" type="primary" @click="commitBtn"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { createPageData } from "@/service/main/system/system";
import { ElMessage } from "element-plus";

const title = ref("");
const content = ref("");

function commitBtn() {
  createPageData("/story", { title: title.value, content: content.value })
    .then(() => {
      title.value = "";
      content.value = "";
      ElMessage({
        message: "提交成功",
        type: "success"
      });
    })
    .catch(() => {
      ElMessage({
        message: "提交失败",
        type: "error"
      });
    });
}
</script>

<style lang="less" scoped>
.chat {
  padding: 20px;
  .input {
    .el-input {
      padding-bottom: 20px;
    }
  }

  .action {
    text-align: right;

    .btn-commit {
      margin: 20px 20px 0 10px;
    }
  }
}
</style>
