<template>
  <div class="list">
    <page-content
      ref="pageContentRef"
      pageName="story"
      :contentTableConfig="contentTableConfig"
    >
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";
</script>

<style lang="less" scoped></style>
