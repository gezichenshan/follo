<script setup lang="ts">
import _ from 'lodash'

definePageMeta({ layout: 'booking' })
const month = ref<string>()
const date = ref<string>()
const time = ref<string>()
const route = useRoute()
const router = useRouter()

function omitUndefineValueInAObj(obj: { [key: string]: string | undefined }) {
  const undefinedValueKeys = Object.keys(obj).filter((key) => {
    return obj[key] === undefined
  })
  return _.omit(obj, undefinedValueKeys)
}

watch(() => [month, date, time], () => {
  router.push({
    path: route.path,
    query: omitUndefineValueInAObj({ month: month.value, date: date.value, time: time.value }),
  })
}, { deep: true })

onMounted(() => {
  const _month = route.query.month
  const _date = route.query.date
  month.value = _month as string
  date.value = _date as string
})
</script>

<template>
  <div class="booking-page">
    <UICalender v-model:date="date" v-model:time="time" v-model:month="month" />

    <!-- <UICalenderDatepicker @change="handleDateChange" @month-change="handleMonthChange" /> -->
  </div>
</template>

<style scoped>
.booking-page {
  display: flex;
  justify-content: center;
  margin-top: 66px;
}
</style>
