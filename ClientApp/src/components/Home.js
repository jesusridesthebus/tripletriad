import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Link to = '/game'> Start Game </Link>
      </div>
    );
  }
}
