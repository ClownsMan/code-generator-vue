<template>
  <a-menu :theme="theme" :mode="mode" :default-selected-keys="['1']">
    <a-sub-menu :key="item.name" v-for="item in menuList">
      <span slot="title"><span>{{item.name}}</span></span>
      <a-menu-item :key="list.name" v-for="list in item.children">
        <router-link :to="list.path">
          {{list.name}}
        </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: [ 'theme', 'mode' ],
  data() {
    return {
      menuList: [
        {
          name: '代码生成',
          children: [
            {
              name: 'table页',
              path: '/code/table'
            },
            {
              name: '添加页',
              path: '/code/add'
            },
          ]
        }
      ],
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.menuList
    }),
  },
  created() {
    // 处理菜单
  },
  methods: {

  }
}
</script>
