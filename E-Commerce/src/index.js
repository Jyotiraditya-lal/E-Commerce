import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import LoginContextProvider from './Components/Login/Context/LoginContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </LoginContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
