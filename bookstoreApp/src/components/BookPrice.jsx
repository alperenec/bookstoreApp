import React from 'react';
import { useSelector } from 'react-redux';

function BookPrice() {
  const totalCost = useSelector(({ form, books: { data, searchTerm } }) =>
    data
      .filter((book) => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, book) => acc + book.cost, 0)
  );

  return <div className="bookPrice">Toplam tutar: {totalCost} TL</div>;
}

export default BookPrice;