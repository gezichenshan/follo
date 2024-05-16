<script setup lang="ts">
import { CalendarOutlined, FieldTimeOutlined, LinkOutlined, UserOutlined } from '@ant-design/icons-vue'

function toggleSideMenu() {
  const navigationContainer = document.querySelector('.navigation-container')
  if (navigationContainer) {
    navigationContainer.classList.toggle('large')
  }
}

const menus = [
  {
    title: '待处理事项',
    icon: CalendarOutlined,
    path: '/scheduled_events',
  },
  {
    title: '编辑工作时间',
    icon: FieldTimeOutlined,
    path: '/working_time',
  },
  {
    title: '个人主页',
    icon: UserOutlined,
    path: '/space',
  },
  {
    title: '会议管理',
    icon: LinkOutlined,
    path: '/event_types',
  },
]

const route = useRoute()
</script>

<template>
  <div class="navigation-container">
    <nav class="nav large">
      <div class="section-logo">
        <div class="logo-container">
          <div class="logo-wrap">
            <a aria-label="Home" class="logo-wrap-link" href="/">
              <img src="@/../public/logo.svg" aria-hidden="true" class="img-logo">
              <img src="@/../public/logo-txt.svg" alt="Calendly" class="img-logo-txt">
            </a>
          </div>
        </div>
        <a-button class="btn-menu-folder" type="text" @click="toggleSideMenu">
          <span class=""><svg
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.70726 4.70711C8.09778 4.31658 8.09778 3.68342 7.70726 3.29289C7.31673 2.90237 6.68357 2.90237 6.29304
    3.29289L1.58594 8L6.29304 12.7071C6.68357 13.0976 7.31673 13.0976 7.70726 12.7071C8.09778 12.3166 8.09778 11.6834
    7.70726 11.2929L4.41436 8L7.70726 4.70711Z" fill="currentColor"
            />
            <path
              d="M13.7073 4.70711C14.0978 4.31658 14.0978 3.68342 13.7073 3.29289C13.3167 2.90237 12.6836 2.90237 12.293
    3.29289L7.58594 8L12.293 12.7071C12.6836 13.0976 13.3167 13.0976 13.7073 12.7071C14.0978 12.3166 14.0978 11.6834
    13.7073 11.2929L10.4144 8L13.7073 4.70711Z" fill="currentColor"
            />
          </svg></span>
        </a-button>
      </div>
      <div class="section-btn-create">
        <div class="container">
          <a-button class="btn-create">
            <span class="txt-create">新建</span>
          </a-button>
        </div>
      </div>
      <div class="section-menu">
        <template v-for="menu in menus" :key="menu.path">
          <nuxt-link class="menu-row" :class="[{ selected: route.path === menu.path }]" :to="menu.path">
            <component :is="menu.icon" />
            <span class="txt-menu-item">{{ menu.title }}</span>
          </nuxt-link>
        </template>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navigation-container {
  width: 260px;
  height: 100%;
}

.nav {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #e8e8e8;
  width: 260px;
  min-height: 100vh;
  z-index: 100;
  transition: width 0.3s;
  overflow: hidden;
}

.nav.large {
  width: 260px;
}

.section-logo {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .img-logo {
    width: 28px;
    height: 28px;
  }
}

.logo-wrap-link {
  display: flex;
  width: 132px;
  height: 32px;
  margin-right: 20px;
  border-radius: 1px;
  -webkit-user-select: none;
  user-select: none;
  align-items: flex-start;

  .img-logo-txt {
    align-self: flex-end;
    margin-left: 8px;
  }
}

.btn-menu-folder {
  position: relative;
  display: flex;
  align-self: center;
  justify-self: flex-end;
  width: 16px;
  height: 16px;
  border-radius: 1px;
  padding: 0;
  border: none;
}

.btn-menu-folder:hover {
  background: #dbf1ff;
  box-shadow: 0 0 0 4px #dbf1ff;
}

.section-btn-create {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .container {
    position: relative;
    width: 100%;

    .btn-create {
      font-size: 16px;
      width: 100%;
      border-color: var(--primary-color, rgb(0, 105, 255));
      background-color: var(--primary-color, rgb(0, 105, 255));
      color: var(--text-color-secondary-4, rgba(255, 255, 255, 1));
      font-weight: 700;
      line-height: 22px;

      position: relative;
      display: inline-flex;
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      min-height: 44px;
      padding: 8px 16px;
      border: 1px solid transparent;
      border-radius: 40px;
      font-size: 14px;
      line-height: 20px;

      .txt-create {
        margin-left: 4px;
      }
    }

    .btn-create:hover {
      border-color: var(--primary-color-darker-10, rgba(0, 95, 230, 1));
      background-color: var(--primary-color-darker-10, rgba(0, 95, 230, 1));
    }
  }
}

.section-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 8px;
  box-sizing: inherit;

  .menu-row {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 44px;
    padding: 2px 8px 2px 16px;
    border-radius: 8px;
    color: var(--text-color, rgb(26, 26, 26));
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    box-sizing: inherit;
  }

  .menu-row.selected {
    background: var(--color-beachy-blue, #f2f8ff);
    color: #0060e6;
  }
}
</style>
