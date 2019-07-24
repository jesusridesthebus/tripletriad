import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { GameController } from './components/GameController';
import SplashPage from './components/SplashPage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/' component={GameController} />
      </Layout>
    );
  }
}
