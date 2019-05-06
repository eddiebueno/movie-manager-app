import React from 'react';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import MovieApiService from '../../services/movie-api-service';
import MovieContext from '../../context/MovieContext';

class MoviePage extends React.Component {
  static contextType = MovieContext;

  componentDidMount(){
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
          <MovieInfo match={this.props.match}/>
          <ReviewForm match={this.props.match}/>
          <UserReviews reviews={this.context.userReviews}/>
        </>
      )
    }
  }
}

function UserReviews({reviews=[]}){
  return(
    <ul className="user-movie-reviews">
      {reviews.map(review=>
        <li key={review.id} className="user-review">
          <p className="review-text">
            {review.text}
          </p>
          <p className="review-rating">
            {review.rating}
          </p>
        </li>
      )}
    </ul>
  )
}

export default MoviePage;