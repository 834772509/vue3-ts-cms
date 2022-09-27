<template>
  <div class="user">
    <div class="search">
      <base-form v-bind="searchFormConfig" v-model="formData" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";

const formData = ref({
  id: "",
  name: "",
  password: "",
  sport: "",
  createTime: ""
});
</script>

<style lang="less" scoped></style>
