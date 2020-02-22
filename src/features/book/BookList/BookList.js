import React, { Component } from 'react';
import BookListItem from './BookListItem';

class BookList extends Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => (
          <BookListItem key={book.id} book={book} />
        ))}
      </div>
    )
  }
}

export default BookList;
