import React from 'react';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

class MoviePage extends React.Component {

  render(){
    return(
      <>
        <MovieInfo match={this.props.match}/>
        <ReviewForm match={this.props.match}/>
      </>
    )
  }

}

export default MoviePage;