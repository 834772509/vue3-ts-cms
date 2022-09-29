<template>
  <div class="page-content">
    <base-table :listData="dataList" v-bind="props.contentTableConfig">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #action>
        <div class="action-btns">
          <el-button type="primary" size="small" :icon="Edit" text
            >编辑</el-button
          >
          <el-button type="primary" size="small" :icon="Delete" text
            >删除</el-button
          >
        </div>
      </template>
      <template #footer></template>
    </base-table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import BaseTable from "@/base-ui/table";
import useSystemStore from "@/stores/main/system/system";
import { Delete, Edit } from "@element-plus/icons-vue";

const props = defineProps({
  pageName: {
    type: String,
    require: true
  },
  contentTableConfig: {
    type: Object,
    require: true
  }
});

const systemStore = useSystemStore();

// 发送网络请求
const getPageData = (formData: any = {}) => {
  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      size: 10,
      ...formData
    }
  });
};
getPageData();

// 从store中获取数据
const dataList = computed(() =>
  systemStore.pageListData(props.pageName as string)
);

defineExpose({ getPageData });
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
