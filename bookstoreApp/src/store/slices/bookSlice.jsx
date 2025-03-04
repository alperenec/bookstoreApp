import { createSlice, nanoid } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'form',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    addBook(state, action) {
      debugger;
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    changeSearchTerm(state, action) {
      debugger;
      state.searchTerm = action.payload;
    },

    removeBook(state, action) {
      const updatedBooks = state.data.filter((book) => {
        return book.id !== action.payload;
      });
      state.data = updatedBooks;
    },
  },
});

export const { addBook, removeBook, changeSearchTerm } =
  bookSlice.actions;
export const bookReducer = bookSlice.reducer;
