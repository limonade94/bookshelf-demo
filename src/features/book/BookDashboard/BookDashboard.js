import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import cuid from 'cuid';

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
    title: 'React Projects',
    author: 'Roy Derks',
    aboutAuthor: 'Roy Derks is a serial start-up CTO, conference speaker, and developer from Amsterdam. He has been actively programming since he was a teenager, starting as a self-taught programmer using online tutorials and books. At the age of 14, he founded his first start-up, a peer-to-peer platform where users could trade DVDs with other users for free. ',

    publisher: 'PacktPub',
    date: '2019-12-20',
    category: 'React',
    type: "book",
    page: 474,
    isbn: 9781789954937,

    decorationImg: '/assets/covers/react-project.png',

    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781789954937-original.png',

    accept: 'Build cross-platform applications of varying complexity for the web, mobile, and VR devices using React tooling',

    description: 'React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools such as GraphQL, Expo, and React 360. You will start building a eal-world project right from the first chapter and get hands on with developing scalable applications as you advance to building more complex projects. Throughout the book, you will use the latest versions of React and React Native to explore features such as Higher Order Components(HOC), Context, and Hooks on multiple platforms, which will help you build full stack web and mobile applications efficiently.Finally, you will delve into unit testing with Jest to build test-driven apps. By the end of this React book, you will have developed the skills necessary to start building scalable React apps across web and mobile platforms.',

    relatedItem: [
      {
        title: 'React Design Patterns and Best Practices - Second Edition',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b11439_mockupcover_0.png'
      },
      {
        title: 'Full-Stack React Project',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/0/b09550_cover.png'
      },
      {
        title: 'React Material-UI Cookbook',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b12040_mockupcover_0.png'
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
    isOpen: false
  }

  handleIsOpenToggle = () => {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }))
  }

  handleCreateBook = (newBook) => {
    newBook.id = cuid();
    newBook.photoUrl = '/assets/no-cover.png';
    this.setState(({books}) => ({
      books: [...books, newBook],
      isOpen: false
    }))
  }

  render() {

    const { books, isOpen } = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <BookList books={books} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleIsOpenToggle} positive content="Create Book" />
          {
            isOpen && (
              <BookForm
                createBook={this.handleCreateBook}
                closeForm={this.handleIsOpenToggle} />
            )
          }          
        </Grid.Column>
      </Grid>
    )
  }
}

export default BookDashboard;
