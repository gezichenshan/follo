<script setup lang="ts">
import dayjs from 'dayjs'
import type { DayItem } from '@/model'

const radomTimeLength = ref(Math.floor(Math.random() * 23))

const startDate = computed(() => dayjs().startOf('day').add(radomTimeLength.value, 'hour'))

const availableTimes = computed(() => {
  return Array.from({ length: 23 - radomTimeLength.value }).map((item, i) => dayjs(startDate.value).add(i, 'hour').format('HH:00')).map((item, i) => ({
    id: i,
    selected: false,
    time: item,
  }))
})
const selectedDate = ref<DayItem>()
const loading = ref(false)

// mock
function refetchAvailableTimes() {
  loading.value = true
  setTimeout(() => {
    radomTimeLength.value = Math.floor(Math.random() * 23)
    loading.value = false
  }, 1000)
}

function handleDateSelect(date: DayItem) {
  refetchAvailableTimes()
  selectedDate.value = date
}
</script>

<template>
  <div class="calender-box flex">
    <div class="left-box">
      <h2>Gezichenshan YU</h2>
    </div>
    <div class="right-box relative">
      <UICalenderDatepicker @select="handleDateSelect" />
      <UICalenderTimePicker :available-times="availableTimes" :date="selectedDate" />
      <div v-if="loading" class="loading-mask absolute inset-0">
        <a-spin class="spinner" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.calender-box {
  width: 95%;
  height: 550px;
  border: 1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1));
  border-radius: 8px;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
}
.left-box {
  width: 35%;
  min-width: 300px;
  border-right: 1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1));
  transition: all 0.22s ease-out;
  padding: 20px;
}
.right-box {
  display: flex;
  flex: 1 1 50%;
  width: 50%;
  transition: all 0.22s ease-out;
  padding-top: 20px;
}
.loading-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}
.loading-mask .spinner {
  transform: translateY(-50px);
}
</style>
