import React from 'react'

const MovieContext = React.createContext({
  store: {},
  newMovieFolder: 0,
  handleRate: () => {},
  handleGoBack: () => {},
  addFolderSubmit: () => {},
  addMovieSubmit: () => {},
  onSearchTermChange: ()=>{},
  newFolderName: '',
  newFolderValid: false,
  selected: null,
  searchTerm: '',
  display:[],
  loading:false,


  })

export default MovieContext;