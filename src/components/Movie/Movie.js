import React from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../Context/MovieContext';
import './Movie.css';

class Movie extends React.Component {
  static contextType = MovieContext;

  render(){
    return (
      <ul key={this.props.movieId} className="movie col-6">
        <li className="movie-title">
          <Link to={`/movie/${this.props.movieId}`}>{this.props.name}</Link>
        </li>
        <li className="movie-image">
          <img alt={this.props.name} src={this.props.imageUrl} className="poster"/>
        </li>
        <li className="rate-button">
          <button onClick={()=>this.context.handleRate(this.props.MovieId)}>Rate</button>
        </li>
      </ul>
    )
  }
}

export default Movie;