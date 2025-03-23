import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Constants for authentication token storage
 */
const STORAGE_KEYS = {
  REDUX_PERSIST: 'persist:root',
};

const env = await import.meta.env;

/**
 * Creates and configures the Axios instance
 * Uses IIFE pattern to ensure single instance
 */
export const axiosClient: AxiosInstance = (() => {
  return axios.create({
    baseURL: env.VITE_SERVER_URL,
    // withCredentials: true,
    timeout: 10000, // 10 seconds
  });
})();

/**
 * Request interceptor
 * - Adds authentication token
 * - Handles request configuration
 */
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Add auth token if available
    const token = JSON.parse(localStorage.getItem(STORAGE_KEYS.REDUX_PERSIST) || '').access_token.replaceAll('"', '');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * - Handles response data transformation
 * - Manages authentication errors
 * - Standardizes error handling
 */
axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error): Promise<AxiosError> => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
        window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default axiosClient;