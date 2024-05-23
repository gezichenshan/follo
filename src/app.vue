<script setup lang="ts">
import { theme } from 'ant-design-vue'

const dark = useDark()
</script>

<template>
  <div class="absolute right-1 bottom-1">
    <a-switch v-model:checked="dark">
      <template #checkedChildren>
        黑
      </template>
      <template #unCheckedChildren>
        白
      </template>
    </a-switch>
  </div>
  <div>
    <a-config-provider
      :theme="{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </div>
</template>
