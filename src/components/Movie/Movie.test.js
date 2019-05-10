import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Movie />
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
