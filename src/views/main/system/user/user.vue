<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <base-table
        :title="title"
        :listData="systemStore.userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
      >
        <!-- header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary">新建用户</el-button>
        </template>
        <!-- 列中的插槽 -->
        <template #status="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
            plain
            >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
          >
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #action>
          <div class="action-btns">
            <el-button type="primary" size="small" :icon="Edit" text
              >编辑</el-button
            >
            <el-button type="primary" size="small" :icon="Delete" text
              >删除</el-button
            >
          </div>
        </template>
        <template #footer></template>
      </base-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import { searchFormConfig } from "./config/search.config";
import useSystemStore from "@/stores/main/system/system";
import BaseTable from "@/base-ui/table";
import { Delete, Edit } from "@element-plus/icons-vue";

const title = "用户列表";
const showIndexColumn = true;
const showSelectColumn = true;

const propList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "电话号码", minWidth: "120" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "250",
    slotName: "createAt"
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: "250",
    slotName: "updateAt"
  },
  { label: "操作", minWidth: "160", slotName: "action" }
];

const systemStore = useSystemStore();
systemStore.getPageListAction({
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10
  }
});

function selectionChange(value: any) {
  console.log(value);
}
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
