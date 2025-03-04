import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store/slices/bookSlice';

function BookSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.books.searchTerm);

  return (
    <div className="listHeader">
      <h3 className="title is-3">Kitaplarım</h3>
      <div className="search field">
        <input
          className="input"
          placeholder="Kitap ara"
          onChange={(event) => dispatch(changeSearchTerm(event.target.value))}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default BookSearch;