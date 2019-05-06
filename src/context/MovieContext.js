import React from 'react'

const MovieContext = React.createContext({
  searchMovies: [],
  userMovies: [],
  searchTerm: '',
  loading:false,
  handleReviewSubmit: () => {},
  handleGoBack: () => {},
  onSearchTermChange: ()=>{},
  onSearchSubmit: ()=>{},
  clearSearchResults: ()=>{},


  })

export default MovieContext;