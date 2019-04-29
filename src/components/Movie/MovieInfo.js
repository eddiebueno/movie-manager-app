import React from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../Context/MovieContext';

class MovieInfo extends React.Component {
  static contextType = MovieContext;

  render(){
    const movie = this.context.store.movies.find(movie =>{
      return movie.id === this.props.match.params.id
     }
   )
    return(
      <ul>
        <li>
          <button onClick={() => this.context.handleGoBack()}>Go Back</button>  
        </li>
        <li>
      <h2>{movie.name}</h2>
      <img src={movie.imgUrl} alt={movie.name} />
      <button onClick={() => this.context.handleDelete(movie.id)}>Delete</button>
      </li>
    </ul>
    )
  }
}

export default MovieInfo;