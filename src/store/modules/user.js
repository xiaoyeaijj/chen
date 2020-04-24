import { login } from '@/api/login'
import { getToken, setToken, setUserId, removeToken } from '@/utils/auth'

const user = {
  state: {
    isLogin: false,
    token: '',
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          console.log(response.data.user.id)
          const tokenStr = '123'
          setToken(tokenStr)
          setUserId(response.data.user.id)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    setLogin ({ commit }, isLogin) {
      commit('SET_LOGIN', isLogin)
    }
  }
}

export default user
