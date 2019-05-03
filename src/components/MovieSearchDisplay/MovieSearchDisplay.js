import React from 'react';
import MovieContext from '../Context/MovieContext';
import Movie from '../Movie/Movie';

export default class MovieSearchDisplay extends React.Component {
  static contextType = MovieContext;

  render(){
    let movies = this.context.store.searchMovies;
    let newmovies = [];
    if (movies){
      newmovies =  movies.map(movie => {
        return <Movie 
          key={movie.imdbID}
          imageUrl = {movie.Poster} 
          name= {movie.Title}
           />
      })
    }
    
    if (this.context.loading){
      return (<p>Loading...</p>)
    }else{
      return (
        <div className="row">
          {newmovies}
        </div>
      )
    }
      
  }

}