import React from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
import { Space, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import {
  Navbar,
  Main,
  Footer,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='main'>
        <Main>
          <Layout>
            <div className='routes'>
              <Switch>
                <Route exact path='/'>
                  <Homepage />
                </Route>

                <Route exact path='/exchanges'>
                  <Exchanges />
                </Route>

                <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies />
                </Route>

                <Route exact path='/crypto/:coinid'>
                  <CryptoDetails />
                </Route>

                <Route exact path='/news'>
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
        </Main>
      </div>
      <div
        className='footer'
        level={5}
        style={{ color: 'white', textAlign: 'center' }}
      >
        <Typography.Title>
          Cryptoverse <br /> All rights reserved
        </Typography.Title>
        <Space>
          <Link exact to='/'>
            Home
          </Link>
          <Link exact to='/Exhanges'>
            Exchanges
          </Link>
          <Link exact to='/News'>
            News
          </Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
