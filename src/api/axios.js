// src/api/axios.js
import axios from 'axios';
import { API_URL } from '../config/api';

const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  withCredentials: true
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await api.post('/auth/refresh');

        // Get the auth context
        const auth = document.querySelector('#root')?.__AUTH_CONTEXT__;
        if (auth?.setToken) {
          auth.setToken(response.data.access_token);
        }

        originalRequest.headers['Authorization'] =
          `Bearer ${response.data.access_token}`;

        return api(originalRequest);
      } catch (refreshError) {
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;