import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'contacts',
  storage,
  //   blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,

  //   reducer: {
  //     contacts: persistedReducer,
  //     filters: filtersReducer,
  //   },
});

export const persistor = persistStore(store);
