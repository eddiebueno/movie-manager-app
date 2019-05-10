import React from 'react';
import ReactDOM from 'react-dom';
import MovieSearchDisplay from './MovieSearchDisplay';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MovieSearchDisplay match={{params:'1'}}/>
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
