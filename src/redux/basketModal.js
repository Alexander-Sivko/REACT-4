import { createSlice } from '@reduxjs/toolkit';

export const modalBasketSlice = createSlice({
    name: 'modalBasket',
  
    initialState: {
      items: [],
    },
  
    reducers: {
      setItems: (state, action) => {
        // Set items state
        state.items = action.payload;
      },
    },
  });
  
  export const loadItems = () => dispatch => {
    // data.json is in public folder
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        dispatch(setItems(data));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  export const { setItems } = modalBasketSlice.actions;
  
  export default modalBasketSlice.reducer;