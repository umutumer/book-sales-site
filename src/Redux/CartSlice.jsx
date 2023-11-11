import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    itemCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      state.itemCount += 1;
      state.totalPrice += product.kitapFiyat;
    },
    removeFromCart: (state, action) => {
      const indexToRemove = action.payload;
      const removedItem = state.items[indexToRemove];
      state.items.splice(indexToRemove, 1);
      state.itemCount -= 1;
      state.totalPrice -= removedItem.kitapFiyat;
    },
    paymentConfirm: (state) =>{
      state.items = [];
      state.itemCount = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addToCart , removeFromCart , paymentConfirm } = cartSlice.actions;
export default cartSlice.reducer;