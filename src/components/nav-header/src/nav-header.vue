<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
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
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, computed } from "vue";
import { Fold, Expand, ArrowDown } from "@element-plus/icons-vue";
import useLoginStore from "@/stores/login";

const emit = defineEmits(["foldChange"]);
const loginStore = useLoginStore();
const name = computed(() => loginStore.userInfo.name);
const isFold = ref(false);

function handleFoldClick() {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;

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
  }
}
</style>
