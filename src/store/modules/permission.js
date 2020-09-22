import { constantRouterMap, asyncRouterMap } from '@/config/router.config'
import generatorDynamicRouter from '@/router/async-router'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    menuList: [],
    originalRouter: [], // 原始数据
    applicationMap: [], // 新建审批集合
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_MENULIST: (state, menuList) => {
      state.menuList = menuList
    },
    SET_ORIGINALROUTER: (state, originalRouter) => {
      state.originalRouter = originalRouter
    },
    SET_APPLICATION: (state) => {
      let workbench = state.originalRouter.filter(item => item.href === '/workbench/myInitiate')[0].subObj;
      let application = workbench.filter(item => item.href === '/workbench/newApproval')[0].subObj;
      state.applicationMap = application;
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        generatorDynamicRouter().then(routers => {
          commit('SET_ROUTERS', routers.addRouters)
          commit('SET_MENULIST', routers.menuList)
          commit('SET_ORIGINALROUTER', routers.originalRouter)
          resolve()
        })
      })
    }
  }
}

export default permission