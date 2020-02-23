import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class BookForm extends Component {

  state = {
    title: '',
    author: '',
    date: '',
    page: '',
    category: '',
    isbn: 0,
    accept: '',
    photoUrl: '/assets/no-cover.png'
  }

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
    } else {
      this.props.createBook(this.state);      
    }
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  render() {

    const { closeForm } = this.props;
    const { title, author, date, page, accept, category, isbn, photoUrl } = this.state;

    return (
      <Segment>
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
          <Button type="button" onClick={closeForm}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default BookForm;

