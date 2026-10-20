import api from './api';
import productsArray from '../data/products'; // البيانات المحلية كـ fallback

/**
 * جلب كل المنتجات
 */
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.warn('فشل جلب المنتجات من الـ API، سيتم استخدام البيانات المحلية', error);
    // لو فشل الـ API نرجع البيانات المحلية
    return productsArray;
  }
};

/**
 * جلب منتج واحد حسب الـ ID
 */
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.warn(`فشل جلب المنتج ${id} من الـ API، سيتم البحث محلياً`, error);
    // fallback محلي
    const product = productsArray.find((item) => item.id === Number(id));
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
};

/**
 * إضافة منتج جديد (لو عندك صلاحيات Admin)
 */
export const createProduct = async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
};

/**
 * تعديل منتج
 */
export const updateProduct = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data;
};

/**
 * حذف منتج
 */
export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};