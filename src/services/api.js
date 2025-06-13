import axios from 'axios'
import { getAccessToken } from './auth'

const API_BASE_URL = 'https://backend-capstone-project.up.railway.app/api'

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

export const getRegistered = async ({ full_name, email, password }) => {
  try {
    const response = await api.post('/auth/register', { full_name, email, password })
    return response.data
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}

// Tambahkan fungsi-fungsi berikut ke api.js
export const getMe = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    console.error('Get profile error:', error);
    throw error;
  }
};

export const updateProfile = async (profileData) => {
  try {
    const response = await api.put('/auth/update-profile', profileData);
    return response.data;
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const response = await api.put('/auth/update-password', passwordData);
    return response.data;
  } catch (error) {
    console.error('Change password error:', error);
    throw error;
  }
};

// Tambahkan fungsi berikut:

export const predictNutrition = async (data) => {
  try {
    const response = await api.post('/predictions', data);
    return response.data;
  } catch (error) {
    console.error('Prediction error:', error);
    throw error;
  }
};

// Tambahkan fungsi berikut ke services/api.js
export const createBaby = async (babyData) => {
  try {
    const response = await api.post('/auth/babies', babyData);
    return response.data;
  } catch (error) {
    console.error('Error creating baby:', error);
    throw error;
  }
};
export const getBabies = async () => {
  try {
    const response = await api.get('/babies');
    return response.data;
  } catch (error) {
    console.error('Get babies error:', error);
    throw error;
  }
};

export const createMeasurement = async (measurementData) => {
  try {
    const response = await api.post('/auth/measurements', measurementData);
    return response.data;
  } catch (error) {
    console.error('Error creating measurement:', error);
    throw error;
  }
};

export const getMeasurements = async () => {
  try {
    const response = await api.get('/auth/measurements');
    return response.data;
  } catch (error) {
    console.error('Error getting measurements:', error);
    throw error;
  }
};

// export const saveMeasurement = async (data) => {
//   try {
//     const response = await api.post('/auth/measurements', data);
//     return response.data;
//   } catch (error) {
//     console.error('Error saving measurement:', error);
//     throw error;
//   }
// };

