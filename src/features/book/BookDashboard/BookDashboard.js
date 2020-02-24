import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import BookList from '../BookList/BookList';
import { createBook, updateBook, deleteBook } from '../bookActions';

const mapStateToProps = (state) => ({
  books: state.books
});

const actions = {
  createBook,
  updateBook,
  deleteBook
}

class BookDashboard extends Component {

  handleDeleteBook = (id) => {
    this.props.deleteBook(id);
  }

  render() {

    const { books } = this.props;

    return (
      <Grid className="outer">
        <Grid.Column width={10}>
          <BookList 
            books={books} 
            deleteBook={this.handleDeleteBook}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Recently Added</h2>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, actions)(BookDashboard);
