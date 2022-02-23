// import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const DEVELOPMENT_SERVER_BASE_URL = "http://localhost:8080";
const PRODUCTION_SERVER_BASE_URL = "https://better-timetable-server.herokuapp.com";

axios.defaults.baseURL = `${process.env.NODE_ENV !== 'development' ?
  DEVELOPMENT_SERVER_BASE_URL :
  PRODUCTION_SERVER_BASE_URL}/api`;
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
