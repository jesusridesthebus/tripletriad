import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import Hand from './Hand';
import Footer from './Footer';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import Home from './Home';
import './GameController.css';

export class GameController extends React.Component {

  constructor(props) {
    super(props);

    fetch('api/SampleData/Cards')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ forecasts: data});
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
        // this.state.loading = false;
        this.setState({loading: false});
        this.setState({game: this.state.game});
        this.render();
        
       console.log("hey")
      });

    this.state = {
      loading: true,
      deck: [],
      game: {
        players: [[],[]],
        turn: 0,
        board: [0,1,2,3,4,5,6,7,8],
        selectedCard: null,
        boardLocation: null
        },
        neighbors: {
          0: {right: 1, bottom: 3},
          1: {left: 0, right: 2, bottom: 4},
          2: {left: 1, bottom: 5},
          3: {top: 0, right: 4, bottom: 6},
          4: {top: 1, bottom: 7, left: 3, right: 5},
          5: {left: 4, top: 2, bottom: 8},
          6: {top: 3, right: 7},
          7: {left: 6, top: 4, right: 8},
          8: {top: 5, left: 7}
        }
      }  
    this.selectCard = this.selectCard.bind(this);
    this.handleDeselectCard = this.handleDeselectCard.bind(this);
    this.handleDropCard = this.handleDropCard.bind(this);
    this.handleSetNull = this.handleSetNull.bind(this);
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

  selectCard(cardId) {
    this.state.game.selectedCard = cardId;
    this.setState({selectedState: cardId});
  }

  handleDeselectCard() {
    if(this.state.game.selectedCard !== null && this.state.game.boardLocation !== null && isNaN(this.state.game.board[this.state.game.boardLocation]) === false) {
      this.setState({boardLocation: null});
      this.state.game.board[this.state.game.boardLocation] = this.state.game.players[this.state.game.turn % 2].filter((el)=>this.state.game.selectedCard === el.id)[0];
      this.state.game.players[this.state.game.turn % 2] = this.state.game.players[this.state.game.turn % 2].filter((el)=>this.state.game.selectedCard !== el.id)
      this.checkFlip(this.state.game.boardLocation);
      this.state.game.boardLocation = null;
      this.state.game.selectedCard = null;
      if(this.state.game.turn === 8) {
        this.checkForWinner();
      }
      this.state.game.turn++
      // this.setState({game: this.state.game.turn+1});
    }
  }

  checkFlip(loc){
    let dict = {
      left: "right",
      top: "bottom",
      right: "left",
      bottom: "top"
    }
    let directions = Object.keys(this.state.neighbors[loc]);
    console.log(directions);
    directions.forEach((el)=>{

      console.log(this.state.game.board[this.state.neighbors[loc][el]]);

      if(isNaN(this.state.game.board[this.state.neighbors[loc][el]]) === true ){

        let neighborino = this.state.game.board[this.state.neighbors[loc][el]];
        console.log(neighborino[dict[el]]);
        if(this.state.game.board[loc][el] > neighborino[dict[el]]){
          neighborino.owner = this.state.game.board[loc].owner;
          console.log(this.state);
        }
      }
    })

  }

  checkForWinner() {
    // if(this.state.game.players[0])
    console.log(this.state.game.turn + 'wins')
    console.log(this.state.game.players[1]);
    let points = 0;
    this.state.game.board.forEach((card) => {
      if (card.owner == 'b') {
        points +=1;
      }
    });
    points += this.state.game.players[0].length;
    if(points > 5) {
      console.log('player 1 wins');
    } else if( points === 5) {
      console.log('tie');
    } else {
      console.log('player 2 wins');
    }
  }

  handleDropCard(location) {
    let newState = {
      boardLocation: location
    }
    this.state.game.boardLocation = location;
    this.setState(newState);
  }

  // const asyncContext = createAsyncContext()
  // const app = (<AsyncComponentProvider asyncContext ={asyncContext}></AsyncComponentProvider>
    
  // )

  // asyncBootstrapper(app).then(() =>
  // {
  //   const appString = renderToString(app)
 
  //     // Get the async component state. 👇
  //     const asyncState = asyncContext.getState()
 
  //     const html = `
  //       <html>
  //         <head>
  //           <title>Example</title>
  //         </head>
  //         <body>
  //           <div id="app">${appString}</div>
  //           <script type="text/javascript">
  //             // Serialise the state into the HTML response 👇
  //             window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)}
  //           </script>
  //         </body>
  //       </html>`
 
  //     res.send(html)
  //   })
    // componentWillMount() {
    //   setTimeout(() => {
    //     let playerTurn = this.state.game.turn % 2;
    //     return <Hand player={this.state.game.players[playerTurn]} />
    //   }, 5);  
    // }

    handleSetNull() {
      this.state.game.boardLocation = null;
      this.setState({boardLocation: null});
    }

  render(){
    console.log(window.location.href.split('/'))
    if(this.state.loading === true){
      console.log("hey");
      return(
        <div>Loading..</div>
        
      )
    }else{

      let playerTurn = this.state.game.turn % 2;


      return(
        <div className="page">
          <div className="playerSection pageItem"><Hand player={this.state.game.players[0]} turn = {this.state.game.turn} selectCard = {this.selectCard} deselectCard={this.handleDeselectCard}/>
          </div>
          <div className="boardContainer">
            <div className="header pageItem"><Header setNull = {this.handleSetNull}/></div>
            <div className="boardComp pageItem"><Board dropCard={this.handleDropCard} boardArray={this.state.game.board} /></div>
            <div className="footer pageItem"><Footer setNull = {this.handleSetNull}/></div>
          </div>
          <div className="playerSection pageItem"><Hand player={this.state.game.players[1]} turn = {this.state.game.turn + 1} selectCard = {this.selectCard} deselectCard={this.handleDeselectCard}/></div>
        </div>
      );
    }

    // setTimeout(() => {
      
      
    // }, 5000);

  }
}
