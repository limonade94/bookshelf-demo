import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import cuid from 'cuid';
import { textChangeRangeIsUnchanged } from 'typescript';

const books = [
  {
    id: 1,  
    title: 'Full-Stack React Project',    
    author: 'Shama Hoque',    
    aboutAuthor: 'Shama Hoque has 8 years of experience as a software developer and mentor, with a Master’s in Software Engineering from Carnegie Mellon University. From Java programming to full-stack development with JavaScript, the applications she has worked on include national Olympiad registration websites, universally accessible widgets, video conferencing apps, and medical 3D reconstruction software.',

    publisher: 'PacktPub',
    
    date: '2018-01-08',
    
    category: 'React',
    
    type: "book",
    
    page: 470,
    
    isbn: 9781788835534,
    
    decorationImg: '/assets/covers/react-project.png',
    
    accept: 'Unleash the power of MERN stack by building diverse web applications using React, Node.js, Express, and MongoDB',
    
    description: 'The benefits of using a full JavaScript stack for web development are undeniable, especially when robust and widely adopted technologies such as React, Node, and Express and are available. Combining the power of React with industry-tested, server-side technologies, such as Node, Express, and MongoDB, creates a diverse array of possibilities when developing real-world web applications.',
    
    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/0/b09550_cover.png',
    
    relatedItem: [
      {
        title: 'React Design Patterns and Best Practices - 2nd Ed.',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b11439_mockupcover_0.png'
      },
      {
        title: 'React Projects',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781789954937-original.png'
      },
      {
        title: 'React Material-UI Cookbook',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b12040_mockupcover_0.png'
      }
    ]
  },
  {
    id: 2,
    title: 'Clean Code in JavaScript',
    author: 'James Padolsey',
    aboutAuthor: 'James Padolsey is a passionate JavaScript and UI engineer with over 12 years\' experience. James began his journey into JavaScript as a teenager, teaching himself how to build websites for school and small freelance projects. In the early years, he was a prolific blogger, sharing his unique solutions to common problems in the domains of jQuery, JavaScript, and the DOM. He later contributed to the jQuery library itself and authored a chapter within the jQuery Cookbook published by O\'Reilly Media. Over subsequent years, James has been exposed to many unique software projects in his employment at Stripe, Twitter, and Facebook, informing his philosophy on what clean coding truly means in the ever-changing ecosystem of JavaScript.',

    publisher: 'PacktPub',
    date: '2020-01-20',
    category: 'JS',
    type: "book",
    page: 548,
    isbn: 9781789957648,

    decorationImg: '/assets/covers/react-project.png',

    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781789957648-original.png',

    accept: 'Get the most out of JavaScript for building web applications through a series of patterns, techniques, and case studies for clean coding',

    description: 'The book starts with popular clean-coding principles such as SOLID, and the Law of Demeter (LoD), along with highlighting the enemies of writing clean code such as cargo culting and over-management. You’ll then delve into JavaScript, understanding the more complex aspects of the language. Next, you’ll create meaningful abstractions using design patterns, such as the Class Pattern and the Revealing Module Pattern. You’ll explore real-world challenges such as DOM reconciliation, state management, dependency management, and security, both within browser and server environments. Later, you’ll cover tooling and testing methodologies and the importance of documenting code. Finally, the book will focus on advocacy and good communication for improving code cleanliness within teams or workplaces, along with covering a case study for clean coding.',

    relatedItem: [
      {
        title: 'Professional JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781838820213-original.png'
      },
      {
        title: 'Mastering JS Functional Programming - 2nd Ed.',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781839213069-original.png'
      },
      {
        title: 'Advanced JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/1/2/12665_cover.png'
      }
    ]
  },
  {
    id: 3,
    title: 'React Material-UI Cookbook',
    author: 'Adam Boduch',
    aboutAuthor: 'Adam Boduch has been involved with large-scale JavaScript development for nearly 10 years. Before moving to the frontend, he worked on several large-scale cloud computing products using Python and Linux. No stranger to complexity, Adam has practical experience with real-world software systems and the scaling challenges they pose. He is the author of several JavaScript books, including React and React Native, by Packt Publishing and is passionate about innovative user experiences and high performance.',

    publisher: 'PacktPub',
    date: '2019-03-30',
    category: 'React',
    type: "book",
    page: 534,
    isbn: 9781789615227,

    decorationImg: '/assets/covers/react-project.png',

    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b12040_mockupcover_0.png',

    accept: 'Develop modern-day applications by implementing Material Design principles in React using Material-UI',

    description: 'Material-UI is a component library for rendering UI elements, using modern best practices from React and Material Design. This book will show you how you can create impressive and captivating modern-day web apps by implementing Material Design considerations. The book is designed to help you use a variety of Material-UI components to enhance UI functionality, along with guiding you through React best practices, and using state, context, and other new React 16.8 features.',

    relatedItem: [
      {
        title: 'React Design Patterns and Best Practices - Second Edition',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b11439_mockupcover_0.png'
      },
      {
        title: 'React Projects',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781789954937-original.png'
      },
      {
        title: 'Full-Stack React Project',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/0/b09550_cover.png'
      }
    ]
  }
]

class BookDashboard extends Component {

  state = {
    books: books,
    isOpen: false,
    selectedBook: null
  }

  // handleIsOpenToggle = () => {
  //   this.setState(({isOpen}) => ({
  //     isOpen: !isOpen
  //   }))
  // }

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedBook: null
    })
  }

  handleFormClose = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateBook = (newBook) => {
    newBook.id = cuid();
    newBook.photoUrl = '/assets/no-cover.png';
    this.setState(({books}) => ({
      books: [...books, newBook],
      isOpen: false
    }))
  }

  handleSelectBook = (book) => {
    this.setState({
      selectedBook: book,
      isOpen: true
    })
  }

  handleUpdateBook = (updatedbook) => {
    this.setState(({books}) => ({
      books: books.map(book => {
        if (book.id === updatedbook.id) {
          return {
            ...updatedbook
          }
        } else {
          return book;
        }
      }),
      isOpen: false,
      selectedBook: null
    }))
  }

  handleDeleteBook = (id) => {
    this.setState(({books}) => ({
      books: books.filter(e => e.id !==id)
    }))
  }


  render() {

    const { books, isOpen, selectedBook } = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <BookList 
            books={books} 
            selectBook={this.handleSelectBook} 
            deleteBook={this.handleDeleteBook}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content="Create Book" />
          {
            isOpen && (
              <BookForm
                key={selectedBook ? selectedBook.id : null}
                updateBook={this.handleUpdateBook}
                selectedBook={selectedBook}
                createBook={this.handleCreateBook}
                closeForm={this.handleFormClose} />
            )
          }          
        </Grid.Column>
      </Grid>
    )
  }
}

export default BookDashboard;
