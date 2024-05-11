<script setup lang="ts">
import dayjs from 'dayjs'
import { h, nextTick } from 'vue'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons-vue'

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
  <div class="flex justify-center items-center relative">
    <a-button type="primary" shape="circle" :icon="h(CaretLeftOutlined)" @click="() => handleChange('left')" />
    <div v-if="!hideTitle" class="date-title fake" :class="[_direction === 'left' && 'left', _direction === 'right' && 'right']">
      {{ fakeDate }}
    </div>
    <div v-if="!hideTitle" class="date-title" :class="[_direction === 'left' && 'left', _direction === 'right' && 'right']">
      {{ date }}
    </div>
    <a-button type="primary" shape="circle" :icon="h(CaretRightOutlined)" @click="() => handleChange('right')" />
  </div>
</template>

<style scoped>
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
