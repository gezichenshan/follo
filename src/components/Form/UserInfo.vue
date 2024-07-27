<script lang="ts" setup>
import { reactive } from 'vue'
import type { UnwrapRef } from 'vue'
import type { EventSchedulingFormData } from '@/model'

interface FormState extends Partial<EventSchedulingFormData> {}

const emits = defineEmits(['submit'])

const formState: UnwrapRef<FormState> = reactive({
  name: '',
  email: '',
  phone: '',
  note: '',
})
function onFinish(values: FormState) {
  console.log('Success:', values)
  emits('submit', values)
}

function onFinishFailed(errorInfo: any) {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <a-form
    layout="vertical"
    :model="formState"
    @finish="onFinish"
    @finish-failed="onFinishFailed"
  >
    <a-form-item label="姓名" name="name" :rules="[{ required: true, message: '该项不能为空' }]">
      <a-input v-model:value="formState.name" size="large" />
    </a-form-item>
    <a-form-item label="邮箱" name="email" :rules="[{ required: true, message: '该项不能为空' }]">
      <a-input v-model:value="formState.email" size="large" />
    </a-form-item>
    <a-form-item label="电话" name="phone" :rules="[{ required: true, message: '该项不能为空' }]">
      <a-input v-model:value="formState.phone" :rules="[{ required: true, message: '该项不能为空' }]" size="large" />
    </a-form-item>
    <a-form-item label="请分享任何有助于准备我们的会议的信息" name="note">
      <a-textarea v-model:value="formState.note" size="large" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" size="large" html-type="submit">
        确认会议
      </a-button>
    </a-form-item>
  </a-form>
</template>
