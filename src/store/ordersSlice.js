import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [], 
  },
  reducers: {
    addOrder: (state, action) => {
      state.items.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        products: action.payload.products,
        total: action.payload.total,
      });
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;