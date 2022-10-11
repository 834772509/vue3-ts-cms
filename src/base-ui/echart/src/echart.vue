<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, withDefaults, watchEffect } from "vue";
import type { EChartsCoreOption } from "echarts";
import useEchart from "../hooks/use-echart";

const props = withDefaults(
  defineProps<{
    options: EChartsCoreOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);

const echartDivRef = ref<HTMLElement>();

onMounted(() => {
  const { setOption } = useEchart(echartDivRef.value!);
  watchEffect(() => setOption(props.options));
});
</script>

<style lang="scss" scoped></style>
