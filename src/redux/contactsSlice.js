import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState =
//   // [
//   //   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   //   { id: 1, text: 'Get good at JavaScript', completed: true },
//   //   { id: 2, text: 'Master React', completed: false },
//   //   { id: 3, text: 'Discover Redux', completed: false },
//   //   { id: 4, text: 'Build amazing apps', completed: false },
//   // ]
// [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
      //   const index = state.findIndex(task => task.id === action.payload);
      //   state.splice(index, 1);
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

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
export default contactsSlice.reducer;
