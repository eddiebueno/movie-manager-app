import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import MoviePage from '../../routes/MoviePage/MoviePage';

import Header from '../Header/Header';
import MovieContext from '../../context/MovieContext';
import {PrivateRoute, PublicOnlyRoute} from '../Utils';

import './App.css';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userMovies: [],
      searchMovies: [],
      selected: null,
      searchTerm: '',
      loading:false,
      fromOrigin: true,
    }
  }

  apiCall = (searchTerm) =>{
    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDb_API_KEY}&s=${searchTerm}`;
    return fetch(url)
  }

  clearSearchResults= ()=>{
    this.setState({
      ...this.state,
      searchMovies: []
    })
  }

  onSearchTermChange =(searchTerm) =>{
    this.setState({searchTerm})
  }

  onSearchSubmit = (e)=>{
    e.preventDefault();
    const searchTerm = e.currentTarget['search-term'].value;
    this.setState({
      ...this.state,
      searchMovies:[],
      searchTerm,
      loading: true
    })
  }

  componentDidMount(){
  }

  componentDidUpdate = () =>{
    if (this.state.loading){
      //TODO:
      console.log('Fetching...');
      this.apiCall(this.state.searchTerm)
        .then(res=>res.json())
        .then((data=>{
          this.updateData(data)
        }))
    }
  }

  handleGoBack = () =>{
    this.props.history.goBack();
  }


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
      <MovieContext.Provider value={{
        userMovies: this.state.userMovies,
        searchMovies: this.state.searchMovies,
        handleReviewSubmit: this.handleReviewSubmit,
        handleGoBack: this.handleGoBack,
        onSearchTermChange: this.onSearchTermChange,
        onSearchSubmit: this.onSearchSubmit,
        searchTerm: this.state.searchTerm,
        loading:this.state.loading,
        clearSearchResults: this.clearSearchResults,
  

      }}>
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
      
      </MovieContext.Provider>
    )
  }
}

export default withRouter(App);
