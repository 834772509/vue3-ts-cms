<template>
  <el-dropdown class="user-info">
    <span class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      <span>{{ name }}</span>
      <el-icon class="el-icon--right"> <ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
        <el-dropdown-item @click="handleExitClick" divided
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import useLoginStore from "@/stores/login";
import localCache from "@/utils/cache";
import { useRouter } from "vue-router";

const loginStore = useLoginStore();
const name = computed(() => loginStore.userInfo.name);

const router = useRouter();

function handleExitClick() {
  localCache.deleteCache("token");
  router.push("/main");
}
</script>

<style lang="less" scoped>
.user-info {
  .el-dropdown-link {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
}
</style>
