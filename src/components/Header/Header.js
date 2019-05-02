import React from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../Context/MovieContext';
import TokenService from '../../services/token-service';
import './Header.css';

class HomePage extends React.Component {
  
  static contextType = MovieContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render(){  
  return (
    <nav className='Header'>
      <h1>
        <Link to='/' onClick={() => this.context.changeOrigin(true)}>Movie Manager</Link>
      </h1>
      {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
    </nav>
  );
}
}
export default HomePage;