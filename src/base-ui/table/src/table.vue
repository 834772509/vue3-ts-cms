<template>
  <div class="base-table">
    <el-table :data="props.listData" style="width: 100%" min-width="180" border>
      <template v-for="propItem in props.propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
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
    type: Array as any,
    required: true
  }
});
</script>

<style scoped></style>
