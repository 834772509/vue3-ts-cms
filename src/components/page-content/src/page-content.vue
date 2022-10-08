<template>
  <div class="page-content">
    <base-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="props.contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #header>
        <el-button type="primary" v-if="isCreate">新建用户</el-button>
      </template>

      <!-- 2.列中的插槽 -->

      <!-- 创建时间 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <!-- 更新时间 -->
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <!-- 操作 -->
      <template #action="scope">
        <div class="action-btns">
          <el-button
            type="primary"
            size="small"
            :icon="Edit"
            text
            v-if="isUpdate"
            >编辑</el-button
          >
          <el-button
            type="primary"
            size="small"
            :icon="Delete"
            text
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 动态插入其他的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>

      <!-- 3.footer中的插槽 -->
      <template #footer></template>
    </base-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Delete, Edit } from "@element-plus/icons-vue";
import BaseTable from "@/base-ui/table";
import useSystemStore from "@/stores/main/system/system";
import { usePermission } from "@/hooks/use-permission";

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

// 获取操作的权限
const isCreate = usePermission(props.pageName, "create");
const isUpdate = usePermission(props.pageName, "update");
const isDelete = usePermission(props.pageName, "dalete");
const isQuery = usePermission(props.pageName, "query");

// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 });
watch(pageInfo, () => getPageData());

// 发送网络请求
const getPageData = (formData: any = {}) => {
  if (!isQuery) {
    return;
  }
  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...formData
    }
  });
};
getPageData();

// 从store中获取数据
const dataList = computed(() =>
  systemStore.pageListData(props.pageName as string)
);
const dataCount = computed(() =>
  systemStore.pageListCount(props.pageName as string)
);

// 获取其他的动态插槽
const otherPropSlots = props?.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === "createAt") return false;
    if (item.slotName === "updateAt") return false;
    if (item.slotName === "header") return false;
    if (item.slotName === "action") return false;
    return true;
  }
);

// 删除/编辑/新建操作
function handleDeleteClick(item: any) {
  ElMessageBox.confirm("即将删除此数据，是否继续？", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    systemStore.deletePageData({
      pageName: props.pageName,
      id: item.id
    });
    ElMessage({
      message: "删除成功",
      type: "success"
    });
  });
}

defineExpose({ getPageData });
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
