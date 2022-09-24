<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <span class="title" v-if="!props.collapse">Vue3后台管理系统</span>
    </div>
    <!-- background-color="#001529" -->
    <!-- text-color="#fff" -->
    <el-menu
      default-active="2"
      class="el-menu"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opend="true"
      :collapse="props.collapse"
    >
      <template v-for="item in loginStore.userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单标题 -->
          <el-sub-menu
            :index="item.id + ''"
            :show-timeout="100"
            :hide-timeout="100"
          >
            <template #title>
              <el-icon>
                <Monitor v-if="item.icon.indexOf('monitor') != -1" />
                <Setting v-if="item.icon.indexOf('setting') != -1" />
                <Goods v-if="item.icon.indexOf('goods') != -1" />
                <ChatLineRound v-if="item.icon.indexOf('round') != -1" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历二级菜单子菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Monitor,
  Setting,
  Goods,
  ChatLineRound
} from "@element-plus/icons-vue";
import useLoginStore from "@/stores/login";

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
});

const loginStore = useLoginStore();
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }
}
</style>
