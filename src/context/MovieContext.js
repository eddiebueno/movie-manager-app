import React from 'react'

const MovieContext = React.createContext({
  store: {},
  handleReviewSubmit: () => {},
  handleGoBack: () => {},
  onSearchTermChange: ()=>{},
  onSearchSubmit: ()=>{},
  searchTerm: '',
  loading:false,


  })

export default MovieContext;