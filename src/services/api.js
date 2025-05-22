import axios from 'axios'
import { getAccessToken } from './auth'

const API_BASE_URL = 'https://your-api-endpoint.com/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getLogin = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password })
    return response.data
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

export const getRegistered = async ({ name, email, password }) => {
  try {
    const response = await api.post('/register', { name, email, password })
    return response.data
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}

// Add other API calls as needed