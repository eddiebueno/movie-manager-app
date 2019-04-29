import React from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../Context/MovieContext'

class HomePage extends React.Component {
  
  static contextType = MovieContext;

  render(){  
  return (
    <h1>
      <Link to='/' onClick={() => this.context.changeOrigin(true)}>Movie Manager</Link>
    </h1>
  );
}
}
export default HomePage;