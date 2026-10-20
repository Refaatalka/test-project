import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import todoReducer from './todoSlice';
import ordersReducer from './ordersSlice'; 

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    cart: cartReducer,
    todos: todoReducer,
    orders: ordersReducer,
  },
});

export default store;