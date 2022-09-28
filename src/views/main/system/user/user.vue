<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      pageName="users"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
</script>

<style lang="less" scoped></style>
