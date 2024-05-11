<script>
export default {
  name: 'DefaultLayout',
  // Add your component options here
}
</script>

<template>
  <div class="layout-container">
    <dashboard-side-menu />
    <div class="dashboard">
      <dashboard-header-menu />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

.dashboard {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
