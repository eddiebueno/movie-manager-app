import React from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../Context/MovieContext';

class Movie extends React.Component {
  static contextType = MovieContext;

  render(){
    return (
      <li key={this.props.movieId}>
        <Link to={`/movie/${this.props.movieId}`}>{this.props.name}</Link>
        <img alt={this.props.name} src={this.props.imageUrl}></img>
        <button onClick={()=>this.context.handleDelete(this.props.MovieId)}>Delete</button>
      </li>
    )
  }
}