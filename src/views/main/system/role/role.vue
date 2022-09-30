<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="role"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { usePageSearch } from "@/hooks/use-page-search";

const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch();
</script>

<style lang="less" scoped></style>
