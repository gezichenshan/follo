<script setup lang="ts">
const times = ref([{ id: 1, selected: false, time: '19:00' }, { id: 2, selected: false, time: '20:00' }])
function handleSelect(item) {
  console.log(1111, item)
  times.value = times.value.map(t => ({ ...t, selected: item.id === t.id }))
}
</script>

<template>
  <div style="width: 300px;">
    <UICalenderTimePickerTimeButton v-for="(item, i) in times" :key="i" :data="item" @select="handleSelect" />
  </div>
</template>

<style scoped>

</style>
