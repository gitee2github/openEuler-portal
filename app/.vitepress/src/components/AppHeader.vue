<script setup lang="ts">
import { computed, onMounted, ref, onUnmounted, watch, nextTick } from 'vue';
import { useRouter, useData } from 'vitepress';
import { useCommon } from '@/stores/common';
import { useI18n } from '@/i18n';
import { getPop } from '@/api/api-search';
import { showGuard, logout, useStoreData, getUserAuth } from '../shared/login';
import navFilterConfig from '@/data/common/nav-filter';

import HeaderNav from './HeaderNav.vue';
import AppTheme from './AppTheme.vue';
import AppLanguage from './AppLanguage.vue';
import HeaderSearch from './HeaderSearch.vue';

import logo_light from '@/assets/common/header/logo.svg';
import logo_dark from '@/assets/common/header/logo_dark.svg';

import IconSearch from '~icons/app/icon-search.svg';
import IconCancel from '~icons/app/icon-cancel.svg';
import IconMenu from '~icons/app/icon-menu.svg';
import IconLogin from '~icons/app/icon-login.svg';

interface NavItem {
  NAME: string;
  PATH: string;
  ID: string;
  CHILDREN: NavItem;
  IS_OPEN_WINDOW?: number;
  IS_OPEN_MINISITE_WINDOW?: string;
}

const { token } = getUserAuth();
const { guardAuthClient } = useStoreData();

const router = useRouter();
const { lang, theme } = useData();
const i18n = useI18n();
const commonStore = useCommon();
const documentElement = document.documentElement;

// 导航数据
const navRouter = computed(() => i18n.value.common.NAV_ROUTER_CONFIG);

const activeNav = ref<string>();
const logo = computed(() =>
  commonStore.theme === 'light' ? logo_light : logo_dark
);
const roterPath = ref<string>(router.route.path);

// 移动菜单事件
const mobileMenuIcon = ref(false);
const mobileChildMenu = ref<NavItem | any>([]);

const mobileMenuPanel = () => {
  mobileChildMenu.value = [];
  toBody.value = true;
  setTimeout(() => {
    mobileMenuIcon.value = !mobileMenuIcon.value;
    documentElement.classList.toggle('overflow');
    activeNav.value = '';
    handleDefaultSelectedMobile();
  }, 200);
};

const handleMenuLayer = (e: any) => {
  if (e.target.className !== 'mobile-menu-side') {
    if (mobileChildMenu.value.length === 0) {
      mobileMenuIcon.value = false;
      documentElement.classList.remove('overflow');
    }
  }
};

// 移动端一级导航事件
const goFirstNavMobile = (item: NavItem) => {
  mobileChildMenu.value = [];
  if (Object.prototype.hasOwnProperty.call(item, 'CHILDREN')) {
    mobileChildMenu.value = item.CHILDREN;
  } else {
    mobileMenuIcon.value = false;
    router.go('/' + lang.value + item.PATH);
    documentElement.classList.remove('overflow');
  }
  activeNav.value = item.ID;
};

// 移动端二级导航事件
const goSubNavMobile = (item: NavItem) => {
  if (item.IS_OPEN_WINDOW) {
    window.open(theme.value.docsUrl + item.PATH);
    return;
  }
  if (item.IS_OPEN_MINISITE_WINDOW) {
    window.open(item.PATH);
    return;
  }

  if (item.PATH) {
    setTimeout(() => {
      mobileMenuIcon.value = false;
      documentElement.classList.remove('overflow');
    }, 200);
    nextTick(() => {
      router.go('/' + lang.value + item.PATH);
    });
  }
};

const langShow = ref([] as any);
watch(
  () => router.route.path,
  (val: string) => {
    roterPath.value = val;
    // 语言过滤
    for (let i = 0; i < navFilterConfig.length; i++) {
      if (val.includes(navFilterConfig[i].name)) {
        langShow.value = navFilterConfig[i].lang;
        break;
      }
      if (val === `/${lang.value}/`) {
        langShow.value = ['zh', 'en', 'ru'];
        break;
      }
    }
  },
  { immediate: true }
);
// 移动端默认选中、二级菜单
const handleDefaultSelectedMobile = () => {
  navRouter.value.forEach((item: any) => {
    item.CLASS.forEach((el: any) => {
      if (roterPath.value.includes(el)) {
        mobileChildMenu.value = item.CHILDREN;
        activeNav.value = item.ID;
      }
    });
  });
};

