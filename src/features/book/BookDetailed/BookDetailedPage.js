import React from 'react';
import { connect } from 'react-redux';
import BookDetailedHeader from './BookDetailedHeader';
import BookDetailedInfo from './BookDetailedInfo';
import BookDetailedChat from './BookDetailedChat';
import BookDetailedSidebar from './BookDetailedSidebar';

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.id;

  let book = {};

  if (bookId && state.books.length > 0) {
    book = state.books.filter(book => book.id === bookId)[0]
  }
  return {
    book
  }
};

const BookDetailedPage = ({book}) => {
  return (
    <div className="outer flex-container">
      <main className="book-details">
        <BookDetailedHeader book={book} />
        <BookDetailedInfo />
        <BookDetailedChat book={book} />
      </main>
      <aside>
        <BookDetailedSidebar relatedItem={book.relatedItem} />
      </aside>
    </div>
  )
}

export default connect(mapStateToProps)(BookDetailedPage);
