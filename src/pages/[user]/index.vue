<script setup lang="ts">
import type { DayItem, TimeObj } from '@/model'

definePageMeta({ layout: 'booking' })
const month = ref<string>()
const date = ref<DayItem>()
const time = ref<TimeObj>()

watch(month, () => {
  console.log('month', month.value)
})
watch(date, () => {
  console.log('date', date.value?.date)
})
watch(time, () => {
  console.log('time', time.value?.time)
})
</script>

<template>
  <div class="booking-page">
    <UICalender v-model:date="date" v-model:time="time" v-model:month="month" />

    <!-- <UICalenderDatepicker @change="handleDateChange" @month-change="handleMonthChange" /> -->
  </div>
</template>

<style scoped>
.booking-page {
  display: flex;
  justify-content: center;
  margin-top: 66px;
}
</style>
