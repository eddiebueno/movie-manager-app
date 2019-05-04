import React from 'react';
import MovieContext from '../../context/MovieContext';

class MovieInfo extends React.Component {
  static contextType = MovieContext;

  state = {
    movie: {},
    loading: true,
  };

  componentDidMount(){
    const movieId = this.props.match.params.id;
    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDb_API_KEY}&i=${movieId}`;
    fetch(url)
      .then(res=>res.json())
      .then(movie=>{
        console.log('TODO: fetching again:',movie);
        this.setState({
          movie,
          loading: false
        });
      })
  }

  render(){
    if (this.state.loading){
      return <p>Loading...</p>
    }else{
      return(
        <ul>
          <li>
            <button onClick={() => this.context.handleGoBack()}>Go Back</button>  
          </li>
          <li>
            <h2>{this.state.movie["Title"]}</h2>
            <img src={this.state.movie["Poster"]} alt={this.state.movie["Title"]} />
        </li>
      </ul>
      )
    }
    
  }
}

export default MovieInfo;