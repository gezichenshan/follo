<script setup lang="ts">
const activeKey = ref('upcoming')
let vshow = ref(true)
</script>

<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="upcoming" tab="近期">
      </a-tab-pane>
      <a-tab-pane key="pending" tab="待确认" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="past" tab="过期">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>

</style>
