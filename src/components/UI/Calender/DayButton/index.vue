<script setup lang="ts">
import type { DayItem } from '@/model'
import * as TimeUtil from '@/utils/time'

interface Props {
  data: DayItem
}
const props = defineProps<Props>()
const emits = defineEmits(['select'])

const { data } = toRefs(props)

function handleClick(day: DayItem) {
  if (!day.available) {
    return
  }
  emits('select', day)
}
</script>

<template>
  <button class="day-btn" :class="[data.available && 'enabled', data.selected && 'selected']" @click="() => handleClick(props.data)">
    {{ TimeUtil.getDayFromDate(data.date) }}
    <span v-if="data.isToday" class="addon-today">今</span>
  </button>
</template>

<style scoped lang="css">
.day-btn {
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  margin-right: auto;
  margin-left: auto;
  padding: 1px 0 0;
  border: 1px solid transparent;
  border-radius: 50%;
  color: var(--text-color-level2, rgba(26, 26, 26, 0.61));
  font-size: 16px;
  text-align: center;
  background-color: #fff;
}
.day-btn.enabled {
  color: #0060e6;
  background-color: var(--primary-color-level4);
  font-weight: 700;
}
.day-btn.enabled:not(.selected):hover {
  background-color: var(--primary-color-level3);
  cursor: pointer;
}
.day-btn.selected {
  color: #fff;
  background-color: var(--primary-color);
  cursor: default;
}

.addon-today {
  position: absolute;
  font-size: 10px;
  bottom: 0;
}
</style>
