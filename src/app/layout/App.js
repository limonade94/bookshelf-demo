import React from 'react';
import BookDashboard from '../../features/book/BookDashboard/BookDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import BookDetailedPage from '../../features/book/BookDetailed/BookDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import BookForm from '../../features/book/BookForm/BookForm';
import TestComponent from '../../features/testArea/TestComponent';

class App extends React.Component {
  render() {
    return (
      <>
        <Route path='/' exact component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <>
              <NavBar />
              <Container>
                <Switch key={this.props.location.key}>
                  <Route path='/books' exact component={BookDashboard} />
                  <Route path='/books/:id' component={BookDetailedPage} />  
                  <Route path='/people' component={PeopleDashboard} />  
                  <Route path='/profile/:id' component={BookDashboard} />  
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path={['/createBook', '/manage/:id']} component={BookForm} />
                  <Route path='/test' component={TestComponent} />                  
              </Switch>  
              </Container>
            </>
          )}
        />
      </>      
    );    
  }
}

export default withRouter(App);
