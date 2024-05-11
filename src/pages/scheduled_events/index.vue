<script setup lang="ts">
const activeKey = ref('1')
</script>

<template>
  <div class="main">
    <h1 class="main-title">
      会议管理
    </h1>
    <div>
      <div />
      <div>
        <p style="color: rgba(26, 26, 26, 0.61);">
          2/2 事件
        </p>
      </div>
    </div>
    <div class="main-body">
      <div class="filter-list">
        <div class="filter-list-tabs">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="近期安排" />
            <a-tab-pane key="2" tab="待确认" force-render />
            <a-tab-pane key="3" tab="过期" />
          </a-tabs>
        </div>
        <div class="filter-list-actions">
          <a-button type="default">
            <ExportOutlined />
            <span>导出</span>
          </a-button>
        </div>
      </div>
      <events-table-view v-if="activeKey === '1'" />
      <events-pending-table-view v-if="activeKey === '2'" />
      <events-table-view v-if="activeKey === '3'" />
    </div>
  </div>
</template>

<style scoped>
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

  .main-body {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-grey-3, #cccccc);
    border-radius: 6px;
    background-color: var(--color-bg-white-l-1, rgba(255, 255, 255, 1));
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 5%);

    .filter-list {
      display: flex;
      align-items: center;

      .filter-list-tabs {
        position: relative;
        flex-grow: 2;
        padding: 16px 24px 0;
      }

      .filter-list-actions {
        padding-right: 24px;
      }
    }
  }
}
</style>
