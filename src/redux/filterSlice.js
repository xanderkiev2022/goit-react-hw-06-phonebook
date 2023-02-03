import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    addFilter: (_, { payload }) => payload,
  },
});

export const { addFilter } = filterSlice.actions;
export const getFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