const toBody = ref(false);
onMounted(() => {
  toBody.value = true;
  handleDefaultSelectedMobile();
});
onUnmounted(() => {
  toBody.value = false;
});

// 返回首页
const goHome = () => {
  toBody.value = false;
  mobileMenuIcon.value = false;
  documentElement.classList.remove('overflow');
  router.go(`/${lang.value}/`);
};

const searchValue = computed(() => i18n.value.common.SEARCH);
// 显示/移除搜索框
const isShowBox = ref(false);
const showSearchBox = () => {
  commonStore.iconMenuShow = false;
  isShowBox.value = true;
};

// 搜索抽屉
const popList = ref<string[]>([]);
const isShowDrawer = ref(true);
const showDrawer = () => {
  // isShowDrawer.value = true;
  //热搜
  const params = `lang=${lang.value}`;
  getPop(params).then((res) => {
    if (popList.value.length === 0) {
      res.obj.forEach((item: string) => {
        popList.value.push(item);
      });
    }
  });
};
// 关闭搜索框
const closeSearchBox = () => {
  isShowBox.value = false;
  searchInput.value = '';
  popList.value = [];
  commonStore.iconMenuShow = true;
};
// 搜索内容
const searchInput = ref<string>('');
const jumpToUserZone = () => {
  const language = lang.value === 'zh' ? 'zh' : 'en';
  const origin = import.meta.env.VITE_LOGIN_ORIGIN;
  window.open(`${origin}/${language}/profile`, '_black');
};
// 搜索组件跳转链接
const searchLink = `/${lang.value}/other/search/`;
</script>

<template>
  <header class="app-header">
    <div class="app-header-body">
      <!-- 移动端菜单图标 -->
      <div class="mobile-menu-icon">
        <OIcon v-if="!mobileMenuIcon" class="icon" @click="mobileMenuPanel">
          <IconMenu />
        </OIcon>
        <OIcon v-else class="icon" @click="mobileMenuPanel"
          ><IconCancel
        /></OIcon>
      </div>
      <img class="logo" alt="openEuler logo" :src="logo" @click="goHome" />
      <ClientOnly>
        <HeaderSearch
          v-if="isShowBox"
          :placeholder="searchValue.PLEACHOLDER"
          :pop-list="popList"
          :link="searchLink"
          :is-show-drawer="isShowDrawer"
          @click-close="closeSearchBox"
          @focus-input="showDrawer"
        />
      </ClientOnly>
      <!-- 移动端搜索按钮 -->
      <div v-if="!isShowBox" class="mobile-search">
        <OIcon class="icon" @click="showSearchBox"><IconSearch /></OIcon>
      </div>
      <ClientOnly>
        <div v-show="!isShowBox" class="header-content">
          <div class="header-nav">
            <HeaderNav :nav-items="navRouter" />
          </div>
          <div class="header-tool">
            <div class="header-tool-search">
              <OIcon class="icon" @click="showSearchBox"><IconSearch /></OIcon>
            </div>
            <!-- 中英文切换 -->
            <AppLanguage :show="langShow" />
            <AppTheme />
          </div>
        </div>
      </ClientOnly>

      <!-- 移动端菜单   :class="{ active: mobileMenuIcon, cookie: isShowTip }"   -->
      <div
        v-if="toBody"
        class="mobile-menu"
        :class="{ active: mobileMenuIcon }"
        @click="handleMenuLayer($event)"
      >
        <div class="mobile-menu-side">
          <div class="mobile-nav">
            <div
              v-for="item in navRouter"
              :key="item.ID"
              class="link"
              :class="{
                active: activeNav === item.ID,
              }"
              @click.stop="goFirstNavMobile(item)"
            >
              {{ item.NAME }}
            </div>
          </div>
          <div class="mobile-tools">
            <AppTheme />
            <AppLanguage
              :show="langShow"
              @language-click="mobileMenuIcon = false"
            />
          </div>
        </div>
        <transition name="menu-sub">
          <div v-if="mobileChildMenu.length > 0" class="mobile-menu-content">
            <div class="mobile-menu-list">
              <div
                v-for="item in mobileChildMenu"
                :key="item.ID"
                class="link"
                @click="goSubNavMobile(item)"
              >
                {{ item.NAME }}
              </div>
            </div>
          </div>
        </transition>
      </div>
      <ClientOnly>
        <div v-if="lang !== 'ru'" class="opt-user">
          <div v-if="token">
            <div class="el-dropdown-link opt-info">
              <img
                v-if="guardAuthClient.photo"
                :src="guardAuthClient.photo"
                class="user-img"
              />
              <div v-else class="user-img"></div>
              <p class="opt-name">{{ guardAuthClient.username }}</p>
            </div>
            <ul class="menu-list">
              <li @click="jumpToUserZone()">{{ i18n.common.USER_CENTER }}</li>
              <li @click="logout()">{{ i18n.common.LOGOUT }}</li>
            </ul>
          </div>
          <div v-else class="login" @click="showGuard()">
            <OIcon class="icon">
              <IconLogin />
            </OIcon>
          </div>
        </div>
      </ClientOnly>
    </div>
  </header>
