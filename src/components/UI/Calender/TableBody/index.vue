<script setup lang="ts">
import type { DayItem } from '@/model'

interface Props {
  prevData: DayItem[][]
  data: DayItem[][]
  direction?: 'left' | 'right'
  noAnimation?: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['select'])

const { prevData, data, direction } = toRefs(props)

function chooseDate(day: DayItem) {
  emits('select', day)
}
</script>

<template>
  <tbody class="fake-tbody" :class="[direction === 'left' && 'left', direction === 'right' && 'right']">
    <tr v-for="(week, i) in prevData" :key="i">
      <td v-for="(day, j) in week" :key="j">
        <UICalenderDayButton :data="day" />
      </td>
    </tr>
  </tbody>
  <tbody class="tbody" :class="[direction === 'left' && 'left', direction === 'right' && 'right']">
    <tr v-for="(week, i) in data" :key="i">
      <td v-for="(day, j) in week" :key="j">
        <UICalenderDayButton :data="day" @select="() => chooseDate(day)" />
      </td>
    </tr>
  </tbody>
</template>

<style scoped>
tbody.right {
  animation: swipeFromRightToCenter 0.35s ease-in-out normal both;
}

tbody.left {
  animation: swipeFromLeftToCenter 0.35s ease-in-out normal both;
}

.fake-tbody {
  width: 100%;
  position: absolute;
  top: 0;
  top: 36px;
}

.fake-tbody tr {
  display: flex;
  margin: 8px 0;
  justify-content: space-around;
}

.fake-tbody.right,
.fake-tbody.left {
  /* right: 20%; */
}

.fake-tbody.right {
  animation: swipeToLeft 0.35s ease-in-out normal both;
}

.fake-tbody.left {
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
}
</style>
