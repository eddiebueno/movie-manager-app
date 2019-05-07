import React from 'react';
class ReviewList extends React.Component {
  
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
    console.log('new reviews:',reviews);
    return(
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default ReviewList;