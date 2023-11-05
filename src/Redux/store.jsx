import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './slice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: [thunk],
});

export default store;