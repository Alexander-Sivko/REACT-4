import { createSlice } from '@reduxjs/toolkit';

function getInitialOrders() {
  const orders = localStorage.getItem('orders');

  return orders ? JSON.parse(orders) : [];
}

export const ordersSlice = createSlice({
  name: 'orders',

  initialState: {
    items: getInitialOrders(),
  },

  reducers: {
    addToOrder: (state, action) => {
      const isInArray = state.items.find(el => el.id === action.payload.id);

      if (!isInArray) {
        const newOrders = [...state.items, action.payload];

        state.items = newOrders;

        localStorage.setItem('orders', JSON.stringify(newOrders));
      }
    },

    deleteOrder: (state, action) => {
      console.log('deleteOrder', action);

      const newOrders = state.items.filter(el => el.id !== action.payload);

      state.items = newOrders;

      localStorage.setItem('orders', JSON.stringify(newOrders));
    },
  },
});

export const { addToOrder, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
