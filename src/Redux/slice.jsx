import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    updateData: (state, action) => {
      const updatedData = state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload.data } : item
      );
      return updatedData;
    },
    deleteData: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setData, updateData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
