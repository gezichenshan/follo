<script setup lang="ts">
import { getAvailableDates } from '@/services/api'
import type { DateItem } from '~/model'

// import _ from 'lodash'

definePageMeta({ layout: 'booking' })
const month = ref<string>()
const date = ref<string>()
const time = ref<string>()
const route = useRoute()
const router = useRouter()

// function omitUndefineValueInAObj(obj: { [key: string]: string | undefined }) {
//   const undefinedValueKeys = Object.keys(obj).filter((key) => {
//     return obj[key] === undefined
//   })
//   return _.omit(obj, undefinedValueKeys)
// }
const apiEnabled = computed(() => {
  return !!month.value
})

const monthFirstDate = computed(() => {
  if (!month.value)
    return ''
  return getMonthStartDateOfGivenDate(month.value)
})
const monthLastDate = computed(() => {
  if (!month.value)
    return ''
  return getMonthEndDateOfGivenDate(month.value)
})

const monthInSelectedDateStartDate = computed(() => {
  if (!date.value)
    return ''
  return getMonthStartAvailableDateOfGivenDate(date.value)
})

const monthInSelectedDateEndDate = computed(() => {
  if (!date.value)
    return ''
  return getMonthEndDateOfGivenDate(date.value)
})

const { isLoading, data: serverDateRangeData } = useQuery({
  queryKey: ['dates', month],
  queryFn: () => getAvailableDates({ event_type_id: '1', range_start: monthFirstDate.value, range_end: monthLastDate.value }), // Use $fetch with your api routes to get typesafety
  enabled: apiEnabled,
})

const { data: serverDateRangeInSelectedDateMonth } = useQuery({
  queryKey: ['dates-in-selected-date-month', date],
  queryFn: () => getAvailableDates({ event_type_id: '1', range_start: monthInSelectedDateStartDate.value, range_end: monthInSelectedDateEndDate.value }), // Use $fetch with your api routes to get typesafety
  enabled: apiEnabled,
})

const calenderInitialData = {
  month: route.query.month as string,
  date: route.query.date as string,
  time: route.query.time as string,
}

watch(() => [month, date, time], () => {
  router.push({
    path: route.path,
    query: { month: month.value, date: date.value, time: time.value },
  })
}, { deep: true })

const allDates = computed<DateItem[]>(() => {
  if (!serverDateRangeData.value)
    return []
  return serverDateRangeData.value.days.map((sDate) => {
    return {
      date: sDate.date,
      spots: sDate.spots ? sDate.spots.map(sTime => ({ time: sTime.start_time.split(' ')[1], available: sTime.status === 'available', invitees_remaining: sTime.InviteesRemaining })) : [],
      available: sDate.status === 'available',
    }
  })
})
const allDatesInSelectedDateMonth = computed<DateItem[]>(() => {
  if (!serverDateRangeInSelectedDateMonth.value)
    return []
  return serverDateRangeInSelectedDateMonth.value.days.map((sDate) => {
    return {
      date: sDate.date,
      spots: sDate.spots ? sDate.spots.map(sTime => ({ time: sTime.start_time.split(' ')[1], available: sTime.status === 'available', invitees_remaining: sTime.InviteesRemaining })) : [],
      available: sDate.status === 'available',
    }
  })
})

onMounted(() => {
  const _month = route.query.month
  const _date = route.query.date
  setTimeout(() => {
    if (_month) {
      month.value = _month as string
    }
    if (_date) {
      date.value = _date as string
    }
  }, 100)
})
</script>

<template>
  <div class="booking-page">
    <UICalender v-model:date="date" v-model:time="time" v-model:month="month" :is-loading="isLoading" :all-dates-in-selected-date-month="allDatesInSelectedDateMonth" :all-dates="allDates" :initial-data="calenderInitialData" class="booking-ctn" />
    <!-- <UICalenderDatepicker @change="handleDateChange" @month-change="handleMonthChange" /> -->
  </div>
</template>

<style scoped>
.booking-page {
  display: flex;
  justify-content: center;
  margin-top: 66px;
}
@media (max-width: 650px) {
  .booking-page {
    margin-top: 10px;
  }
}
</style>
