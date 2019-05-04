import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import MoviePage from '../../routes/MoviePage/MoviePage';

import Header from '../Header/Header';
import MovieList from '../Movie/MovieList';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieContext from '../../context/MovieContext';
import {PrivateRoute, PublicOnlyRoute} from '../Utils';

import './App.css';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      STORE:{
        userMovies: [],
        searchMovies: [],
      },
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

  onSearchTermChange =(searchTerm) =>{
    this.setState({searchTerm})
  }

  onSearchSubmit = (e)=>{
    e.preventDefault();
    const searchTerm = e.currentTarget['search-term'].value;
    this.setState({
      ...this.state,
      STORE:{
        ...this.state.STORE,
        searchMovies:[]
      },
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
    //TODO:
    console.log('displaying results:',searchMovies);
    this.setState({
      ...this.state,
      STORE:{
        ...this.state.STORE,
        searchMovies,
      },
      loading:false
    })
  }

  render(){
    return(
      <MovieContext.Provider value={{
        store: this.state.STORE,
        handleReviewSubmit: this.handleReviewSubmit,
        handleGoBack: this.handleGoBack,
        onSearchTermChange: this.onSearchTermChange,
        onSearchSubmit: this.onSearchSubmit,
        searchTerm: this.state.searchTerm,
        loading:this.state.loading,

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
