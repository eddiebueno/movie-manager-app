import React from 'react';
import MovieContext from '../../context/MovieContext';
import {Link} from 'react-router-dom';


class ReviewList extends React.Component {
  
  static contextType = MovieContext;

  componentWillUnmount(){
    this.context.clearReviews();
  }
  
  render(){
    let reviews =this.props.reviews;
    reviews = reviews.map(review=>{
      console.log(review);
      return <li key={review.id} className="user-review">
      <p className="review-text">
        Review:{review.text}
      </p>
      <p className="review-rating">
        Rating:{review.rating}
      </p>
      <p>
        {review.user_name}
      </p>
      {!this.props.location.pathname.includes('/movie') ? <Link
          to={`/movie/${review.movie_id}`}>
          Movie
        </Link> : ''}
    </li>
    });
    return(
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default ReviewList;