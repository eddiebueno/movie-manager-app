import React from 'react';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewList/ReviewList';
import MovieApiService from '../../services/movie-api-service';
import MovieContext from '../../context/MovieContext';

class MoviePage extends React.Component {
  static contextType = MovieContext;

  componentDidMount(){
    this.fetchReviews();
  }

  fetchReviews =()=>{
    const {id} = this.props.match.params;
    MovieApiService.getMovieReviews(id)
      .then(data=>{
        this.context.setReviews(data);
      })
  }

  render(){
    if (this.context.loading){
      return <p>Loading...</p>
    }
    else{
      return(
        <>
          <MovieInfo history={this.props.history} match={this.props.match}/>
          <ReviewForm updateReviews={this.fetchReviews} match={this.props.match}/>
          <ReviewList reviews={this.context.userReviews}/>
        </>
      )
    }
  }
}

export default MoviePage;