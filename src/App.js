import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import FolderList from './components/Folder/FolderList';
import MovieList from './components/Movie/MovieList';
import MovieInfo from './components/Movie/MovieInfo';
import MovieContext from './components/Context/MovieContext';
import {withRouter} from 'react-router-dom';

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
    }
  }

  render(){
    return(
      <MovieContext.Provider value={{
        store: this.state.STORE,
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

      </main>
      
      </MovieContext.Provider>
    )
  }
}

export default withRouter(App);
