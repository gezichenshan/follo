<script setup lang="ts">
definePageMeta({ layout: 'booking' })
</script>

<template>
  <div class="booking-ctn">
    <UICalender />
  </div>
</template>

<style scoped>
.booking-ctn {
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 66px;
  margin-bottom: 30px;
}
</style>
