<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";
import useGlobalStore from "@/stores/global";

const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch();

// pageModal相关的hook逻辑
// 处理隐藏密码的逻辑
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === "password"
  );
  passwordItem!.isHidden = false;
};
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === "password"
  );

  passwordItem!.isHidden = true;
};

// 动态添加部门和角色列表
const globalStore = useGlobalStore();

const departmentItem = modalConfig.formItems.find(
  (item) => item.field === "departmentId"
);
departmentItem!.options = globalStore.entireDepartment.map((item: any) => {
  return { title: item.name, value: item.id };
});

const roleItem = modalConfig.formItems.find((item) => item.field === "roleId");
roleItem!.options = globalStore.entireRole.map((item: any) => {
  return { title: item.name, value: item.id };
});

// 调用hook获取公共
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newCallback,
  editCallback
);
</script>

<style lang="less" scoped></style>
