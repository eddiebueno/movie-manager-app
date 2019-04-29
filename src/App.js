import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import FolderList from './components/Folder/FolderList';
import AddFolder from './components/AddFolder/AddFolder';
import MovieList from './components/Movie/MovieList';
import MovieInfo from './components/Movie/MovieInfo';
import MovieContext from './components/Context/MovieContext';
import {withRouter} from 'react-router-dom';
import store from './store';

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
      <main className='App'>
        <section>
          <Route path='/' render={()=> <Header />} />
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
        </section>

      </main>
      
      </MovieContext.Provider>
    )
  }
}

export default withRouter(App);
