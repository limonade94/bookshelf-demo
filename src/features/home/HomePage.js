import React from 'react';

const HomePage = ({history}) => {
  return (
    <section className="flex-container home">
      <h1 onClick={() => history.push('/books')}>
        BookShelf
        <i className="icon external"></i> 
      </h1>     
    </section>
  )
}

export default HomePage
