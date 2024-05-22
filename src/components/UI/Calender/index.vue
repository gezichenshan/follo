<script setup lang="ts">
import { h } from 'vue'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
import type { DateItem, TimeObj } from '@/model'

interface Props {
  allDates: DateItem[]
  allDatesInSelectedDateMonth: DateItem[]// 选中日期该月的dates数据
  isLoading: boolean
  month?: string
  date?: string
  time?: string
  initialData?: {
    month: string
    date: string
    time: string
  }
}
const props = defineProps<Props>()
const emits = defineEmits(['update:month', 'update:date', 'update:time'])

const { allDates: propDates, allDatesInSelectedDateMonth: propsDatesInSelectedDateMonth, isLoading, initialData } = toRefs(props)

const selectedMonth = ref<string>()
const selectedDate = ref<DateItem>()
const selectedTime = ref<TimeObj>()
const step = ref(1)

const availableTimes = computed(() => {
  const match = propsDatesInSelectedDateMonth.value.find(_pdate => _pdate.date === selectedDate.value?.date)
  return match?.spots || []
})

function handleDateChange(date: DateItem) {
  selectedDate.value = date
}

function handleTimeChange(time: TimeObj) {
  selectedTime.value = time
}

function handleMonthChange(month: string) {
  selectedMonth.value = month
}

function handleNextStep() {
  step.value = 2
}

function clearDate() {
  selectedDate.value = undefined
}

function clearTime() {
  selectedTime.value = undefined
}

function backToSmallDeviceDateSelectStep() {
  clearTime()
  clearDate()
}

function backToStepBeforeUserInfo() {
  clearTime()
  toStep1()
}
function toStep1() {
  step.value = 1
}

watch(selectedMonth, () => {
  emits('update:month', selectedMonth.value)
})

watch(selectedDate, () => {
  emits('update:date', selectedDate.value?.date)
})

watch(selectedTime, () => {
  emits('update:time', selectedTime.value?.time)
})

const calenderInitialData = {
  month: initialData.value?.month,
  date: initialData.value?.date,
}
</script>

<template>
  <div
    class="booking-ctn calender-box dark:bg-black" :class="[!selectedDate && 'only-with-datepicker']"
  >
    <div class="left-box">
      <!-- 为返回到填写User Info的前一步准备的btn -->
      <a-button v-if="step === 2" type="primary" shape="circle" :icon="h(ArrowLeftOutlined)" @click="backToStepBeforeUserInfo" />
      <!-- 为小屏幕上返回到选择时间的前一步准备的btn -->
      <a-button v-if="step !== 2" type="primary" shape="circle" :icon="h(ArrowLeftOutlined)" class="small-device-back-btn" :class="[!selectedDate && 'only-with-datepicker']" @click="backToSmallDeviceDateSelectStep" />
      <h2>Gezichenshan YU</h2>
    </div>
    <div class="right-box" :class="selectedDate && 'large'">
      <h2 class="picker-title">
        {{ step === 2 ? '请填写基本信息' : '请选择日期和时间' }}
      </h2>
      <div v-if="step === 1" class="right-box-content" :class="[!selectedDate && 'only-with-datepicker']">
        <UICalenderDatepicker
          :dates="propDates"
          :initial-data="calenderInitialData" class="datepicker-outter-wrap" :class="[!selectedDate && 'only-with-datepicker']" @change="handleDateChange"
          @month-change="handleMonthChange"
        />
        <UICalenderTimePicker v-if="selectedDate" :is-loading="isLoading" :span="24" :lg="12" class="timepicker-outter-wrap" :available-times="availableTimes" :date="selectedDate" @change="handleTimeChange" @submit="handleNextStep" />
        <div v-if="isLoading" class="loading-mask absolute inset-0">
          <a-spin class="spinner" />
        </div>
      </div>
      <div v-if="step === 2" class="right-box-content step-2-wrap">
        <FormUserInfo />
      </div>
    </div>
  </div>
</template>

<style scoped>
.booking-ctn {
  width: 95%;
  transition: all 0.22s ease-out;
}
.booking-ctn {
  max-width: 1060px;
}
.booking-ctn.only-with-datepicker {
  max-width: 800px;
}
.booking-ctn.only-with-datepicker .left-box,
.right-box {
  width: 50%;
}
.calender-box {
  display: flex;
  border: 1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1));
  border-radius: 8px;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
  max-width: 1060px;
}
.left-box {
  min-width: 300px;
  border-right: 1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1));
  transition: all 0.22s ease-out;
}
.right-box {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  transition: all 0.22s ease-out;
  max-height: 550px;
  padding: 20px;
}
.picker-title {
  padding: 0 0 20px;
}
.right-box-content {
  display: flex;
  overflow: hidden;
}

.right-box-content.only-with-datepicker {
  max-width: 400px;
  margin: 0 auto;
}
.right-box-content.step-2-wrap {
  /* width: 651px; */
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

.datepicker-outter-wrap {
  width: 60%;
}
.datepicker-outter-wrap.only-with-datepicker {
  width: 100%;
}
.timepicker-outter-wrap {
  width: 40%;
}

.small-device-back-btn {
  display: none;
}

@media (min-width: 1000px) {
  .booking-ctn {
    min-width: 900px;
    max-width: 1060px;
  }
}

@media (max-width: 1000px) {
  .booking-ctn,
  .booking-ctn.only-with-datepicker {
    max-width: 680px;
  }

  .booking-ctn.only-with-datepicker .left-box,
  .right-box {
    width: 100%;
  }
  .calender-box {
    flex-direction: column;
  }
}

@media (max-width: 650px) {
  .right-box {
    min-height: 600px;
  }
  .right-box-content {
    flex-direction: column;
  }
  .datepicker-outter-wrap {
    display: none;
  }
  .datepicker-outter-wrap.only-with-datepicker {
    display: block;
  }
  .small-device-back-btn.only-with-datepicker {
    display: none;
  }
  .small-device-back-btn {
    display: block;
  }
  .timepicker-outter-wrap {
    width: 100%;
    overflow: auto;
  }
}
</style>
