<script setup lang="ts">
import { CalendarOutlined, FieldTimeOutlined, LinkOutlined, UserOutlined } from '@ant-design/icons-vue'

const folding = ref(false)
const smallScreen = ref(false)

onMounted(() => {
  window.onresize = () => {
    if (document.body.clientWidth < 1100) {
      smallScreen.value = true
      folding.value = true
    } else {
      folding.value = false
      smallScreen.value = false
    }
  }
})

function toggleSideMenu() {
  if (document.body.clientWidth < 1100) {
    smallScreen.value = true
  } else {
    smallScreen.value = false
  }
  folding.value = !folding.value
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
  <div class="navigation-container" :class="[folding ? 'small' : '', smallScreen ? 'small' : '']">
    <div v-if="!folding && smallScreen" class="mask" @click="toggleSideMenu()" />
    <nav class="nav" :class="[folding ? 'small' : '']">
      <div class="section-logo">
        <div class="logo-container">
          <div class="logo-wrap">
            <a aria-label="Home" class="logo-wrap-link" :class="[folding ? 'small' : '']" href="/">
              <img src="@/../public/logo.svg" aria-hidden="true" class="img-logo">
              <img v-if="!folding" src="@/../public/logo-txt.svg" alt="Calendly" class="img-logo-txt">
            </a>
          </div>
        </div>
        <a-button class="btn-menu-folder" type="ghost" @click="toggleSideMenu()">
          <CaretLeftOutlined />
        </a-button>
        <a-button v-if="folding" type="ghost" class="btn-menu-folder btn-menu-open" @click="toggleSideMenu()">
          <CaretRightOutlined />
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
            <span v-if="!folding" class="txt-menu-item">{{ menu.title }}</span>
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

  transition: width var(--transition-duration) var(--transition-timing-function);
  --transition-duration: 300ms;
  --delayed-transition-duration: 400ms;
  --transition-timing-function: cubic-bezier(0, 0, 0, 1);
}

.navigation-container.small {
  width: 65px;
}

@keyframes maskFadeIn {
  0% {
    opacity: 0;
  }

  33% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background: rgb(26 26 26 / 70%);
  animation: maskFadeIn 0.4s;
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
}

.nav.small {
  width: 65px;
}

.section-logo {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;

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

.logo-wrap-link.small {
  width: 32px;
  margin-right: 0;
}

.btn-menu-folder {
  position: relative;
  display: flex;
  align-self: center;
  justify-self: flex-end;
  width: 20px;
  height: 20px;
  font-size: 20px;
  border-radius: 1px;
  padding: 0;
  border: none;
}

.btn-menu-open {
  background-color: #ffffff;
  position: absolute;
  top: 24px;
  left: 54px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
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

    .txt-menu-item {
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .menu-row.selected {
    background: var(--color-beachy-blue, #f2f8ff);
    color: #0060e6;
  }
}
</style>
