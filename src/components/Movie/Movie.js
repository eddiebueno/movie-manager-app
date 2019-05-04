import React from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../../context/MovieContext';
import './Movie.css';

class Movie extends React.Component {
  static contextType = MovieContext;

  changeRoute = (movieId)=>{
    let path = '/';
    this.props.history.push(path);
  }

  render(){
    return (
      <ul key={this.props.movieId} className="movie col-6">
        <li className="movie-title">
          <Link to={`/movie/${this.props.movieId}`}>{this.props.name}</Link>
        </li>
        <li className="movie-image">
          <img alt={this.props.name} src={this.props.imageUrl} className="poster"/>
        </li>
        <li className="review-button">
          <button onClick={()=>this.changeRoute(this.props.MovieId)}>Review</button>
        </li>
      </ul>
    )
  }
}

export default Movie;