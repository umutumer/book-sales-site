import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    itemCount: 0,
    itemDisCount:0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      state.itemCount += 1;
      state.itemDisCount += state.itemDisCount;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;