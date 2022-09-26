<template>
  <div class="base-form">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { IFormItem } from "../types";

const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  }
});
</script>

<style lang="less" scoped></style>
