import * as echarts from "echarts";
import chinaMapData from "../data/china.json";

echarts.registerMap("china", chinaMapData as any);

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el);

  const setOption = (options: echarts.EChartsCoreOption) => {
    echartInstance.setOption(options);
  };

  const updateSize = () => {
    echartInstance.resize();
  };

  window.addEventListener("resize", () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOption,
    updateSize
  };
}
