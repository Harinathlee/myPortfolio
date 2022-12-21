import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tw-elements';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

