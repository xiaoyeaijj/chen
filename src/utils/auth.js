import Cookies from 'js-cookie'

const TokenKey = 'loginToken'
const UserKey = 'userId'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
export function getUserId () {
  return Cookies.get(UserKey)
}

export function setUserId (userId) {
  return Cookies.set(UserKey, userId)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
