import React, { Component } from 'react';
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react';
import BookListRelated from './BookListRelated';
import { Link } from 'react-router-dom';

class BookListItem extends Component {
  render() {

    const { book, deleteBook } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Image size="small" src={book.photoUrl} />       
                <Button
                  as={Link}
                  to={`/books/${book.id}`}
                  color="teal" 
                  content="Learn more" 
                />
                <Button 
                  onClick={() => deleteBook(book.id)}
                  color="grey" 
                  content="Delete"
                />
              </Item.Content>                      
              <Item.Content>
                <Item.Header as="a">{book.title}</Item.Header>
                <Item.Description>
                  <Icon name="user circle" />
                  {book.author}
                </Item.Description>
                <Item.Description>
                  <Icon name="calendar" />
                  {book.date}
                </Item.Description>
                <Item.Description>
                  <Icon name="file text" />
                  {book.page} pages
                </Item.Description>
                <Item.Description>
                  <Icon name={book.category === 'React' ? 'react' : 'js'} />
                  {book.category}
                </Item.Description>
                <Item.Description>
                  ISBN : {book.isbn}
                </Item.Description>
                <Item.Description className="last">
                  {book.accept}
                </Item.Description>                
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment> 
        {/* <Segment>
          <List horizontal>
            {
              book.relatedItem && book.relatedItem.map(item => (
                <BookListRelated key={item.title} item={item} />
              ))
            }          
          </List>
        </Segment> */}
      </Segment.Group>
    )
  }
}

export default BookListItem;