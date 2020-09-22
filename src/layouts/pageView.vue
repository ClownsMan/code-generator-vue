<template>
  <div class="page-view">
    <template v-if="$store.getters.multiTab">
      <keep-alive>
        <router-view />
      </keep-alive>
    </template>
    <template v-else>
      <zcBreadcrumb />
      <router-view />
    </template>

  </div>
</template>

<script>
import zcBreadcrumb from '@/components/tools/Breadcrumb';
export default {
  components: { zcBreadcrumb },
  data() {
    return {
      visible: true
    }
  },
  watch: {
    '$route': function(newData, oldData) {
      if(newData.path && newData.path === '/home') {
        this.visible = false;
      }
    }
  },
  created() {
    if(this.$route.path === '/home') {
      this.visible = false;
    }
  }
}
</script>

<style>
.page-view {
  padding: 20px;
  background: #fff;
}
</style>