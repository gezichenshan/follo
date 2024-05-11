<script setup lang="ts">

</script>

<template>
  <div class="main">
    <h1 class="main-title">
      会议管理
    </h1>

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
      <div class="group-right">
        <a-button type="ghost" class="btn-new-event">
          新增分类
        </a-button>
        <a-button type="ghost">
          <SettingOutlined />
        </a-button>
      </div>
    </div>

    <div class="event-type-card-list">
      <div class="event-type-item">
        <div class="item-color-bar" />
        <a-button type="ghost" class="btn-edit">
          <SettingOutlined />
          <CaretDownOutlined style="width: 10px;margin-left: 4px;" />
        </a-button>
        <div class="item-body">
          <h2>xxxxxx</h2>
          <p>30 分钟，1 对 1</p>
          <a href="https://follo.top/jooyyy" target="_blank" style="padding-top: 8px;">页面</a>
        </div>
        <div class="item-footer">
          <div class="">
            <a-button type="ghost">
              <CopyOutlined /><span>复制链接</span>
            </a-button>
          </div>
          <div class="share-wrapper">
            <a-button type="default" class="btn-share">
              分享
            </a-button>
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

.event-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  border-bottom: 1px solid var(--color-grey-3, #cccccc);
  box-sizing: initial;
  padding: 20px 0 8px 0;
  background: white;
  box-shadow: none;
}

.group-left,
.group-right {
  display: flex;
  align-items: center;
}

.group-left {
  gap: 24px;
}

.group-right {
  gap: 8px;

  .btn-new-event {
    padding: 0 24px;
    border-radius: 40px;
    border-color: var(--primary-color, rgb(0, 105, 255));
    color: var(--primary-color, rgb(0, 105, 255));
    min-height: 32px;
  }

  .btn-new-event:hover {
    background-color: var(--primary-color-level4, rgba(0, 105, 255, 0.05));
    color: var(--text-color-secondary-3, rgba(0, 102, 230, 1));
  }
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

.event-type-card-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min((100% / 2) - 24px, max(280px, calc(100% - 48px) / 3)), 1fr)
  );
  gap: 24px;
  padding: 10px 0 25px;
}

.event-type-item {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  border: 1px solid #cccccc;

  .item-color-bar {
    background-color: rgb(130, 71, 245);

    height: 6px;
    margin-top: -1px;
    margin-right: -1px;
    margin-left: -1px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .btn-edit {
    position: absolute;
    top: 5px;
    right: 8px;
    padding: 0px;
  }

  .btn-edit:hover {
    background-color: var(--color-grey-4, #f2f2f2);
  }

  .item-body {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 16px 20px;
    text-align: left;
  }

  .item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1));
    padding: 12px 0;

    a-button {
      padding: 0 16px;
      border-radius: 40px;
      border-color: var(--primary-color, rgb(0, 105, 255));
      color: var(--primary-color, rgb(0, 105, 255));
      min-height: 32px;
    }

    a-button:hover {
      background-color: var(--primary-color-level4, rgba(0, 105, 255, 0.05));
      color: var(--text-color-secondary-3, rgba(0, 102, 230, 1));
    }

    .share-wrapper {
      padding: 0 16px;
    }

    .btn-share {
      padding: 0 16px;
      border-radius: 40px;
      border-color: var(--primary-color, rgb(0, 105, 255));
      color: var(--primary-color, rgb(0, 105, 255));
      min-height: 32px;
    }

    .btn-share:hover {
      background-color: var(--primary-color-level4, rgba(0, 105, 255, 0.05));
      color: var(--text-color-secondary-3, rgba(0, 102, 230, 1));
    }
  }
}
</style>
