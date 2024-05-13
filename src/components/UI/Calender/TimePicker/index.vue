<script setup lang="ts">
import type { TimeObj } from '@/model'

interface Props {
  availableTimes: TimeObj[]
}
const props = defineProps<Props>()
const { availableTimes } = toRefs(props)

const selectedTime = ref<TimeObj>()
function handleSelect(item: TimeObj) {
  selectedTime.value = item
}
const times = computed(() => {
  return availableTimes.value.map(t => ({ ...t, selected: t.time === selectedTime.value?.time }))
})

watch(availableTimes, () => {
  selectedTime.value = undefined
})
</script>

<template>
  <div class="time-picker">
    <UICalenderTimePickerTimeButton v-for="(item, i) in times" :key="i" :data="item" @select="handleSelect" />
  </div>
</template>

<style scoped>
.time-picker {
  position: relative;
  width: 300px;
  overflow: auto;
}
</style>
