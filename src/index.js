import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import {MovieProvider} from './context/MovieContext';

ReactDOM.render(
  <BrowserRouter>
    <MovieProvider>
    <App />
    </MovieProvider>
  </BrowserRouter>
, document.getElementById('root'));
