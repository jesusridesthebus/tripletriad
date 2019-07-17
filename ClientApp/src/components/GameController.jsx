import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import Hand from './Hand';
import Footer from './Footer';

export class GameController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render(){
    return(
      <div className="page">fartfartfart
        <div className="playerSection pageItem"><Hand /></div>
        <div className="header pageItem"><Header /></div>
        <div className="boardComp pageItem"><Board /></div>
        <div className="footer pageItem"><Footer /></div>
      </div>
    );
  }
}
