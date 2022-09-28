<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
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
</script>

<style lang="less" scoped></style>
