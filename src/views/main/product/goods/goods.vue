<template>
  <div class="goods">
    <page-content pageName="goods" :contentTableConfig="contentTableConfig">
      <!-- 状态 -->
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.status ? 'success' : 'danger'"
          plain
          >{{ scope.row.status ? "启用" : "禁用" }}</el-button
        >
      </template>

      <!-- 商品图 -->
      <template #imgage="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
          hide-on-click-modal
        />
      </template>

      <!-- 商品价格 -->
      <template #price="scope"> ￥{{ scope.row.oldPrice }} </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";
</script>

<style lang="less" scoped></style>
