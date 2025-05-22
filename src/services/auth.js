export const ACCESS_TOKEN_KEY = 'accessToken'

export function getAccessToken() {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
    return accessToken === 'null' || accessToken === 'undefined' ? null : accessToken
  } catch (error) {
    console.error('getAccessToken: error:', error)
    return null
  }
}

export function putAccessToken(token) {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
    return true
  } catch (error) {
    console.error('putAccessToken: error:', error)
    return false
  }
}

export function removeAccessToken() {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    return true
  } catch (error) {
    console.error('removeAccessToken: error:', error)
    return false
  }
}

export function checkAuth() {
  return !!getAccessToken()
}

export function logout() {
  removeAccessToken()
  window.location.href = '/login'
}