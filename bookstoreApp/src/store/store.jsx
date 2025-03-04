import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './slices/bookSlice';
import { formReducer } from './slices/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    books: bookReducer,
  },
});
