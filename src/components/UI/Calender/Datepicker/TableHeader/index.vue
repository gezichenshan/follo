<script setup lang="ts">
import dayjs from 'dayjs'
import { nextTick } from 'vue'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'

interface Props {
  date: string
}
const props = defineProps<Props>()
const emits = defineEmits(['change'])
const { date } = toRefs(props)
const _direction = ref<'left' | 'right' | undefined>()
const hideTitle = ref(false)
function handleChange(direction: 'left' | 'right') {
  emits('change', direction)
  _direction.value = direction
}

const fakeDate = computed(() => {
  if (_direction.value === 'left') {
    return dayjs(date.value).add(1, 'M').format('YYYY-MM')
  }
  if (_direction.value === 'right') {
    return dayjs(date.value).subtract(1, 'M').format('YYYY-MM')
  }
  return date.value
})

watch(date, () => {
  if (_direction.value === undefined)
    return
  // 隐藏，生成动画
  hideTitle.value = true
  nextTick(() => {
    hideTitle.value = false
  })
})
</script>

<template>
  <div class="calender-header flex justify-center items-center relative">
    <div class="arrow-btn-wrap" @click="() => handleChange('left')">
      <LeftOutlined />
    </div>
    <div v-if="!hideTitle" class="date-title fake" :class="[_direction === 'left' && 'left', _direction === 'right' && 'right']">
      {{ fakeDate }}
    </div>
    <div v-if="!hideTitle" class="date-title" :class="[_direction === 'left' && 'left', _direction === 'right' && 'right']">
      {{ date }}
    </div>
    <div class="arrow-btn-wrap" @click="() => handleChange('right')">
      <RightOutlined />
    </div>
  </div>
</template>

<style scoped>
.calender-header {
  margin: 6px 6px 15px;
}
.date-title {
  width: 125px;
  display: flex;
  justify-content: center;
  user-select: none;
}

.date-title.right {
  animation: swipeFromRightToCenter 0.35s ease-in-out normal both;
}

.date-title.left {
  animation: swipeFromLeftToCenter 0.35s ease-in-out normal both;
}

.date-title.fake {
  position: absolute;
  z-index: -1;
}

.date-title.fake.right {
  animation: swipeToLeft 0.35s ease-in-out normal both;
}

.date-title.fake.left {
  animation: swipeToRight 0.35s ease-in-out normal both;
}

.arrow-btn-wrap {
  width: 36px;
  height: 36px;
  background-color: var(--primary-color-level4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color, rgb(0, 105, 255));
  cursor: pointer;
}
.arrow-btn-wrap:hover {
  background-color: var(--primary-color-level3, rgba(0, 105, 255, 0.15));
}

@keyframes swipeFromLeftToCenter {
  0% {
    opacity: 0;
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes swipeFromRightToCenter {
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes swipeToLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-25px);
  }
}

@keyframes swipeToRight {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(25px);
  }
}
</style>
