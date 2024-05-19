<script setup lang="ts">
import type { TimeObj } from '@/model'

interface Props {
  data: TimeObj
}
const props = defineProps<Props>()

const emits = defineEmits(['select', 'next'])
const { data } = toRefs(props)
function handleSelect() {
  emits('select', data.value)
}
function handleNext() {
  emits('next', data.value)
}
</script>

<template>
  <div class="time-btn-wrap " @click="handleSelect">
    <button class="time-btn btn text cursor-pointer" :class="[data.selected && 'selected']">
      <div class="btn-innner ">
        <div class="time-btn-text">
          {{ data.time }}
        </div>
      </div>
    </button>
    <button v-if="data.selected" class="time-btn btn next cursor-pointer" :class="[data.selected && 'selected']" @click="handleNext">
      <div class="btn-innner ">
        <div class="time-btn-text">
          下一步
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.time-btn-wrap {
  margin: 10px;
  font-size: 16px;
  white-space: pre;
  overflow: hidden;
}
.time-btn {
  width: 100%;
  height: 52px;
  border: 1px solid var(--primary-color-level2, rgba(0, 105, 255, 0.5));
  color: var(--primary-color, rgb(0, 105, 255));
}
.time-btn:hover,
.time-btn:focus {
  border-width: 2px;
  border-color: var(--primary-color, rgb(0, 105, 255));
}
.time-btn.selected {
  width: 48.5%;
}
.btn {
  position: relative;
  vertical-align: top;
  padding: 13px 10px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 0.3s ease;
  transition-property: width, transform;
  background-color: transparent;
}
.btn::after {
  content: '';
  position: absolute;
  top: -7px;
  bottom: -7px;
  left: 0;
  width: 100%;
}

.btn-innner {
  position: relative;
  margin-right: auto;
  margin-left: auto;
}
.text.selected {
  border-color: transparent;
  background-color: rgb(0 0 0 / 60%);
  color: var(--text-color-secondary-4, rgba(255, 255, 255, 1));
}
.next {
  margin-left: 3%;
  background-color: var(--primary-color, rgb(0, 105, 255));
  color: var(--primary-text-color, #ffffff);
  box-shadow: 0 1px 6px 0 rgb(0 0 0/10%);
  transform: translateX(40px);
}
.next.selected {
  transform: translateX(0);
}
.next:hover {
  background-color: var(--text-color-secondary-3, rgba(0, 102, 230, 1));
}

.time-btn-text {
  line-height: 10px;
}
</style>
