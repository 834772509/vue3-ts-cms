<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import { searchFormConfig } from "./config/search.config";
</script>

<style lang="less" scoped></style>
