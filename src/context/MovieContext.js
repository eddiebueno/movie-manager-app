import React from 'react'

const MovieContext = React.createContext({
  searchMovies: [],
  userMovies: [],
  handleReviewSubmit: () => {},
  handleGoBack: () => {},
  onSearchTermChange: ()=>{},
  onSearchSubmit: ()=>{},
  searchTerm: '',
  loading:false,
  clearSearchResults: ()=>{},


  })

export default MovieContext;