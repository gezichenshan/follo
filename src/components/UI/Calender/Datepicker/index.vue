<script setup lang="ts">
import { nextTick } from 'vue'

import dayjs from 'dayjs'
import { getTableDateTdArr } from '@/utils/calender'
import type { DateItem } from '@/model'

interface Props {
  dates?: DateItem[]
  initialData: {
    month?: string
    date?: string
  }
}
const props = defineProps<Props>()
const emits = defineEmits(['change', 'monthChange'])

const { initialData, dates: propDates } = toRefs(props)

const DaysTableHead = ['一', '二', '三', '四', '五', '六', '日'].map(s => `星期${s}`)

const dateMonth = ref(dayjs().format('YYYY-MM'))

const selectedDate = ref<DateItem>()

function isDateAvailableJudger(date: string) {
  if (!propDates.value)
    return
  return propDates.value.find(item => item.date === date)?.available
}

const swipeDirection = ref<'left' | 'right' >()
const tableVisible = ref(true)

const tableData = computed(() => {
  return getTableDateTdArr(dateMonth.value)
})

const mockedTableData = computed<DateItem[][]>(() => {
  return tableData.value.map((week) => {
    return week.map((item) => {
      return {
        date: item.date,
        selected: selectedDate.value?.date === item.date,
        available: isDateAvailableJudger(item.date),
        isToday: item.isToday,
      }
    })
  })
})

const fakeTableData = computed<DateItem[][]>(() => {
  if (!swipeDirection.value)
    return []
  if (swipeDirection.value === 'left') {
    return getTableDateTdArr(dayjs(dateMonth.value).add(1, 'M').format('YYYY-MM'))
  }
  return getTableDateTdArr(dayjs(dateMonth.value).subtract(1, 'M').format('YYYY-MM'))
})

function handleMonChange(type: 'left' | 'right') {
  swipeDirection.value = type
  if (type === 'left') {
    const datePrevMonth = dayjs(dateMonth.value).subtract(1, 'M').format('YYYY-MM')
    dateMonth.value = datePrevMonth
  }
  if (type === 'right') {
    const dateNextMonth = dayjs(dateMonth.value).add(1, 'M').format('YYYY-MM')
    dateMonth.value = dateNextMonth
  }
}

function handleDateSelect(data: DateItem) {
  selectedDate.value = data
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

/**
 * 根据initialData设置时间
 */

onMounted(() => {
  if (!initialData.value)
    return
  const { month, date } = initialData.value
  if (month) {
    // sele
    dateMonth.value = month
  } else {
    dateMonth.value = dayjs().format('YYYY-MM')
  }
  if (date) {
    selectedDate.value = {
      date,
      selected: true,
      available: true,
      isToday: false,
    }
  }
})

watch(selectedDate, () => {
  emits('change', selectedDate.value)
})
</script>

<template>
  <div class="datepicker-ctn">
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
.datepicker-ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.table {
  width: 100%;
  position: relative;
  border-spacing: 14px;
  table-layout: fixed;
  border-collapse: separate;
}
.table-head {
  font-size: 12px;
  user-select: none;
}

@media (max-width: 650px) {
  .table {
    border-spacing: 4px;
  }
}
</style>
