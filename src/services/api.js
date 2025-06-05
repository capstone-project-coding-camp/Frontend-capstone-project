import axios from 'axios'
import { getAccessToken } from './auth'

const API_BASE_URL = 'http://localhost:5000/api'

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
    const response = await api.post('/auth/login', { email, password });
    
    // The backend returns data directly (response.data is the actual response)
    if (!response.data.success) {
      throw new Error(response.data.message || 'Login failed');
    }
    
    return response.data;
  } catch (error) {
    // Enhanced error handling
    const errorMessage = error.response?.data?.message || 
                        error.message || 
                        'Login failed';
    console.error('Login error details:', {
      error,
      response: error.response?.data,
    });
    throw new Error(errorMessage);
  }
};

export const getRegistered = async ({ name, email, password }) => {
  try {
    const response = await api.post('/auth/register', { name, email, password })
    return response.data
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}

// Add other API calls as needed