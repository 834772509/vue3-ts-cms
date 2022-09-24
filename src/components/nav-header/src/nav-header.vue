<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";

const emit = defineEmits(["foldChange"]);

const isFold = ref(false);

function handleFoldClick() {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
}
</script>

<style lang="less" scoped>
.fold-menu {
  font-size: 24px;
  cursor: pointer;
}
</style>
