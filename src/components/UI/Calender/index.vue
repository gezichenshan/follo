<script setup lang="ts">
import dayjs from 'dayjs'
import type { DayItem, TimeObj } from '@/model'

const emits = defineEmits(['update:month', 'update:date', 'update:time'])

const radomTimeLength = ref(Math.floor(Math.random() * 23))

const startDate = computed(() => dayjs().startOf('day').add(radomTimeLength.value, 'hour'))

const availableTimes = computed(() => {
  return Array.from({ length: 23 - radomTimeLength.value }).map((item, i) => dayjs(startDate.value).add(i, 'hour').format('HH:00')).map((item, i) => ({
    id: i,
    selected: false,
    time: item,
  }))
})
const selectedMonth = ref<string>()
const selectedDate = ref<DayItem>()
const selectedTime = ref<TimeObj>()
const loading = ref(false)
const step = ref(1)

// mock
function refetchAvailableTimes() {
  loading.value = true
  setTimeout(() => {
    radomTimeLength.value = Math.floor(Math.random() * 23)
    loading.value = false
  }, 200)
}

function handleDateChange(date: DayItem) {
  selectedDate.value = date
}

function handleTimeChange(time: TimeObj) {
  selectedTime.value = time
}

function handleMonthChange(month: string) {
  selectedMonth.value = month
}

function handleNextStep() {
  console.log(2222)
  step.value = 2
}

watch(selectedMonth, () => {
  emits('update:month', selectedMonth.value)
})

watch(selectedDate, () => {
  refetchAvailableTimes()
  emits('update:date', selectedDate.value)
})

watch(selectedTime, () => {
  emits('update:time', selectedTime.value)
})
</script>

<template>
  <div class="calender-box flex">
    <div class="left-box">
      <h2>Gezichenshan YU</h2>
    </div>
    <div class="right-box">
      <h2 class="picker-title">
        请选择日期和时间
      </h2>
      <div v-if="step === 1" class="right-box-content">
        <UICalenderDatepicker @change="handleDateChange" @month-change="handleMonthChange" />
        <UICalenderTimePicker v-if="selectedDate" :available-times="availableTimes" :date="selectedDate" @change="handleTimeChange" @submit="handleNextStep" />
        <div v-if="loading" class="loading-mask absolute inset-0">
          <a-spin class="spinner" />
        </div>
      </div>
      <div v-if="step === 2" class="right-box-content step-2-wrap">
        User input
      </div>
    </div>
  </div>
</template>

<style scoped>
.calender-box {
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
  flex-direction: column;
  flex: 1 1 50%;
  /* width: 50%; */
  transition: all 0.22s ease-out;
  padding-top: 20px;
}
.picker-title {
  padding: 0 20px 0;
}
.right-box-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}
.right-box-content.step-2-wrap {
  width: 651px;
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
