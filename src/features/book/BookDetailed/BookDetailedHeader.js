import React from 'react';
import { Link } from 'react-router-dom';

const BookDetailedHeader = ({book}) => {
  return (
    <header>
      <img src={book.decorationImg} alt={book.title} />
      <h2>{book.title}</h2>
      <Link to={`/manage/${book.id}`}>Edit Book</Link>
    </header>
  )
}

export default BookDetailedHeader;
