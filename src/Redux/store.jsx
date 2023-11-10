import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './slice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },
  middleware: [thunk],
});


export default store;