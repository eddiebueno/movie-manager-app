import React from 'react';
import MovieContext from '../../context/MovieContext';
import Movie from '../Movie/Movie';
import './MovieSearchDisplay.css';

export default class MovieSearchDisplay extends React.Component {
  static contextType = MovieContext;

  componentWillUnmount(){
    this.context.clearSearchResults();
  }

  render(){
    let movies = this.context.searchMovies;
    let newmovies = [];
    if (movies){
      // checking to see if there is a list of movies to display
      // will default to a no image available image if an image is
      // not sent from api
      newmovies =  movies.map(movie => {
        if (movie.Poster === "N/A"){
          movie.Poster = 'https://davco-online.com.sg/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/No_image_available_1.jpg';
        }
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
        <div className="row overflow">
          {newmovies}
        </div>
      )
    }
      
  }

}