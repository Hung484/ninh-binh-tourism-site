import axios from 'axios';

// Đối với demo, sử dụng mock API. Trong thực tế, chúng ta sẽ sử dụng URL thực của backend.
const BASE_URL = 'https://mockapi.example.com/api/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to handle JWT token for admin requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token && config.url?.startsWith('/admin')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor to handle API responses
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // You can centralize error handling here
    return Promise.reject(error);
  }
);

export default apiClient;