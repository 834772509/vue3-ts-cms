<template>
  <div class="menu">
    <page-content pageName="menu" :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";
</script>

<style lang="less" scoped></style>
