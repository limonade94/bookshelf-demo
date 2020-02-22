import React from 'react';
import BookDashboard from '../../features/book/BookDashboard/BookDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container as="main">          
          <BookDashboard />
        </Container>
      </>
    );    
  }
}

export default App;
