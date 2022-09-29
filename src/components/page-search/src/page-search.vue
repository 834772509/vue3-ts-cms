<template>
  <div class="search">
    <base-form v-bind="props.searchFormConfig" v-model="formData">
      <template #header><h1 class="header">高级检索</h1></template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" :icon="Refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </base-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search, Refresh } from "@element-plus/icons-vue";
import BaseForm from "@/base-ui/form";

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
});

// 双向绑定的数据由配置文件的field来决定
const formItems = props.searchFormConfig?.formItems ?? [];
const formOriginData: any = {};
for (const item of formItems) {
  formOriginData[item.field] = "";
}
const formData = ref(formOriginData);

// 重置按钮
function handleResetClick() {
  formData.value = formOriginData;
  // for (const key in formOriginData) {
  //   formData.value[key] = formOriginData[key];
  // }
}
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
