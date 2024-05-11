<script setup>
const activeKey = ref('1')
</script>

<template>
  <div class="main">
    <h1 class="main-title">
      工作时间管理
    </h1>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="时刻表" />
      <a-tab-pane key="2" tab="假期" />
    </a-tabs>
    <div class="main-body">
      <div class="subtitle-container">
        <h2 class="subtitle">
          时刻表
        </h2>
        <div class="card-group">
          <div class="card-item schedule-item  active">
            <AimOutlined style="margin-right: 8px;" />
            <span>工作时间</span>
          </div>
          <div class="card-item schedule-item">
            <span>未被选中的</span>
          </div>
          <div class="card-item" style="margin-left: 20px;">
            <a-button type="ghost" class="btn-add">
              <PlusOutlined />
              <span class="txt-add">添加</span>
            </a-button>
          </div>
        </div>
      </div>
      <div v-if="activeKey === '1'" class="schedule-container">
        <div class="operate-container">
          <div class="operate-group">
            <div class="operate-item">
              <p>运用于</p>
              <a-button type="link" class="btn-operate">
                <span>1个事件类型</span>
                <CaretDownOutlined class="arrow-down" />
              </a-button>
            </div>
            <div class="operate-item">
              <p>时区</p>
              <a-button type="link" class="btn-operate">
                <span>Chinae, Singapore +08:00</span>
                <CaretDownOutlined class="arrow-down" />
              </a-button>
            </div>
          </div>
          <a-button type="ghost" class="btn-edit">
            <SettingOutlined />
          </a-button>
        </div>
        <div class="edit-container">
          <div class="edit-list-view-container">
            <div class="card-weekly">
              <h3>每周工作时间</h3>
              <div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周一</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="false" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="true" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周二</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="false" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="true" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周三</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="false" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="true" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周四</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="false" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="true" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周五</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="false" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="true" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周六</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="true" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="false" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
                <div class="row-week-day">
                  <a-checkbox v-model:checked="checked" class="checkbox">
                    <strong>周日</strong>
                  </a-checkbox>
                  <div class="time-range-group">
                    <div v-if="true" class="unavailable-wrap">
                      <p class="txt-unavailable">
                        Unavailable
                      </p>
                    </div>
                    <div v-if="false" class="time-container">
                      <a-input class="time-input" />
                      <span class="split">-</span>
                      <a-input class="time-input" />
                      <a-button type="link" class="btn">
                        <CloseOutlined />
                      </a-button>
                    </div>
                  </div>
                  <div class="right-group">
                    <a-button type="link" class="btn">
                      <PlusOutlined />
                    </a-button>
                    <a-button type="link" class="btn">
                      <CopyOutlined />
                    </a-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-special">
              <h3>特定日期和时间</h3>
              <p class="txt-desc">
                如果有需要特殊安排的时间段，在这里添加之后，会从日常工作时间中移除。
              </p>
              <a-button type="default" class="btn-add">
                <PlusOutlined />
                <span>添加特定日期和时间</span>
              </a-button>
              <div class="special-date-ul">
                <div class="special-date-li">
                  <div class="txt-date">
                    2024-05-23
                  </div>
                  <div class="txt-time">
                    09:00 - 17:00
                  </div>
                  <a-button type="link" class="btn">
                    <DeleteOutlined />
                  </a-button>
                </div>
                <div class="special-date-li">
                  <div class="txt-date">
                    2024-05-23
                  </div>
                  <div class="txt-time">
                    09:00 - 17:00
                  </div>
                  <a-button type="link" class="btn">
                    <DeleteOutlined />
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
}

.main-body {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .subtitle-container {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 20px;
      text-transform: none;
      margin-bottom: 16px;
    }

    .card-group {
      display: flex;
      flex-direction: row;
      gap: 8px;

      .card-item {
        display: block;
        overflow: hidden;
        max-width: 210px;
        padding: 7px 12px;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;

        .btn-add:hover {
          background-color: #f2f2f2;

          .txt-add {
            text-decoration: underline;
          }
        }
      }

      .schedule-item {
        align-self: center;
        border: solid 1px var(--color-grey-3, #cccccc);
        border-radius: 8px;
        background-color: var(--color-bg-white-l-1, rgba(255, 255, 255, 1));
        color: var(--text-color-level2, rgba(26, 26, 26, 0.61));
      }

      .schedule-item.active {
        border: solid 1px var(--primary-color, rgb(0, 105, 255));
        background-color: var(--color-beachy-blue, #f2f8ff);
        color: var(--text-color-secondary-3, rgba(0, 102, 230, 1));

        font-weight: 700;
      }
    }
  }

  .schedule-container {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    margin: 0;
    margin-bottom: 100px;
    padding: 0;
    border: 1px solid var(--color-grey-3, #cccccc);
    background-color: var(--color-bg-white-l-1, rgba(255, 255, 255, 1));
    box-shadow: 0 1px 5px rgb(0 74 116 / 15%);

    .operate-container {
      display: flex;
      justify-content: space-between;
      padding: 16px 24px;

      .operate-group {
        display: flex;
        flex-direction: row;
        gap: 40px;

        .operate-item {
          display: flex;
          flex-direction: column;
          gap: 10px;

          p {
            font-size: 16px;
            font-weight: 700;
            margin: 0;
            line-height: 1.4;
          }

          .btn-operate {
            display: flex;
            align-items: center;
            font-size: 14px;
            border-radius: 4px;
            padding: 0;
          }

          .arrow-down {
            display: flex;
            font-size: 14px;
            border-radius: 4px;
            padding: 0;
          }
        }
      }
    }

    .edit-container {
      border-top: 1px solid var(--color-grey-3, #cccccc);

      .edit-list-view-container {
        display: flex;
        min-height: 100px;

        .card-weekly,
        .card-special {
          width: 50%;
          padding: 24px;
          border-right: 1px solid var(--color-grey-3, #cccccc);

          h3 {
            font-size: 20px;
          }
        }

        .card-weekly {
          .row-week-day {
            padding-top: 20px;
            display: flex;
            align-content: center;

            .checkbox {
              width: 88px;
              align-self: center;
            }

            .right-group {
              display: flex;
              flex: 1;
            }
          }
        }

        .card-special {
          padding: 24px 24px 0;
          border-right: none;
          display: flex;
          flex-direction: column;

          .txt-desc {
            font-size: 14px;
            font-weight: 400;
            margin: 10px 0 20px;
            line-height: 1.4;
            color: #999;
          }

          .btn-add {
            margin-bottom: 20px;
          }

          .special-date-ul {
            flex: 1 1 0;
            overflow-y: auto;

            .special-date-li {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

              .txt-date {
              }
            }
          }
        }
      }
    }
  }
}

.arrow-down {
  align-self: center;
}

.btn-edit {
  margin-right: -20px;
}

.btn {
  width: 48px;
  height: 48px;
  color: #333333;
}

.btn:hover,
.btn-edit:hover {
  color: #666666;
  background-color: var(--color-grey-4, #f2f2f2);
}

.time-range-group {
  display: flex;
  flex-grow: 10;
  gap: 10px;

  .unavailable-wrap {
    display: flex;
    align-items: center;
    min-height: 46px;

    .txt-unavailable {
      font-size: 14px;
      color: var(--color-grey-4, #666666);
    }
  }

  .time-container {
    display: flex;
    align-items: center;
    gap: 10px;

    .time-input {
      width: 94px;
      min-height: 46px;
    }

    .split {
      width: 10px;
      text-align: center;
      font-size: 10px;
    }
  }
}
</style>
