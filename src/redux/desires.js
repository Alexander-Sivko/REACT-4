import { createSlice } from '@reduxjs/toolkit';

function getInitialDesires() {
  const desires = localStorage.getItem('desires');

  return desires ? JSON.parse(desires) : [];
}

export const desiresSlice = createSlice({
  name: 'desires',

  initialState: {
    items: getInitialDesires(),
  },

  reducers: {
    addToDesire: (state, action) => {
      const isInArray = state.items.find(el => el.id === action.payload.id);

      if (!isInArray) {
        const newDesires = [...state.items, action.payload];

        state.items = newDesires;

        localStorage.setItem('desires', JSON.stringify(newDesires));
      }
    },

    deleteDesire: (state, action) => {
      console.log('deleteDesire', action);

      const newDesires = state.items.filter(el => el.id !== action.payload);

      state.items = newDesires;

      localStorage.setItem('desires', JSON.stringify(newDesires));
    },
  },
});

export const { addToDesire, deleteDesire } = desiresSlice.actions;

export default desiresSlice.reducer;