import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import Hand from './Hand';
import Footer from './Footer';
import { AsyncComponent } from 'react-async-component'

export class GameController extends React.Component {

  constructor(props) {
    super(props);

    fetch('api/SampleData/Cards')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ forecasts: data, loading: false });
        this.state.deck = this.shuffle(data.slice());
        for(let i = 0; i < 10; i++){
          this.state.game.players[i%2].push(this.state.deck[i]);
        }
        for(let i = 0; i < 5; i++){
          this.state.game.players[0][i].owner = 'b';
          this.state.game.players[1][i].owner = 'r';
        }
        console.log(this.state.deck);
        console.log(this.state.game);
       
      });

    this.state = {
      deck: [],
      game: {
        players: [[],[]],
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
    if(this.state.deck.length > 0){
    return(
      <div className="page">
        <div className="playerSection pageItem"><Hand player={this.state.game.players[playerTurn]} /></div>
        <div className="header pageItem"><Header /></div>
        <div className="boardComp pageItem"><Board /></div>
        <div className="footer pageItem"><Footer /></div>
      </div>
    );
    }else{
      return(
        <div> loading..</div>
      )
    }
  }
}
