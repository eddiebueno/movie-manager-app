import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import MoviePage from '../../routes/MoviePage/MoviePage';

import Header from '../Header/Header';
import {PrivateRoute, PublicOnlyRoute} from '../Utils';

import './App.css';


class App extends React.Component {
  
  updateData = (data) =>{
    let count = 0;
    let searchMovies = [];
    if (data["Response"]){
      count = data["Search"].length
    }
    for (let i =0; i <count; i++){
      searchMovies.push(data["Search"][i])
    }
    this.setState({
      ...this.state,
      searchMovies,
      loading:false
    })
  }

  render(){
    return(
      <>
      <header>
        <Header />
      </header>
      <main className='App'>
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

          
        </Switch>
        <PrivateRoute 
            path='/movie/:id' 
            component ={MoviePage}
          />

      </main>
      
      </>
    )
  }
}

export default withRouter(App);
