<template>
  <div class="base-table">
    <el-table :data="props.listData" style="width: 100%" min-width="180" border>
      <template v-for="propItem in props.propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem" />
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  }
});
</script>

<style scoped></style>
