<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <base-table :listData="systemStore.userList" :propList="propList" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import { searchFormConfig } from "./config/search.config";
import useSystemStore from "@/stores/main/system/system";
import BaseTable from "@/base-ui/table";

const propList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "电话号码", minWidth: "120" },
  { prop: "enable", label: "状态", minWidth: "100" },
  { prop: "createAt", label: "创建时间", minWidth: "250" },
  { prop: "updateAt", label: "更新时间", minWidth: "250" }
];

const systemStore = useSystemStore();
systemStore.getPageListAction({
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10
  }
});
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
