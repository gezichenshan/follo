<script setup lang="ts">
import { h, nextTick } from 'vue'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons-vue'

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
// const mockedTableDateArr = computed(() => {
//   return generateTableData(date.value)
// },
// )

const fakeTbodyDateArr = ref([[]])

const swipeDirection = ref<'left' | 'right' >()
const hideCurrentTable = ref(true)

// function handleDaySelectedChange(day: DayItem) {
//   selectedDay.value = day
// }

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
    <div>
      <a-button type="primary" shape="circle" :icon="h(CaretLeftOutlined)" @click="() => handleMonChange('left')" />
      {{ date }}
      <a-button type="primary" shape="circle" :icon="h(CaretRightOutlined)" @click="() => handleMonChange('right')" />
    </div>
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
.table {
  border-spacing: 0 8px;
}
.table-head {
  font-size: 12px;
  color: var(--text-color);
}
/*
tbody.left {
  animation: swipeFromRightToCenter 0.35s ease-in-out normal both;
}

tbody.right {
  animation: swipeFromLeftToCenter 0.35s ease-in-out normal both;
}

.fake-tbody {
  position: absolute;
  top: 0;
  top: 74px;
}

.fake-tbody.left {
  right: 20%;
  animation: swipeToLeft 0.35s ease-in-out normal both;
}
.fake-tbody.right {
  left: 20%;
  animation: swipeToRight 0.35s ease-in-out normal both;
}

@keyframes swipeFromLeftToCenter {
  0% {
    transform: translateX(-115%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes swipeFromRightToCenter {
  0% {
    transform: translateX(115%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes swipeToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-115%);
  }
}

@keyframes swipeToRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(115%);
  }
} */
</style>
