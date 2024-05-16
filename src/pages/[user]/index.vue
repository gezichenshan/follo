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
  </div>
</template>

<style scoped>
.booking-page {
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 66px;
  margin-bottom: 30px;
}
</style>
