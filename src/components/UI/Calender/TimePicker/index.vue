<script setup lang="ts">
import dayjs from 'dayjs'
import * as TimeUtil from '@/utils/time'
import type { DayItem, TimeObj } from '@/model'

interface Props {
  availableTimes: TimeObj[]
  date?: DayItem
}
const props = defineProps<Props>()
const { availableTimes, date } = toRefs(props)

const dateTitle = computed(() => {
  if (!date.value)
    return
  return `${TimeUtil.getFormatedDayFromDate(date.value?.date)}，${dayjs(date.value.date).format('MM月DD日')}`
})

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
    <div style="height: 30px;text-align: center;">
      {{ dateTitle }}
    </div>
    <UICalenderTimePickerTimeButton v-for="(item, i) in times" :key="i" :data="item" @select="handleSelect" />
  </div>
</template>

<style scoped>
.time-picker {
  position: relative;
  width: 300px;
  overflow: auto;
  padding-right: 30px;
  margin-right: 5px;
}

.time-picker::-webkit-scrollbar {
  width: 8px;
}

.time-picker::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #666;
}
</style>
