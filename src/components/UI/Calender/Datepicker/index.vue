<script setup lang="ts">
import { nextTick } from 'vue'

import dayjs from 'dayjs'
import { getTableDateTdArr } from '@/utils/calender'
import type { DayItem } from '@/model'
import * as TimeUtil from '@/utils/time'

const emits = defineEmits(['change', 'monthChange'])

const DaysTableHead = ['一', '二', '三', '四', '五', '六', '日'].map(s => `星期${s}`)

const dateMonth = ref(dayjs().format('YYYY-MM'))

const selectedDay = ref<DayItem>()

const tableData = ref(getTableDateTdArr(dateMonth.value))

/**
 * TODO 这个方法应该由外部传进来，进行判断那一天是用户可选的
 * 此处为模拟方法。
 * @param date
 */
function isDateAvailableJudger(date: string) {
  const availableWorkingDaysByUserSetting = [1, 2, 3, 4, 5]// 周一到周五
  const workingDay = TimeUtil.getWorkingDayOfGivenDate(date)
  if (workingDay !== undefined && workingDay !== null) {
    return availableWorkingDaysByUserSetting.includes(workingDay)
  }
  return false
}

const mockedTableData = computed<DayItem[][]>(() => {
  return tableData.value.map((week) => {
    return week.map((item) => {
      return {
        date: item.date,
        selected: selectedDay.value?.date === item.date,
        available: isDateAvailableJudger(item.date),
        isToday: item.isToday,
      }
    })
  })
})

const fakeTableData = ref<DayItem[][]>([[]])

const swipeDirection = ref<'left' | 'right' >()
const tableVisible = ref(true)

function handleMonChange(type: 'left' | 'right') {
  if (type === 'left') {
    const datePrevMonth = dayjs(dateMonth.value).subtract(1, 'M').format('YYYY-MM')
    dateMonth.value = datePrevMonth
    tableData.value = getTableDateTdArr(datePrevMonth)
    fakeTableData.value = getTableDateTdArr(dayjs(dateMonth.value).add(1, 'M').format('YYYY-MM'))
  }
  if (type === 'right') {
    const dateNextMonth = dayjs(dateMonth.value).add(1, 'M').format('YYYY-MM')
    dateMonth.value = dateNextMonth
    tableData.value = getTableDateTdArr(dateNextMonth)
    fakeTableData.value = getTableDateTdArr(dayjs(dateMonth.value).subtract(1, 'M').format('YYYY-MM'))
  }
  swipeDirection.value = type
}

function handleDateSelect(data: DayItem) {
  selectedDay.value = data
}
watch(dateMonth, () => {
  emits('monthChange', dateMonth.value)
}, { immediate: true })

watch(dateMonth, () => {
  if (swipeDirection.value === undefined)
    return
  // 隐藏，生成动画
  tableVisible.value = false
  nextTick(() => {
    tableVisible.value = true
  })
})
watch(selectedDay, () => {
  emits('change', selectedDay.value)
})
</script>

<template>
  <div class="calender-ctn">
    <UICalenderDatepickerTableHeader :date="dateMonth" @change="handleMonChange" />
    <table class="table">
      <thead>
        <tr>
          <th v-for="(s, i) in DaysTableHead" :key="i" class="table-head">
            {{ s }}
          </th>
        </tr>
      </thead>
      <UICalenderDatepickerTableBody v-if="tableVisible" :prev-data="fakeTableData" :data="mockedTableData" :direction="swipeDirection" @select="handleDateSelect" />
    </table>
  </div>
</template>

<style scoped lang="css">
.calender-ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0 10px;
}
.table {
  position: relative;
  border-spacing: 14px;
}
.table-head {
  font-size: 12px;
  color: var(--text-color);
}
</style>
