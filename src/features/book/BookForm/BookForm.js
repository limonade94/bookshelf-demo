import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class BookForm extends Component {
  render() {

    const { closeForm } = this.props;

    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Book Title" />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input placeholder="Author Name" />
          </Form.Field>
          <Form.Field>
            <label>Publication Date</label>
            <input type="date" placeholder="Publication Date" />
          </Form.Field>
          <Form.Field>
            <label>Page Count</label>
            <input placeholder="Number of Pages" />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input placeholder="Web Technology" />
          </Form.Field>
          <Form.Field>
            <label>ISBN</label>
            <input placeholder="ISBN" />
          </Form.Field>
          <Form.Field>
            <label>Accept</label>
            <input placeholder="Accept" />
          </Form.Field>
          <Form.Field>
            <label>Photo Url</label>
            <input placeholder="Cover" />
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

