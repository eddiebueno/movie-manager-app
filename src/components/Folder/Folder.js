import React from 'react';
import {NavLink} from 'react-router-dom';
import './Folder.css';
import MovieContext from '../Context/MovieContext';

class Folder extends React.Component  {    

  static contextType = MovieContext;
  
  render(){
    let cname = 'folderItem';
    if (this.props.match) {
      if (this.props.match.params.id === this.props.folderid) {
      cname = 'folderItem selected';
      }
    }

    return ( 
      <li key={this.props.folderid} className ={cname}>         
        <NavLink onClick={() => this.context.changeOrigin(false)} to={`/folder/${this.props.folderid}`}>
        {this.props.folderName}</NavLink>
      </li>
    );
  }
}

export default Folder;