</template>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  background-color: var(--o-color-bg-secondary) !important;
  box-shadow: none !important;
}
:deep(.el-input__suffix) {
  font-size: var(--o-font-size-h7);
}
:deep(.el-input__clear) {
  font-size: var(--o-font-size-h7);
}
:deep(.el-icon-circle-inner) {
  font-size: var(--o-font-size-h1);
}
.app-header {
  background-color: var(--o-color-bg2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  box-shadow: var(--o-shadow-l1);
  &-body {
    display: flex;
    align-items: center;
    max-width: 1504px;
    padding: 0 44px;
    margin: 0 auto;
    height: 80px;
    @media (max-width: 1439px) {
      padding: 0 24px;
    }
    @media (max-width: 1100px) {
      padding: 0 16px;
      height: 48px;
      justify-content: space-between;
      position: relative;
    }
  }
}
.logo {
  height: 32px;
  cursor: pointer;
  margin-right: var(--o-spacing-h4);
  @media (max-width: 1100px) {
    height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 12px;
    margin-right: 0;
  }
}
.mobile-menu-icon {
  display: none;
  margin-right: var(--o-spacing-h5);
  @media (max-width: 1100px) {
    flex: 1;
    display: block;
  }
  .icon {
    font-size: var(--o-font-size-h6);
    color: var(--o-color-text1);
    cursor: pointer;
  }
}
.mobile-search {
  font-size: var(--o-font-size-h6);
  display: none;
  color: var(--o-color-text1);
  @media (max-width: 1100px) {
    display: block;
  }
}
.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  .header-nav {
    height: 100%;
    display: flex;
    flex: 1;
  }

  .header-tool {
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto;
    align-items: center;
    height: 100%;
    .lang {
      color: var(--o-color-text1);
      letter-spacing: 0.08em;
      font-size: 16px;
    }
    &-search {
      cursor: pointer;
    }
    &-theme {
      cursor: pointer;
    }
  }
  .icon {
    font-size: 22px;
    color: var(--o-color-text1);
  }
}

