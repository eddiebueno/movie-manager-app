import React from 'react';
import MovieContext from '../../context/MovieContext';


class ReviewList extends React.Component {
  
  static contextType = MovieContext;

  componentWillUnmount(){
    this.context.clearReviews();
  }
  
  render(){
    let reviews =this.props.reviews;
    reviews = reviews.map(review=>
      <li key={review.id} className="user-review">
      <p className="review-text">
        {review.text}
      </p>
      <p className="review-rating">
        {review.rating}
      </p>
    </li>
    );
    return(
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default ReviewList;