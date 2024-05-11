<script>
export default {
  name: 'PendingTableView',
  data() {
    return {
      // Your data properties here
    }
  },
  mounted() {
    // Code to run when the component is mounted
  },
  methods: {
    // Your methods here
  },
}
</script>

<template>
  <div>
    <div class="header">
      <div class="header-event-name">
        事件名称
      </div>
      <div>创建时间</div>
    </div>
    <div class="pending-list-body">
      <div class="pending-list-item">
        <div class="item-event-name">
          <div class="name">
            <strong>xxxxx</strong>
          </div>
          <p>2021-10-01 09:30</p>
        </div>
        <div class="item-event-create-time">
          <div style="align-self: center;">
            <p style="font-size: 16px;">
              2021-09-30 09:30
            </p>
            <p style="font-size: 12px;">
              链接已过期
            </p>
          </div>
        </div>
        <div>
          <a-button type="default">
            查看
          </a-button>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <p>没有更多内容</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  padding: 16px 24px;
  border-top: 1px solid var(--color-grey-3, #cccccc);
  border-bottom: 1px solid var(--color-grey-3, #cccccc);
  background-color: var(--color-bg-grey-2, #fafafa);
  text-transform: uppercase;

  .header-event-name {
    width: 310px;
  }
}

.pending-list-body {
  .pending-list-item {
    display: flex;
    padding: 16px 24px;
    border-bottom: 1px solid var(--color-grey-3, #cccccc);

    .item-event-name {
      display: flex;
      flex-direction: column;
      width: 310px;

      .name {
        font-size: 18px;
      }

      p {
        font-size: 12px;
      }
    }

    .item-event-create-time {
      display: flex;
      flex: 1;

      p {
        font-size: 16px;
      }
    }
  }

  .pending-list-item:last-child {
    border-bottom: none;
  }
}

.bottom-bar {
  text-align: center;
  padding: 16px 24px;
  border-top: 1px solid var(--color-grey-3, #cccccc);

  p {
    color: var(--text-color-level2, rgba(26, 26, 26, 0.61));
  }
}
</style>
