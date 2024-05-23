<script setup lang="ts">
import type { DateItem } from '@/model'
import * as TimeUtil from '@/utils/time'

interface Props {
  data: DateItem
}
const props = defineProps<Props>()
const emits = defineEmits(['select'])

const { data } = toRefs(props)

function handleClick(date: DateItem) {
  if (!date.available) {
    return
  }
  emits('select', date)
}
</script>

<template>
  <button class="date-btn" :class="[data.available && 'enabled', data.selected && 'selected']" @click="() => handleClick(props.data)">
    {{ TimeUtil.getDayFromDate(data.date) }}
    <span v-if="data.isToday" class="addon-today">今</span>
  </button>
</template>

<style scoped lang="css">
.date-btn {
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
  background-color: var(--primary-bg-color);
  user-select: none;
}
.date-btn.enabled {
  color: var(--primary-color);
  background-color: var(--primary-color-level4);
  font-weight: 700;
}
.date-btn.enabled:not(.selected):hover {
  background-color: var(--primary-color-level3);
  cursor: pointer;
}
.date-btn.selected {
  color: var(--primary-color-level3);
  background-color: var(--primary-color);
  cursor: default;
}

.addon-today {
  position: absolute;
  font-size: 10px;
  bottom: 0;
}
</style>
