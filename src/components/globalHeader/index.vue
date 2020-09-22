<template>
  <transition name="showHeader">
    <a-layout-header style="background: #fff; padding: 0;">
      <div class="nav-header" v-if="isTop">
        <zc-logo
          class="nav-header-logo"
          :collapsed="collapsed"
          :name="name"
          :logo="logo"
        />
        <zc-menu
          class="nav-header-menu"
          v-if="device !== 'mobile'"
          :theme="theme"
          :mode="mode"
        ></zc-menu>
        <a-icon v-else class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle"/>
        <userMenu class="user-info" />
      </div>
      <div class="header" v-else>
        <a-icon v-if="device==='mobile'" class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle"/>
        <a-icon v-else class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
        <userMenu class="user-info" />
      </div>
    </a-layout-header>
  </transition>
</template>

<script>
import userMenu from '@/components/tools/userMenu';
import zcLogo from '@/components/tools/Logo';
import zcMenu from '@/components/menu';
import projectConfig from '@/config/project.config.js';
import { mixin } from '@/utils/mixin'
// import { mapState } from 'vuex'
export default {
  components: { zcMenu, userMenu, zcLogo },
  props: [ 'collapsed', 'isTop', 'theme' ],
  mixins: [mixin],
  data() {
    return {
      mode: 'horizontal',
      name: projectConfig.name,
      logo: projectConfig.logo,
    }
  },
  computed: {
    // ...mapState({
    //   // name: state => state.user.name,
    //   info: state => state.user.info,
    // }),
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="less" scoped>
.showHeader-enter-active {
  transition: all 0.25s ease;
}
.showHeader-leave-active {
  transition: all 0.5s ease;
}
.showHeader-enter, .showHeader-leave-to {
  opacity: 0;
}
.user-info {
    position: absolute;
    right: 0;
    top: 0;
    &.icons-list {
      display: inline-block;
      margin-right: 10px;
      .icon-size {
        display: inline-block;
        padding: 0 12px;
        vertical-align: middle;
        color: rgba(0, 0, 0, 0.65);
        i {
          font-size: 16px;
          .ant-scroll-number {
            &.ant-badge-dot {
              right: 2px;
              top: -1px;
            }
          }
        }
        .avatar-wrapper {
          width: 24px;
          height: 24px;
          display: inline-block;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .ant-dropdown-link {
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          font-weight: 500;
          &:focus {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
