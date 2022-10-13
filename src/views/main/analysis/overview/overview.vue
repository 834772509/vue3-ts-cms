<template>
  <div class="overview">
    <base-card title="关于">
      <div class="card-left">
        Vue3后台管理系统 是基于 Vue3、Pinia、VueRouter、Vite、
        ElementPlus、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </base-card>

    <base-card title="技术栈">
      <div
        class="card-left link"
        v-for="(item, index) in technologyStacks"
        :key="index"
      >
        <span class="link-title">{{ item.title }} : </span>
        <el-link type="primary">{{ item.desp }}</el-link>
      </div>
      <base-descriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      />
      <base-descriptions
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      />
    </base-card>
    <base-card title="项目规范">
      <base-descriptions :column="1" :table-datas="projectRule" />
    </base-card>
    <base-card title="Git提交规范">
      <base-descriptions :column="1" :table-datas="gitRule" />
    </base-card>
    <base-card title="项目结构"
      ><base-code class="c-left" :code="projectDir"
    /></base-card>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from "@/base-ui/card";
import BaseDescriptions from "@/base-ui/descriptions";
import BaseCode from "@/base-ui/code";
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from "./config";

const projectRule = [
  { name: "组件的文件", description: "统一小写, 多个单词使用-分割" },
  {
    name: "组件的目录结构",
    description:
      "例如 button 组件：button/src/index.vue, 统一在button/index.ts导出"
  },
  {
    name: "组件导包顺序",
    description:
      "导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数"
  },
  { name: "组件的名称", description: "统一大写开头，驼峰命名" },
  {
    name: "组件属性顺序",
    description: "name, components, props, emits, setup ..."
  },
  { name: "template标签", description: "小写加 - ( 例如：<case-panel/> )" },
  {
    name: "template标签属性顺序",
    description: "v-if , v-for , ref, class, style, ... ,事件"
  },
  {
    name: "组件的props",
    description: "小写开头，驼峰命名，必须编写类型默认值"
  },
  {
    name: "组件的样式",
    description:
      "作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割"
  }
];

const gitRule = [
  {
    name: "add 操作",
    description: "git add"
  },
  {
    name: "commit  操作",
    description: "npm run commit"
  },
  {
    name: "pull  操作",
    description: "git pull"
  },
  {
    name: "push  操作",
    description: "git push"
  }
];
</script>

<style lang="less" scoped>
.el-card {
  margin-bottom: 20px;
  // ::v-deep 重写 element-plus 样式
  &:deep(.el-card__header span) {
    font-weight: 700;
  }
}
.card-left {
  text-align: left;
}

.link {
  padding: 0 15px;
  margin-bottom: 40px;
  margin: 5px;

  .link-title {
    position: relative;
    display: inline-block;
    margin-right: 20px;

    &::before {
      position: absolute;
      top: 40%;
      left: -15px;
      width: 5px;
      height: 5px;
      background: black;
      border-radius: 100%;
      content: "";
    }
  }
}
</style>
