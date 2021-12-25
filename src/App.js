import React from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
import { Space, Layout, Typography } from 'antd';
import { Navbar, Main, Footer } from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='main'>
        <Main></Main>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
