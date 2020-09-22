const getters = {
  // 用户属性
  token: state => state.user.token,
  name: state => state.user.name,
  userId: state => state.user.uuid,
  companyUuid: state => state.user.companyUuid,
  companyName: state => state.user.companyName,
  roles: state => state.user.roles,
  // menu: state => state.user.menu,
  // 项目属性
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  multiTab: state => state.app.multiTab,
  isGreet: state => state.app.isGreet,
  fixedHeader: state => state.app.fixedHeader,
  fixSiderbar: state => state.app.fixSiderbar,
  // 菜单类
  asyncRouter: state => state.app.asyncRouter,
  addRouters: state => state.permission.addRouters,
  menuList: state => state.permission.menuList,
}

export default getters