import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BookListItem extends Component {
  render() {

    const { book, deleteBook } = this.props;

    return (
      <section className="book-item flex-container">
        <img src={book.photoUrl} alt={book.title} />
        
        <ul>
          <li>{book.title}</li>
          <li><Icon name="user circle" />{book.author}</li>
          <li><Icon name="calendar" />{book.date}</li>
          <li>
            <Icon name="file text" />
            <span className="item">{book.page} pages</span>
            <Icon name={book.category === 'React' ? 'react' : 'js'} />
            <span>{book.category}</span>
          </li>
          <li><strong>ISBN</strong> : {book.isbn}</li>
          <li className="text">{book.accept}</li>
          <li>
            <Link to={`/books/${book.id}`} className="more">Learn More</Link>
            <button
              className="delete"
              type="button"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </section>
    )
  }
}

export default BookListItem;