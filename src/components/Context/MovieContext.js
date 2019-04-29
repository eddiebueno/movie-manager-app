import React from 'react'

const MovieContext = React.createContext({
  store: {},
  newMovieFolder: 0,
  handleDelete: () => {},
  handleGoBack: () => {},
  addFolderSubmit: () => {},
  addMovieSubmit: () => {},
  newFolderName: '',
  newFolderValid: false,

  })

export default MovieContext;