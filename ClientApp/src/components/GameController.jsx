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
        }
      }  
    this.selectCard = this.selectCard.bind(this);
    this.handleDeselectCard = this.handleDeselectCard.bind(this);
    this.handleDropCard = this.handleDropCard.bind(this);
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
      console.log(this.state.game)
      this.state.game.players[this.state.game.turn % 2] = this.state.game.players[this.state.game.turn % 2].filter((el)=>this.state.game.selectedCard !== el.id)
      this.state.game.boardLocation = null;
      this.state.game.selectedCard = null;
       setTimeout(()=>this.state.game.turn++,5);
      // this.setState({game: this.state.game.turn+1});
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
    componentWillMount() {
      setTimeout(() => {
        let playerTurn = this.state.game.turn % 2;
        return <Hand player={this.state.game.players[playerTurn]} />
      }, 5);
      
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
          <div className="playerSection pageItem"><Hand player={this.state.game.players[0]} selectCard = {this.selectCard} deselectCard={this.handleDeselectCard}/>
          </div>
          <div className="boardContainer">
            <div className="header pageItem"><Header /></div>
            <div className="boardComp pageItem"><Board dropCard={this.handleDropCard} boardArray={this.state.game.board} /></div>
            <div className="footer pageItem"><Footer /></div>
          </div>
          <div className="playerSection pageItem"><Hand player={this.state.game.players[1]} selectCard = {this.selectCard} deselectCard={this.handleDeselectCard}/></div>
        </div>
      );
    }

    // setTimeout(() => {
      
      
    // }, 5000);

  }
}
