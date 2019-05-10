import React from 'react';
import MovieContext from '../../context/MovieContext';
import {Link} from 'react-router-dom';
import './ReviewList.css'


class ReviewList extends React.Component {
  
  static contextType = MovieContext;

  componentWillUnmount(){
    this.context.clearReviews();
  }
  
  render(){
    // https://via.placeholder.com/149x209.png
    let reviews =this.props.reviews;
    reviews = reviews.map(review=>{
      console.log(review);
      return (
        <li key={review.id} className="user-review">
        <h2>Movie Title</h2>
        <img src="https://via.placeholder.com/149x209.png" alt="movie-img"/>
          <div className="movie-info">
            <p className="review-text">
              Review: {review.text}
            </p>
            <p className="review-rating">
              Rating: {review.rating}
            </p>
            <p>
              User: {review.user_name}
            </p>
            {!this.props.location.pathname.includes('/movie') ? <Link
                to={`/movie/${review.movie_id}`}>
                More info about Movie Title
              </Link> : ''}
            </div>
        </li>
      )
    });
    return(
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default ReviewList;