import React, { Component } from 'react'
import { List } from 'semantic-ui-react';

class BookListRelated extends Component {
  render() {

    const { item } = this.props;

    return (
      <List.Item>
        {/* <Image size="mini" src={item.photoUrl} /> */}
        <li>- {item.title}</li>
      </List.Item>
    )
  }
}

export default BookListRelated;
