<script setup lang="ts">
import { nextTick } from 'vue'

import dayjs from 'dayjs'
import { getTableDateTdArr } from '@/utils/calender'
import type { DayItem } from '@/model'
import * as TimeUtil from '@/utils/time'

const emits = defineEmits(['select'])

const DaysTableHead = ['一', '二', '三', '四', '五', '六', '日'].map(s => `星期${s}`)

const date = ref(dayjs().format('YYYY-MM'))

const selectedDay = ref<DayItem>()

const tableData = ref(getTableDateTdArr(date.value))

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
    const datePrevMonth = dayjs(date.value).subtract(1, 'M').format('YYYY-MM')
    date.value = datePrevMonth
    tableData.value = getTableDateTdArr(datePrevMonth)
    fakeTableData.value = getTableDateTdArr(dayjs(date.value).add(1, 'M').format('YYYY-MM'))
  }
  if (type === 'right') {
    const dateNextMonth = dayjs(date.value).add(1, 'M').format('YYYY-MM')
    date.value = dateNextMonth
    tableData.value = getTableDateTdArr(dateNextMonth)
    fakeTableData.value = getTableDateTdArr(dayjs(date.value).subtract(1, 'M').format('YYYY-MM'))
  }
  swipeDirection.value = type
}

function handleDateSelect(data: DayItem) {
  selectedDay.value = data
}

watch(selectedDay, () => {
  console.log(1, selectedDay.value)
  emits('select', selectedDay.value)
})

watch(date, () => {
  if (swipeDirection.value === undefined)
    return
  // 隐藏，生成动画
  tableVisible.value = false
  nextTick(() => {
    tableVisible.value = true
  })
})
</script>

<template>
  <div class="calender-ctn">
    <UICalenderDatepickerTableHeader :date="date" @change="handleMonChange" />
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