<template>
  <div class="user">
    <div class="search">
      <base-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import BaseForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";
</script>

<style lang="less" scoped></style>
