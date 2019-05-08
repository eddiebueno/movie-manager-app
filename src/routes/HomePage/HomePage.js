import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieSearchDisplay from '../../components/MovieSearchDisplay/MovieSearchDisplay';

class HomePage extends React.Component{

  render(){
    return(
      <>
        <SearchForm />
        <MovieSearchDisplay />
      </>
    )
  }
}

export default HomePage;