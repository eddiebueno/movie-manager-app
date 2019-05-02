import React from 'react';
import Folder from '../Folder/Folder';
import MovieContext from '../Context/MovieContext';
import {Link} from 'react-router-dom';

class FolderList extends React.Component  {

  static contextType = MovieContext;

  render() {
    let folders = this.context.store.folders.map(folder =>{
      return <Folder match={this.props.match}
        key={folder.id}
        folderid={folder.id} 
        folderName= {folder.name} />
    })
      
    return (
      <div className='leftBar'>
        <ul className='folderList'>
          {folders}
          <li className='folderItem'>
            <Link to='/addfolder'>
              <button className="addButton">Add Folder</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default FolderList;