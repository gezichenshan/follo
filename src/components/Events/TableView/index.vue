<script>
export default {
  name: 'TableView',
}
</script>

<template>
  <div class="day-list">
    <div class="day-list-item">
      <h2>2021-10-01，星期五</h2>
      <div class="event-list-body">
        <div class="event-list-item">
          <div class="event-basic-info">
            <div class="section row">
              <div class="basic-info-marker" />
              <div class="basic-info-time">
                09:30-10:30
              </div>
            </div>
            <div class="section column">
              <div><strong>joy</strong></div>
              <div>事件类型：一小时电话会议</div>
            </div>
            <div class="" style="flex: 1;">
              <div>状态：已确认</div>
              <div>参与人数：1</div>
            </div>
            <div>
              <a-button type="default">
                查看
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-bar">
    <p>没有更多内容</p>
  </div>
</template>

<style scoped>
.day-list-item {
  h2 {
    padding: 16px 24px;
    border-top: 1px solid var(--color-grey-3, #cccccc);
    border-bottom: 1px solid var(--color-grey-3, #cccccc);
    background-color: var(--color-bg-grey-2, #fafafa);
    font-size: 16px;
  }

  .event-list-body {
    .event-list-item {
      .event-basic-info {
        display: flex;
        flex-direction: row;
        position: relative;
        width: 100%;
        padding: 24px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.2s ease;

        .section {
          display: flex;
          flex-shrink: 0;
          box-sizing: border-box;
          width: 310px;
        }

        .section.row {
          flex-direction: row;
        }

        .section.column {
          flex-direction: column;
          justify-content: space-between;
        }

        .basic-info-marker {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgb(130, 71, 245);
          margin-right: 16px;
        }

        .basic-info-time {
          padding-right: 16px;
          font-size: 16px;
        }
      }
    }
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
