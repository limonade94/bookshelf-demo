import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createBook, updateBook } from '../bookActions';
import cuid from 'cuid';

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.id;

  let book = {
    title: '',
    author: '',
    date: '',
    page: '',
    category: '',
    isbn: '',
    accept: '',
    photoUrl: ''
  }

  if (bookId && state.books.length > 0) {
    book = state.books.filter(book => book.id === bookId)[0]
  }

  return {
    book
  }
}

const mapDispatchToProps = {
  createBook,
  updateBook
}

class BookForm extends Component {

  state = {...this.props.book};

  componentDidMount() {
    if (this.props.selectedBook !== null) {
      this.setState({
        ...this.props.selectedBook
      })
    }
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateBook(this.state);
      this.props.history.push(`/books/${this.state.id}`);
    } else {
      const newBook = {
        ...this.state,
        id: cuid(),
        photoUrl: '/assets/no-cover.png'
      }
      this.props.createBook(newBook);
      this.props.history.push(`/books`);
    }
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  render() {    
    const { title, author, date, page, accept, category, isbn, photoUrl } = this.state;

    return (
      <Segment className="form">
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              type="text"
              name="title" 
              value={title}
              onChange={this.handleInputChange} 
              placeholder="Book Title" 
            />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.handleInputChange}
              placeholder="Author Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Publication Date</label>
            <input 
              type="date" 
              name="date" 
              value={date} 
              onChange={this.handleInputChange} 
              placeholder="Publication Date" 
          />
          </Form.Field>
          <Form.Field>
            <label>Page Count</label>
            <input 
              name="page"
              value={page}
              type="text"
              onChange={this.handleInputChange} 
              placeholder="Number of Pages" 
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={category} 
              onChange={this.handleInputChange} 
              placeholder="Web Technology" 
            />
          </Form.Field>
          <Form.Field>
            <label>ISBN</label>
            <input
              type="text"
              name="isbn"
              value={isbn}
              onChange={this.handleInputChange}
              placeholder="ISBN"
            />
          </Form.Field>
          <Form.Field>
            <label>Accept</label>
            <input
              type="text"
              name="accept"
              value={accept}
              onChange={this.handleInputChange}
              placeholder="Accept" 
            />
          </Form.Field>
          <Form.Field>
            <label>Photo Url</label>
            <input
              type="text"
              name="photoUrl"
              value={photoUrl}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);

