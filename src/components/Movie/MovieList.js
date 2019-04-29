import React from 'react';
import {Link} from 'react-router-dom';
import Movie from './Movie';
import MovieContext from '../Context/MovieContext';

class MovieList extends React.Component {
  static contextType = MovieContext;

  render(){
    let movies =null;
    if(this.props.match !== undefined){
     movies = this.context.store.movies.filter(movie =>{
       return movie.folderId === this.props.match.params.id
      }
    )
    }
    else{
      movies = this.context.store.movies;
    }

    let newmovies =  movies.map(movie => {
      return <Movie movieId = {movie.id} 
        key={movie.id}
        image = {movie.imageUrl} 
        name= {movie.name}
         />
    })
    return (
      <div className="rightBar">
        <ul className="movieList">
          {newmovies}
          <li>
            <Link to='/addmovie'>
            <button className="addButton">Add Note</button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MovieList;