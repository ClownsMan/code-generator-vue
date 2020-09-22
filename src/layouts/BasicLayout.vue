<template>
  <a-layout class="layout">
    <!-- 移动端的菜单 -->
    <a-drawer
      width="220"
      v-if="isMobile()"
      placement="left"
      :wrapClassName="`drawer-sider ${navTheme}`"
      :closable="false"
      :visible="collapsed"
      @close="drawerClose"
    >
      <siderMenu
        mode="inline"
        :theme="navTheme"
        :collapsed="!collapsed"
      />
    </a-drawer>
    <!-- pc端的菜单 -->
    <siderMenu
      v-else-if="isSideMenu()"
      mode="inline"
      :theme="navTheme"
      :collapsed="collapsed"
    />
    <!-- 基础页面加载 -->
    <a-layout class="layoutMode">
      <!-- 头部 -->
      <globalHeader
        :class="{ 'fixedHeader' : fixedHeader, 'collapsed' : collapsed, 'mobile' : isMobile() }"
        :isTop="isTopMenu()"
        :theme="navTheme"
        :collapsed="collapsed"
        @changCollapsed="changCollapsed"
        @toggle="toggle"
      />
      <!-- 页面 -->
      <a-layout-content
        :class="fixedHeader? 'fixedHeader' : ''"
      >
        <multi-tab v-if="multiTab"></multi-tab>
        <transition name="page-transition">
          <route-view />
        </transition>
      </a-layout-content>
      <!-- 底部 -->
      <globalFooter />
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import siderMenu from '@/components/SideMenu';
import globalHeader from '@/components/globalHeader';
import globalFooter from '@/components/globalFooter';
import multiTab from '@/components/multiTab';
import routeView from './routeView';
import { mixin, mixinDevice } from '@/utils/mixin';
import { triggerWindowResizeEvent } from '@/utils/utils';
export default {
  mixins: [ mixin, mixinDevice ],
  components: { siderMenu, globalHeader, globalFooter, multiTab, routeView },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    ...mapActions(['setSidebar']),
    changCollapsed() {
      this.collapsed = !this.collapsed;
    },
    drawerClose () {
      this.collapsed = false
    },
    toggle () {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
  }
}
</script>

<style>
.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>