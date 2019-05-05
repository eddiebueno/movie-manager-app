import React from 'react';
import MovieContext from '../../context/MovieContext';
import Movie from '../Movie/Movie';

export default class MovieSearchDisplay extends React.Component {
  static contextType = MovieContext;

  componentWillUnmount(){
    this.context.clearSearchResults();
  }

  render(){
    let movies = this.context.searchMovies;
    let newmovies = [];
    if (movies){
      newmovies =  movies.map(movie => {
        return <Movie 
          key={movie.imdbID}
          imageUrl = {movie.Poster} 
          name= {movie.Title}
          history={this.props.history}
          movieId={movie.imdbID}
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