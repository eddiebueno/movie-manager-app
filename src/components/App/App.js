import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AddFolder from '../AddFolder/AddFolder';
import MovieList from '../Movie/MovieList';
import MovieInfo from '../Movie/MovieInfo';
import MovieContext from '../Context/MovieContext';
import {withRouter} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import SearchForm from '../SearchForm/SearchForm';
import MovieSearchDisplay from '../MovieSearchDisplay/MovieSearchDisplay';


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
    this.getFolders();
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

  getFolders = () =>{
    let folders;
    let movies;

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
        handleRate: this.handleRate,
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
            path={'/'}
            component={SearchForm}
          />
        </Switch>

          <Route 
            path='/movie/:id' 
            render={(props) => <MovieInfo match={props.match}  />} />


          <Route path='/addfolder' component={AddFolder} />
        <MovieSearchDisplay />
      </main>
      
      </MovieContext.Provider>
    )
  }
}

export default withRouter(App);
