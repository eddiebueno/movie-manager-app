import React from 'react';
import MovieContext from '../../context/MovieContext';
import MovieApiService from '../../services/movie-api-service';
import {Button, Textarea} from '../Utils/Utils';

export default class ReviewForm extends React.Component{
  static contextType = MovieContext;

  handleReviewSubmit = (e)=>{
    e.preventDefault();
    const movieId = this.props.match.params.id;
    const {text,rating} = e.target;
    MovieApiService.postReview(movieId,text.value,Number(rating.value))
      .then(()=>{
        text.value='';
        rating.value='';
        this.props.updateReviews();
      })
      .catch(this.context.setError)
  }

  render(){
    return(
      <form className="review-form" onSubmit={this.handleReviewSubmit}>
        <Textarea 
          required
          aria-label='Type a review...'
          name='text'
          id='text'
          placeholder='Type a review...'
        />
        <label htmlFor='rating' className='rating'>
        Rate this movie:
        </label>
        <input type='number' name='rating' id='rating' step='any' min='1' max='10'></input>

        <Button type='submit'>
          Post review
        </Button>

      </form>
    )
  }

}