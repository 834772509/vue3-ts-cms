<template>
  <div class="base-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ props.title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
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
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :currentPage="props.page.currentPage"
          :page-size="props.page.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  /// 表格名称
  title: {
    type: String,
    required: true
  },
  /// 列表数据
  listData: {
    type: Array,
    required: true
  },
  // 数据总数
  listCount: {
    type: Number,
    default: 0
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
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  }
});

const emit = defineEmits(["selectionChange", "update:page"]);

// 选择列表事件
function handleSelectionChange(value: any) {
  emit("selectionChange", value);
}

function handleCurrentChange(currentPage: number) {
  emit("update:page", { ...props.page, currentPage });
}

function handleSizeChange(pageSize: number) {
  emit("update:page", { ...props.page, pageSize });
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
