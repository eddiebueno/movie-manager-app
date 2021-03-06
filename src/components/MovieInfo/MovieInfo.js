import React from 'react';
import MovieContext from '../../context/MovieContext';
import {Hyph} from '../Utils/Utils';
import './MovieInfo.css';

class MovieInfo extends React.Component {
  static contextType = MovieContext;

  state = {
    movie: {},
    loading: true,
  };

  componentDidMount(){
    // this function fetches the movie's information based on the id from params
    const movieId = this.props.match.params.id;
    let url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDb_API_KEY}&i=${movieId}`;
    fetch(url)
      .then(res=>res.json())
      .then(movie=>{
        this.setState({
          movie,
          loading: false
        });
      })
  }

  handleGoBack(){
    this.props.history.goBack();
  }

  render(){

    if (this.state.loading){
      return <p>Loading...</p>
    }else{
      let movieRatings = this.state.movie["Ratings"]
      movieRatings = movieRatings.map(rating=>{
        return <li key={rating.Source}>{`${rating.Source}:${rating.Value}`}</li>
      });
      return(
        <div>
          <div>
            <button className='go-back-button' onClick={() => this.handleGoBack()}>Go Back</button>  
          </div>
            <div className="col-6 movie-section">
              <div>
                <h2>{this.state.movie["Title"]}</h2>
                <div className="movie-base-info">
                  <span className="movie-rating">
                    {this.state.movie["Rated"]}
                  </span>
                  <Hyph />
                  <span className="year">
                    {this.state.movie["Year"]}
                  </span>
                  <Hyph />
                  <span className="genre">
                    {this.state.movie["Genre"]}
                  </span>
                  <Hyph />
                  <span className="runtime">
                    {this.state.movie["Runtime"]}
                  </span>
                </div>
              </div>
              <img src={this.state.movie["Poster"]} alt={this.state.movie["Title"]} />
            </div>
            <ul className="col-6 movie-section">
              <li className="director">
                <p>
                  Directed By: {this.state.movie["Director"]}
                </p>
              </li>
              <li className="writer">
                <p>
                  Writen By: {this.state.movie["Writer"]}
                </p>
              </li>
              <li className="actors">
                <p>
                  Staring: {this.state.movie["Actors"]}
                </p>
              </li>
              <li className="plot">
                <p>
                  Plot: {this.state.movie["Plot"]}
                </p>
              </li>
              {movieRatings}
            </ul>
      </div>
      )
    }
  }
}

export default MovieInfo;