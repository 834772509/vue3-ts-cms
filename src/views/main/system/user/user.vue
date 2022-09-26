<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="密码">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="喜欢的运动">
              <el-select style="width: 100%">
                <el-option>篮球</el-option>
                <el-option>足球</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="创建时间">
          <el-date-picker style="width: 100%"></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.user {
}
</style>
