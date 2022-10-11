<template>
  <div class="pie-echarts">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseEchart from "@/base-ui/echart";
import type { IDataType } from "../types";

const props = defineProps<{
  pieData: IDataType[];
}>();

const options = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        type: "pie",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>
