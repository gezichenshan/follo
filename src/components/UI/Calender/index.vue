<script setup lang="ts">
import type { DayItem } from '@/model'

function handleDateSelect(date: DayItem) {
  console.log(3333, date)
}
</script>

<template>
  <div>
    <UICalenderDatepicker @select="handleDateSelect" />
    <UICalenderTimePicker />
  </div>
</template>

<style scoped>

</style>
