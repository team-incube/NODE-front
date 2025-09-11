import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import SigninPage from './app/signin/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SigninPage />
    </BrowserRouter>
  </React.StrictMode>
);

