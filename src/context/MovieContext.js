import React from 'react'

const MovieContext = React.createContext({
  userReviews:[],
  searchMovies: [],
  userMovies: [],
  searchTerm: '',
  loading:false,
  handleReviewSubmit: () => {},
  handleGoBack: () => {},
  onSearchTermChange: ()=>{},
  onSearchSubmit: ()=>{},
  clearSearchResults: ()=>{},
  setReviews: ()=>{},


  })

export default MovieContext;