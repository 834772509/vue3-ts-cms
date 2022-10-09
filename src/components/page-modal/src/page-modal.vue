<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      align-center
      destroy-on-close
    >
      <base-form v-bind="modalConfig" v-model="formData"></base-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import BaseForm from "@/base-ui/form";
import useSystemStore from "@/stores/main/system/system";
import { ElMessage } from "element-plus";

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
});

const dialogVisible = ref(false);
const formData = ref<any>({});

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`];
    }
  }
);

// 点击确定按钮的逻辑
const systemStore = useSystemStore();
function handleConfirmClick() {
  dialogVisible.value = false;

  if (Object.keys(props.defaultInfo).length) {
    // 编辑状态
    systemStore.editPageDataAction(props.pageName, props.defaultInfo.id, {
      ...formData.value
    });
  } else {
    // 新建状态
    systemStore.createPageDataAction(props.pageName, { ...formData.value });
  }

  ElMessage({
    message: "操作成功",
    type: "success"
  });
}

defineExpose({ dialogVisible });
</script>

<style scoped></style>
