<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <div ref="dirRef" style="width: 600px; height: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const dirRef = ref<HTMLElement>();

onMounted(() => {
  // 1.初始化echarts的实例
  const echartInstance = echarts.init(dirRef.value!, "light", {
    renderer: "svg"
  });
  // 2.编写配置文件
  const option = {
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    legend: {
      data: ["销量"]
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  // 3.设置配置，并且开始绘制
  echartInstance.setOption(option);
});
</script>

<style lang="less" scoped></style>
