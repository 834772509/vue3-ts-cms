<template>
  <div class="menu">
    <page-content
      pageName="menu"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      pageName="menu"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    >
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import { usePageModal } from "@/hooks/use-page-modal";

const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal();
</script>

<style lang="less" scoped></style>
