<script setup lang="ts">
const activeKey = ref('profile')
const labelCol = { style: { width: '150px' } }
</script>

<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="profile" tab="个人信息" />
      <a-tab-pane key="platform" tab="第三方平台" />
      <a-tab-pane key="case" tab="案例" />
    </a-tabs>
  </div>
  <div>
    <a-form :label-col="labelCol" layout="horizontal" style="max-width: 600px">
      <a-form-item label="入行年份">
        <a-select>
          <a-select-option value="2024">
            2024
          </a-select-option>
          <a-select-option value="2023">
            2023
          </a-select-option>
          <a-select-option value="2022">
            2022
          </a-select-option>
          <a-select-option value="2021">
            2021
          </a-select-option>
          <a-select-option value="2020">
            2022
          </a-select-option>
          <a-select-option value="2000">
            20年前
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="形象">
        <a-upload action="/upload.do" list-type="picture-card">
          <div>
            <PlusOutlined />
            <div style="margin-top: 8px">
              Upload
            </div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
</style>
