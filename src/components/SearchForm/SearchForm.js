import React from 'react';
import MovieContext from '../../context/MovieContext';
import './SearchForm.css';

export default class SearchForm extends React.Component {
  static contextType = MovieContext;

  render(){
    return(
      <form className="SearchForm" onSubmit={this.context.onSearchSubmit}>
        <label htmlFor="movie">Enter Movie Title:</label>
        <input id="movie" type="text" name="search-term" onChange={e=>this.context.onSearchTermChange(e.currentTarget.value)}></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}