import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

export class GameController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render(){
    return(
      <div>
        <h1>hey</h1>
        <Board />
      </div>
    );
  }
}
