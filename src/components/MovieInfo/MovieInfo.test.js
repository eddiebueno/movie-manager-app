import React from 'react';
import ReactDOM from 'react-dom';
import MovieInfo from './MovieInfo';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MovieInfo match={{params:'1'}}/>
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
