<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <base-card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </base-card>
      </el-col>
      <el-col :span="10">
        <base-card title="不同城市商品销量"></base-card>
      </el-col>
      <el-col :span="7">
        <base-card title="分类商品数量（玫瑰图）"></base-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <base-card title="分类商品的销量"> </base-card>
      </el-col>
      <el-col :span="12">
        <base-card title="分类商品的收藏"></base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import useDashboardStore from "@/stores/main/analysis/dashboard";
import BaseCard from "@/base-ui/card";
import { PieEchart } from "@/components/page-echarts";

// 请求数据
const dashboardStore = useDashboardStore();
dashboardStore.getDashboardDataAction();

const categoryGoodsCount = computed(() => {
  return dashboardStore.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount };
  });
});
</script>

<style lang="less" scoped>
.content-row {
  margin-top: 20px;
}
</style>
