import React from 'react';
import MovieContext from '../Context/MovieContext'
import './AddFolder.css';

export default class AddFolder extends React.Component {

  static contextType = MovieContext;

  render() {
    return (
      <ul>
          <li className='back-button'>
             <button onClick={() => this.context.handleGoBack()}>Go Back</button>
          </li>
          <li>
             <h2>Add Folder</h2>
             <form>
               <label htmlFor="foldername">Name:</label>
               <input id="foldername" type="text" value={this.context.newFolderName} onChange={(e) => this.context.changeFolderName(e.target.value)}></input>
               <button className="add" disabled={!this.context.newFolderValid} onClick={(e) => {
                 e.preventDefault(); this.context.addFolderSubmit(this.context.newFolderName)}}>Add</button>
             </form>
         </li>
      </ul>
    );
  }
}