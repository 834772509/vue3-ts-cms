<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="department"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      pageName="department"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";
import useGlobalStore from "@/stores/global";

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch();

// 动态添加上级部门
const globalStore = useGlobalStore();
const departmentItem = modalConfig.formItems.find(
  (item) => item.field === "parentId"
);
departmentItem!.options = globalStore.entireDepartment.map((item: any) => {
  return { title: item.name, value: item.id };
});

// 调用hook获取公共
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal();
</script>

<style lang="less" scoped></style>
