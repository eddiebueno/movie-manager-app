import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ReviewList reviews={[]}/>
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
