<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="role"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="treeRef"
          :data="menus"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          node-key="id"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from "vue";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { modalConfig } from "./config/modal.config";
import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";
import useGlobalStore from "@/stores/global";
import { menuMapLeafKeys } from "@/utils/map-menus";
import { ElTree } from "element-plus";

// 1.处理pageModal的hook
const treeRef = ref<InstanceType<typeof ElTree>>();
function editCallback(item: any) {
  const leafKeys = menuMapLeafKeys(item.menuList);
  nextTick(() => treeRef.value?.setCheckedKeys(leafKeys, false));
}

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch();
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal(undefined, editCallback);

const globalStore = useGlobalStore();
const menus = computed(() => globalStore.menuList);
const otherInfo = ref({});

function handleCheckChange(data1: any, data2: any) {
  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList };
}
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 20px;
}
</style>
