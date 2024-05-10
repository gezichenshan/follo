<script setup lang="ts">

</script>

<template>
  <div class="container">
    <dashboard-side-menu></dashboard-side-menu>
    <div class="dashboard">
      <dashboard-header-menu></dashboard-header-menu>
      <div class="main">
        <h1 class="main-title">会议管理</h1>
        <div class="event-list-header">
          <div class="group-left">
            <div class="flex-wrap">
              <div class="user-thumb">
                <span class="txt-name">J</span>
              </div>
            </div>
            <div class="flex-column">
              <span>Jack</span>
              <a href="/">https://follo.top/jooyyy</a>
            </div>
          </div>
        </div>
        <div class="group-right">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
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

.main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
  width: 100%;
  min-width: 0;
  max-width: 1264px;
  margin: auto;
  padding: 0 32px;

  .main-title {
    font-size: 28px;
  }
}

.event-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-grey-3, #CCCCCC);
}

.group-left,
.group-right {
  display: flex;
  align-items: center;
}

.group-left {
  gap: 24px;
}

.user-thumb {
  width: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  .txt-name {
    font-size: 16px;
  }
}

.flex-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
