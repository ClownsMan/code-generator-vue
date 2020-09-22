const app = {
  state: {
    sidebar: true,
    device: 'desktop',
    theme: 'dark',  // 主题
    layout: '', // topmenu
    contentWidth: '',
    fixedHeader: true,
    fixSiderbar: true,
    autoHideHeader: false,
    color: null,
    weak: false,
    multiTab: false,  // true - 多菜单   false - 单页面
    asyncRouter: false, // 路由是否动态加载  true - 动态加载   false - 从本地获取
    isGreet: true, // 是否登录提示
  },
  mutations: {
    SET_SIDEBAR_TYPE: (state, type) => {
      state.sidebar = type
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
  },
  actions: {
    setSidebar ({ commit }, type) {
      commit('SET_SIDEBAR_TYPE', type)
    },
  },
  getters: { }
}

export default app;