import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import Hand from './Hand';
import Footer from './Footer';

export class GameController extends React.Component {

  constructor(props) {
    super(props);

    fetch('api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ forecasts: data, loading: false });
        this.state.deck = this.shuffle(data.slice());
        console.log(this.state.deck);
      });

    this.state = {
      deck: [],
      game: {
        players: [[]],
        turn: 0,
        board: [0,1,2,3,4,5,6,7,8]
        }
      }  
  }
  shuffle(deck) {
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }
  render(){
    let playerTurn = this.state.game.turn % 2;
    return(
      <div className="page">
        <div className="playerSection pageItem"><Hand /></div>
        <div className="header pageItem"><Header /></div>
        <div className="boardComp pageItem"><Board /></div>
        <div className="footer pageItem"><Footer /></div>
      </div>
    );
  }
}
