import React from 'react'

const MovieContext = React.createContext({
  store: {},
  newMovieFolder: 0,
  handleDelete: () => {},
  handleGoBack: () => {},
  addFolderSubmit: () => {},
  addMovieSubmit: () => {}

  })

export default MovieContext;