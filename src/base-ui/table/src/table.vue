<template>
  <div class="base-table">
    <el-table
      :data="props.listData"
      style="width: 100%"
      min-width="180"
      @selection-change="handleSelectionChange"
      border
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="props.showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
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
  /// 列表数据
  listData: {
    type: Array,
    required: true
  },
  /// 表格属性
  propList: {
    type: Array as any,
    required: true
  },
  /// 显示列表序号
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  /// 显示列表选择框
  showSelectColumn: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["selectionChange"]);

function handleSelectionChange(value: any) {
  emit("selectionChange", value);
}
</script>

<style scoped></style>
