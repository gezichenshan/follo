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

const datesInSelectedDateMonthApiEnabled = computed(() => {
  return !!date.value
})
const { data: serverDateRangeInSelectedDateMonth } = useQuery({
  queryKey: ['dates-in-selected-date-month', date],
  queryFn: () => getAvailableDates({ event_type_id: '1', range_start: monthInSelectedDateStartDate.value, range_end: monthInSelectedDateEndDate.value }), // Use $fetch with your api routes to get typesafety
  enabled: datesInSelectedDateMonthApiEnabled,
})

function back() {
  router.go(-1)
}

const calenderInitialData = {
  month: route.query.month as string,
  date: route.query.date as string,
  time: route.query.time as string,
}

watch(() => [month, date, time], () => {
  router.replace({
    path: route.path,
    query: { month: month.value, date: date.value, time: time.value },
  })
}, { deep: true })

const allDates = computed<DateItem[]>(() => {
  if (!serverDateRangeData.value)
    return []
  return serverDateRangeData.value.days?.map((sDate) => {
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
  return serverDateRangeInSelectedDateMonth.value.days?.map((sDate) => {
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
  <a-layout>
    <div class="booking-page">
      <div class="back-btn" @click="back">
        <ArrowLeftOutlined />
      </div>
      <UICalender v-model:date="date" v-model:time="time" v-model:month="month" :is-loading="isLoading" :all-dates-in-selected-date-month="allDatesInSelectedDateMonth" :all-dates="allDates" :initial-data="calenderInitialData" class="booking-ctn" />
    </div>
  </a-layout>
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
.back-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary-color-level4);
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
.back-btn:hover {
  background-color: var(--primary-color-level3);
}
@media (max-width: 650px) {
  .booking-page {
    margin-top: 10px;
  }
}
</style>
