require('file-loader?name=[name].[ext]!../public/index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
// import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
const appElement = document.getElementById('app');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  appElement
);
