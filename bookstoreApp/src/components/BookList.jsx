import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../store/slices/bookSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector(({ form, books: { data, searchTerm } }) => {
    const filteredBooks = data.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { books: filteredBooks };
  });

  const renderedBooks = books.map((book) => (
    <div key={book.id} className="panel">
      <div className="book-item">
        <div className="book-title">{book.name}</div>
        <div className="book-author">{book.description}</div>
        <div className="book-cost">{book.cost} TL</div>
        <button
          className="button is-danger"
          onClick={() => dispatch(removeBook(book.id))}
        >
          Sil
        </button>
      </div>
    </div>
  ));

  return <div className="bookList">{renderedBooks}</div>;
}

export default BookList;