import axios from 'axios';
import Cookies from 'js-cookie';
import environment from '../environment';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://your-api.com/api', // غيّر الرابط هنا
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// إضافة التوكن تلقائياً لكل طلب
api.interceptors.request.use((config) => {
  const token = Cookies.get(environment.TOKEN_KEY) || localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// معالجة الأخطاء العامة
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // التوكن منتهي أو غير صالح
      Cookies.remove(environment.TOKEN_KEY);
      localStorage.removeItem('token');
      // window.location.href = '/login'; // فعّلها لو حابب تحول المستخدم تلقائياً
    }
    return Promise.reject(error);
  }
);

export default api;