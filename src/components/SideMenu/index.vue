<template>
  <a-layout-sider
    width="220"
    :class="mode"
    v-model="collapsed"
    :trigger="null"
    collapsible
  >
    <zc-logo
      :class="fixSiderbar ? 'fixSiderbar' : ''"
      :collapsed="collapsed"
      :name="name"
      :logo="logo"
    />
    <zc-menu
      :theme="theme"
      :mode="mode"
    ></zc-menu>
  </a-layout-sider>
</template>
<script>
import { mapState } from 'vuex';
import projectConfig from '@/config/project.config.js';
import zcMenu from '@/components/menu';
import zcLogo from '@/components/tools/Logo';
export default {
  components: { zcMenu, zcLogo },
  props: [ 'collapsed', 'theme', 'mode' ],
  data() {
    return {
      name: projectConfig.name,
      logo: projectConfig.logo,
      // mode: 'inline' // vertical horizontal inline
    }
  },
  computed: {
    ...mapState({
      fixSiderbar: state => state.app.fixSiderbar
    })
  }
};
</script>
<style lang="less" scoped>

</style>
