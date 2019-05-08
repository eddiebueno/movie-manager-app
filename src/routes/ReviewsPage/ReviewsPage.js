import React from 'react';
import ReviewList from '../../components/ReviewList/ReviewList';
import MovieApiService from '../../services/movie-api-service';
import MovieContext from '../../context/MovieContext';

class ReviewsPage extends React.Component {
  static contextType = MovieContext;

  componentDidMount(){
    const {user_id} = this.props.match.params;
    MovieApiService.getUserReviews(user_id)
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
          <ReviewList location={this.props.location} reviews={this.context.userReviews}/>
        </>
      )
    }
  }
}

export default ReviewsPage;