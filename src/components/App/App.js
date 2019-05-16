import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import MoviePage from '../../routes/MoviePage/MoviePage';
import ReviewsPage from '../../routes/ReviewsPage/ReviewsPage';

import Header from '../Header/Header';
import {PrivateRoute, PublicOnlyRoute} from '../Utils';

import './App.css';


class App extends React.Component {

  render(){
    return(
      <>
      <header className="App__header">
        <Header />
      </header>
      <main className='App__main'>
        <Switch>
          <PublicOnlyRoute 
            path={'/login'}
            component={LoginPage}
          />
          <PublicOnlyRoute 
            path={'/register'}
            component={RegistrationPage}
          />
          <PrivateRoute 
            exact path={'/'}
            component = {HomePage}
          />
          <PrivateRoute 
            path='/movie/:id' 
            component ={MoviePage}
          />
          <PrivateRoute 
            path='/users/:user_id/reviews' 
            component ={ReviewsPage}
          />
        </Switch> 
      </main>
      </>
    )
  }
}

export default withRouter(App);
