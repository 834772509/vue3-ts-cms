<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="goods"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <!-- 状态 -->
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.status ? 'success' : 'danger'"
          plain
          >{{ scope.row.status ? "正常" : "下架" }}</el-button
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

    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      pageName="users"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { modalConfig } from "./config/modal.config";
import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch();
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal();
</script>

<style lang="less" scoped></style>
