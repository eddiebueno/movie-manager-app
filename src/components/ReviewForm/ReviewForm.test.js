import React from 'react';
import ReactDOM from 'react-dom';
import ReviewForm from './ReviewForm';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ReviewForm />
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
