<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <base-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";
import userInfo from "./user-info.vue";
import BaseBreadcrumb, { type IBreadcrumb } from "@/base-ui/breadcrumb";
import { patchMapBreadcrumbs } from "@/utils/map-menus";
import useLoginStore from "@/stores/login";
import { useRoute } from "vue-router";

const emit = defineEmits(["foldChange"]);

const isFold = ref(false);

// 面包屑数据
const loginStore = useLoginStore();

const breadcrumbs = computed(() => {
  const route = useRoute();
  const currentPath = route.path;
  return patchMapBreadcrumbs(loginStore.userMenus, currentPath);
});

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
  }
}
</style>
