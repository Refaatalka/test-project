import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;


export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

export default cartSlice.reducer;