import React, { Component } from 'react';
import BookListItem from './BookListItem';

class BookList extends Component {
  render() {
    const { books, selectBook, deleteBook } = this.props;
    return (
      <main>
        {books.map(book => (
          <BookListItem 
            key={book.id} 
            book={book} 
            selectBook={selectBook} 
            deleteBook={deleteBook}
          />
        ))}
      </main>
    )
  }
}

export default BookList;