.mobile-menu {
  width: 100%;
  position: fixed;
  left: 0;
  // transition: all 0.3s linear;
  overflow: hidden;
  display: flex;
  opacity: 0;
  visibility: hidden;
  border-top: 1px solid var(--o-color-division);
  background: rgba(0, 0, 0, 0.4);
  top: 48px;
  height: calc(100% - 48px);
  z-index: 999;
  @media screen and (min-width: 1100px) {
    display: none;
  }

  &.active {
    opacity: 1;
    z-index: 1101;
    display: flex;
    visibility: visible;
    @media screen and (min-width: 1100px) {
      opacity: 0;
    }

    .mobile-menu-side {
      left: 0;
      opacity: 1;
      z-index: 9;
    }
  }
  &.cookie {
    height: calc(100% - 108px);
    top: 108px;
  }
  &-side {
    left: -100%;
    background: var(--o-color-bg1);
    display: inline-flex;
    height: 100%;
    flex-direction: column;
    color: var(--o-color-text1);
    min-width: 164px;
    opacity: 0;
    position: relative;
    transition: all 0.3s linear;
    overflow-y: auto;
    justify-content: space-between;
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #f1f1f1;
    }
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #afbfe8;
    }

    .mobile-nav {
      .link {
        display: block;
        font-size: var(--o-font-size-tip);
        line-height: var(--o-line-height-h3);
        color: var(--o-color-text1);
        padding: 0 var(--o-spacing-h5);
        position: relative;
        cursor: pointer;
        &::after {
          width: 0;
          height: 2px;
          background: transparent;
          content: '';
          position: absolute;
          left: 16px;
          display: block;
          transition: all 0.3s;
          bottom: 0;
        }
        &.active {
          background: var(--o-color-bg2);
          color: var(--o-color-brand1);
          &::after {
            width: 24px;
            background: var(--o-color-brand1);
          }
        }
      }
    }
    .mobile-tools {
      padding: 0 var(--o-spacing-h5);
      margin-bottom: 24px;
    }
  }
  &-content {
    flex: 1;
    background: var(--o-color-bg2);
    position: relative;

    left: 0;
    opacity: 1;
    z-index: 8;
    .mobile-menu-list {
      display: grid;
      padding: 0 16px;

      .link {
        line-height: var(--o-line-height-h3);
        font-size: var(--o-font-size-tip);
        font-weight: normal;
        color: var(--o-color-text4);
        cursor: pointer;
        &:last-child {
          border-bottom: 1px solid var(--o-color-division1);
        }
      }
    }
    &.active {
      left: 0;
      opacity: 1;
      z-index: 8;
    }
  }
}

// transition 动画
.menu-sub-enter-active,
.menu-sub-leave-active {
  transition: 0.5s linear;
  left: -100%;
}
.menu-sub-leave-active {
  transition: 0.3s linear;
}
.menu-sub-enter,
.menu-sub-leave-to {
  opacity: 0;
}
.menu-sub-enter-to {
  opacity: 1;
  left: 0%;
}
.menu-sub-leave {
  opacity: 1;
  left: -100%;
}
.opt-user {
  margin-left: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .opt-info {
    display: flex;
    align-items: center;
    .user-img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      vertical-align: middle;
      @media (max-width: 1100px) {
        width: 28px;
        height: 28px;
      }
    }
    .opt-name {
      color: var(--o-color-text1);
      margin-left: 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 72px;
      line-height: var(--o-line-height-h8);
      @media (max-width: 1100px) {
        display: none;
      }
    }
  }
  &:hover {
    .menu-list {
      display: block;
    }
  }
  .menu-list {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    @media (max-width: 1100px) {
      top: 48px;
      left: -60px;
    }
    background: var(--o-color-bg2);
    cursor: pointer;
    z-index: 999;
    box-shadow: var(--o-shadow-l1);
    min-width: 78px;
    li {
      line-height: var(--o-line-height-h3);
      text-align: center;
      font-size: var(--o-font-size-text);
      color: var(--o-color-text1);
      border-bottom: 1px solid var(--o-color-division1);
      padding: 0 var(--o-spacing-h5);
      white-space: nowrap;
      &:last-child {
        border-bottom: 0 none;
      }

      &:hover {
        background: var(--o-color-brand1);
        color: var(--o-color-text2);
      }
      &.active {
        color: var(--o-color-brand1);
        background: none;
        cursor: default;
      }
    }
  }
}
.login {
  .icon {
    font-size: var(--o-font-size-h6);
    color: var(--o-color-text1);
    cursor: pointer;
  }
}
</style>
