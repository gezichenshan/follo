<script lang="ts" setup>
import { reactive } from 'vue'
import type { UnwrapRef } from 'vue'

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  name: string
  email: string
  phoneNumber: string
  note: string
}
const formState: UnwrapRef<FormState> = reactive({
  layout: 'horizontal',
  name: '',
  email: '',
  phoneNumber: '',
  note: '',
})
</script>

<template>
  <a-form layout="vertical" :model="formState">
    <a-form-item label="姓名" :rules="[{ required: true, message: '该项不能为空' }]">
      <a-input v-model:value="formState.name" size="large" />
    </a-form-item>
    <a-form-item label="邮箱" :rules="[{ required: true, message: '该项不能为空' }]">
      <a-input v-model:value="formState.email" size="large" />
    </a-form-item>
    <a-form-item label="电话" :rules="[{ required: true, message: '该项不能为空' }]">
      <a-input v-model:value="formState.phoneNumber" :rules="[{ required: true, message: '该项不能为空' }]" size="large" />
    </a-form-item>
    <a-form-item label="请分享任何有助于准备我们的会议的信息。">
      <a-textarea v-model:value="formState.note" size="large" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" size="large">
        确认会议
      </a-button>
    </a-form-item>
  </a-form>
</template>
