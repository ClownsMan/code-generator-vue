<template>
  <div class="logo">
    <router-link :to="{name:'home'}">
      <img :src="logo" alt="">
      <h1 v-if="!collapsed">{{ name }}</h1>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ZcLogo',
  props: {
    name: {
      type: String,
      default: '中晨云造价',
      required: false,
    },
    collapsed: {
      type: Boolean,
      default: false,
      required: false,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  computed: {

  },
};
</script>
<style lang="less" scoped>
.logo {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  img {
    width: 50px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    margin: 0;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>

