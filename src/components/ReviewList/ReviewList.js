import React from 'react';
import MovieContext from '../../context/MovieContext';
import {Link} from 'react-router-dom';
import './ReviewList.css'


class ReviewList extends React.Component {
  
  static contextType = MovieContext;

  state={
    movieInfo:{},
    loading:true
  }

  componentWillUnmount(){
    this.context.clearReviews();
    this.setState({
      loading:true
    })
  }

  componentDidMount(){
    if (this.props.location.pathname.includes('/movie')){
      this.setState({
        loading:false
      })
    }
  }

  getMovieInfo(movieId){
    let url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDb_API_KEY}&i=${movieId}`;
    return fetch(url)
      .then(res=>res.json()
      )
  }

  endLoading(){
    this.setState({
      loading:false
    })
  }
  

  
  render(){
    // https://via.placeholder.com/149x209.png
    let reviews =this.props.reviews;
    
    reviews = reviews.map(review=>{

      if ((Object.keys(this.state.movieInfo).length !== reviews.length) && this.props.location.pathname.includes('/users')){
        this.getMovieInfo(review.movie_id)
        .then(movie=>{
          this.setState({
            movieInfo: {
              ...this.state.movieInfo,
              [review.id]:{
                title:movie.Title,
                poster:movie.Poster,
              }
            }
          }) 
            if(Object.keys(this.state.movieInfo).length === reviews.length){
              this.endLoading();
            }
          });
      }

      return (
        
        <li key={review.id} className="user-review">
        
        {!this.props.location.pathname.includes('/movie') && this.state.movieInfo[review.id] !== undefined? 
        <>
          <h2>{this.state.movieInfo[review.id].title}</h2>
          <img src={this.state.movieInfo[review.id].poster} alt="movie-img"/> 
        </>: ''}
        
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
    if (this.state.loading){
      return <p>Loading...</p>
    }
    else{
      return(
        <ul className="review-list">
          {reviews}
        </ul>
      )
    }
  }
}

export default ReviewList;