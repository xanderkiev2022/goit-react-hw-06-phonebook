import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState =
  // [
  //   { id: 0, text: 'Learn HTML and CSS', completed: true },
  //   { id: 1, text: 'Get good at JavaScript', completed: true },
  //   { id: 2, text: 'Master React', completed: false },
  //   { id: 3, text: 'Discover Redux', completed: false },
  //   { id: 4, text: 'Build amazing apps', completed: false },
  // ]
  [];

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return state.filter(contact => contact.id === action.payload);
    },
    // toggleCompleted(state, action) {
    //   for (const task of state) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //       break;
    //     }
    //   }
    // },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
