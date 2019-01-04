import Cookies from 'js-cookie'
const TokenKey = 'loginToken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken() {
  return Cookies.set(TokenKey)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
