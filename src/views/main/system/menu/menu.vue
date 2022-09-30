<template>
  <div class="menu">
    <page-content pageName="menu" :contentTableConfig="contentTableConfig" />
    <!-- <div>
      <el-table
        :data="tableData"
        row-key="id"
        tree-props="{ hasChildren: 'hasChildren', children: 'children' }"
        border
      >
        <el-table-column prop="date" label="date" />
        <el-table-column prop="name" label="Name" />
      </el-table>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";

const tableData = [
  {
    id: 1,
    date: "2016-05-02",
    name: "wangxiaohu"
  },
  {
    id: 2,
    date: "2016-05-01",
    name: "wangxiaohu",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "wangxiaohu"
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "wangxiaohu"
      }
    ]
  }
];
</script>

<style lang="less" scoped></style>
