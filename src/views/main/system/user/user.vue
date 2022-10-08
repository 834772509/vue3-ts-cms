<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
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

const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch();
const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
  usePageModal();
</script>

<style lang="less" scoped></style>
