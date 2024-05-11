<script setup lang="ts">
import { nextTick } from 'vue'

import dayjs from 'dayjs'
import { getTableDateTdArr } from '@/utils/calender'
import type { DayItem } from '@/model'

const DaysTableHead = ['一', '二', '三', '四', '五', '六', '日'].map(s => `星期${s}`)

const date = ref(dayjs().format('YYYY-MM'))

const selectedDay = ref<DayItem>()

// Mock data
const availableWorkingDaysByUserSetting = [1, 2, 3, 4, 5]// 周一到周五

function judgeWorkingDayIsInUserSetting(workingDay?: number) {
  if (workingDay !== undefined && workingDay !== null) {
    return availableWorkingDaysByUserSetting.includes(workingDay)
  }
  return false
}

function generateTableData(date: string) {
  return getTableDateTdArr(date).map((week) => {
    return week.map((item) => {
      return {
        day: item.day,
        selected: selectedDay.value?.day === item.day,
        available: judgeWorkingDayIsInUserSetting(item.workingDay),
        isToday: item.isToday,
      }
    })
  })
}

const mockedTableDateArr = ref(generateTableData(date.value))

const fakeTbodyDateArr = ref([[]])

const swipeDirection = ref<'left' | 'right' >()
const hideCurrentTable = ref(true)

function handleMonChange(type: 'left' | 'right') {
  if (type === 'left') {
    const datePrevMonth = dayjs(date.value).subtract(1, 'M').format('YYYY-MM')
    date.value = datePrevMonth
    mockedTableDateArr.value = generateTableData(datePrevMonth)
    fakeTbodyDateArr.value = generateTableData(dayjs(date.value).add(1, 'M').format('YYYY-MM'))
  }
  if (type === 'right') {
    const dateNextMonth = dayjs(date.value).add(1, 'M').format('YYYY-MM')
    date.value = dateNextMonth
    mockedTableDateArr.value = generateTableData(dateNextMonth)
    fakeTbodyDateArr.value = generateTableData(dayjs(date.value).subtract(1, 'M').format('YYYY-MM'))
  }
  swipeDirection.value = type
  // 隐藏，生成动画
  hideCurrentTable.value = false
  nextTick(() => {
    hideCurrentTable.value = true
  })
}
</script>

<template>
  <div class="calender-ctn">
    <UICalenderTableHeader :date="date" @change="handleMonChange" />
    <table class="table">
      <thead>
        <tr>
          <th v-for="(s, i) in DaysTableHead" :key="i" class="table-head">
            {{ s }}
          </th>
        </tr>
      </thead>
      <UICalenderTableBody v-if="hideCurrentTable" :prev-data="fakeTbodyDateArr" :data="mockedTableDateArr" :direction="swipeDirection" />
    </table>
  </div>
</template>

<style scoped lang="css">
.calender-ctn {
  width: 412px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.table {
  position: relative;
  border-spacing: 0 8px;
  width: 100%;
}
.table-head {
  font-size: 12px;
  color: var(--text-color);
}
</style>
