import Vue from 'vue'
import { login, getMenu, getInfo, logout } from '@/api/user'

const user = {
  state: {
    token: '',
    name: '',  // 登陆人名字
    uuid: '', // 登录人uuid
    avatar: '', // 登陆人头像
    roles: [],  // 登陆人角色
    departments: [],  // 登陆人部门
    companyUuid: '',  // 登陆人公司uuid
    supper: null,
    info: {},
    menu: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UUID: (state, uuid) => {
      state.uuid = uuid
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_DEPARTMENTS: (state, departments) => {
      state.departments = departments
    },
    SET_COMPANYUUID: (state, companyUuid) => {
      state.companyUuid = companyUuid
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
    },
    SET_SUPPER: (state, supper) => {
      state.supper = supper
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          localStorage.setItem('token', res.data.remark);
          commit('SET_TOKEN', res.data.remark)
          // commit('SET_UUID', res.data.uuid)
          // 暂时从这获取
          // commit('SET_ROLES', res.data.organizationRole)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    GET_INFO({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          const { companyName, post, supper } = res.data;
          let info = {
            ...res.data.userInfo,
            companyName,
            post,
            supper,
          }
          commit('SET_UUID', res.data.uuid)
          commit('SET_NAME', res.data.name)
          commit('SET_AVATAR', res.data.headInfo)
          commit('SET_ROLES', res.data.organizationRole)
          commit('SET_DEPARTMENTS', res.data.departmentInfoList)
          commit('SET_COMPANYUUID', res.data.companyUuid)
          commit('SET_INFO', info)
          commit('SET_SUPPER', res.data.supper)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    GET_MENU({ commit }) {
      return new Promise((resolve, reject) => {
        getMenu().then(res => {
          commit('SET_MENU', res.data)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    LOGOUT({ commit }) {
      return new Promise((resolve, reject) => {
        // logout().then(res => {
          localStorage.clear();
          commit('SET_TOKEN', null)
          commit('SET_ROLES', [])
          resolve()
        // }).catch(err => {
        //   reject(err)
        // })
      })
    }
  }
}

export default user;