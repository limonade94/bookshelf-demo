import React, { Component } from 'react';
import BookListItem from './BookListItem';

class BookList extends Component {
  render() {
    const { books, deleteBook } = this.props;
    return (
      <main>
        {books.map(book => (
          <BookListItem 
            key={book.id} 
            book={book}
            deleteBook={deleteBook}
          />
        ))}
      </main>
    )
  }
}

export default BookList;
