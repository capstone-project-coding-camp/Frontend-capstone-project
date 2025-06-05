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

export async function logout() {
  try {
    // Opsional: Kirim request logout ke backend
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      }
    });

    // Pastikan token dihapus di client side apapun hasilnya
    removeAccessToken();
    
    // Redirect ke halaman login
    window.location.href = '/login';
    
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    removeAccessToken();
    window.location.href = '/login';
    return false;
  }
}