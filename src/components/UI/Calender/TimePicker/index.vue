<script setup lang="ts">
import dayjs from 'dayjs'
import * as TimeUtil from '@/utils/time'
import type { DateItem, TimeObj } from '@/model'

interface Props {
  availableTimes: TimeObj[]
  date?: DateItem
  isLoading: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['change', 'next'])
const { availableTimes, date, isLoading } = toRefs(props)
const dateTitle = computed(() => {
  if (!date.value)
    return
  return `${TimeUtil.getFormatedDayFromDate(date.value?.date)}，${dayjs(date.value.date).format('MM月DD日')}`
})

const selectedTime = ref<TimeObj>()
function handleSelect(item: TimeObj) {
  selectedTime.value = item
}
const timesByAvailableTimes = computed(() => {
  return availableTimes.value.map(t => ({ ...t, selected: t.time === selectedTime.value?.time }))
})

watch(availableTimes, () => {
  selectedTime.value = undefined
})

watch(selectedTime, () => {
  emits('change', selectedTime.value)
})
</script>

<template>
  <div class="time-picker-ctn">
    <div style="height: 30px;">
      {{ dateTitle }}
    </div>
    <div class="time-list">
      <UICalenderTimePickerTimeButton v-for="(item, i) in timesByAvailableTimes" :key="i" :data="item" @select="handleSelect" @next="() => emits('next', selectedTime)" />
      <span v-if="!isLoading && timesByAvailableTimes.length === 0">
        <a-empty description="无可供选择的时间" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.time-picker-ctn {
  position: relative;
  display: flex;
  flex-direction: column;
}

.time-list {
  overflow: auto;
  scrollbar-gutter: stable;
  margin-top: 20px;
}

.time-list::-webkit-scrollbar {
  width: 8px;
}

.time-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #888;
}
</style>
