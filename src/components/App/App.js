import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import FolderList from '../FolderList/FolderList';
import AddFolder from '../AddFolder/AddFolder';
import MovieList from '../Movie/MovieList';
import MovieInfo from '../Movie/MovieInfo';
import MovieContext from '../Context/MovieContext';
import {withRouter} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';

import store from '../../store';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      STORE:{
        folders: [],
        movies: [],
        selected: null
      },
      fromOrigin: true,
      newFolderName: '',
      newFolderMessage: '',
      newFolderValid: false,
    }
  }

  addFolderSubmit = ()=>{

  }

  addMovieSubmit = ()=>{

  }

  changeFolderName = (name) =>{
    let message = '';
    let valid = false;
    if(name.length ===0){
      message='No name entered';
    }
    if (this.state.STORE.folders.find(folder=>folder.name === name)){
      message = 'Duplicate folder name';
    }
    else{
      valid = true;
    }
    this.setState({
      newFolderName: name,
      newFolderMessage: message,
      newFolderValid: valid
    })
  }

  componentDidMount(){
    this.getFolders();
  }

  getFolders = () =>{
    this.setState({
      STORE: {
        folders: store.folders,
        movies: store.movies,
      }
    })
  }

  handleGoBack = () =>{
    this.props.history.goBack();
  }

  render(){
    return(
      <MovieContext.Provider value={{
        store: this.state.STORE,
        newFolderName: this.newFolderName,
        newFolderValid: this.newFolderValid,
        newFolderMessage: this.newFolderMessage,
        changeFolderName: this.changeFolderName,
        newMovieFolder: 0,
        handleDelete: this.handleDelete,
        handleGoBack: this.handleGoBack,
        addFolderSubmit: this.addFolderSubmit,
        addMovieSubmit: this.addMovieSubmit,
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
          {/* <PrivateRoute 
            path={'/folder/:id'}
            component={}
          /> */}
        </Switch>
        {/* <section>
          <Route exact path='/' render={()=> <FolderList />}/>
          <Route exact path='/' render={()=> <MovieList />}/>
        </section>

        <section>
          <Route path='/folder/:id' render={(props)=> <FolderList match={props.match}/>}/>
          <Route path='/folder/:id' render={(props)=> <MovieList match={props.match}/>}/>
        </section>

        <section>
          <Route path='/movie/:id' render={(props) => <MovieInfo match={props.match}  />} />
        </section>

        <section>
          <Route path='/addfolder' component={AddFolder} />
        </section> */}

      </main>
      
      </MovieContext.Provider>
    )
  }
}

export default withRouter(App);
