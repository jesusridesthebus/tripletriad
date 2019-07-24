import React, { Component } from 'react';
import './Board.css';
import PropTypes from 'prop-types';
import 'animate.css';

export default function Board(props) {

  function dropCard(position) {
    props.dropCard(position);
  }

  function deselectCard() {
    props.deselectCard();
  }

  function both(position) {
    props.dropCard(position);
    props.deselectCard();
  }

  return(
    <div className='board'>

      {props.boardArray.map((square, index) => {
      if(isNaN(square) === true){
        return <div onClick={() => both(index)} onDragOver={() => dropCard(index)} className={`boardItem a${index}`}><img className={`imgCard b${index} animated faster`} src={require(`./../assets/img/${square.id}_${square.owner}.png`)} /></div>
      }else{
       return <div onClick={() => both(index)} onDragOver={() => dropCard(index)} className={`boardItem a${index}`}></div>
          }   
      }
      )}
    </div>
  );
}

Board.propTypes = {
  dropCard: PropTypes.func,
  boardArray: PropTypes.array,
  deselectCard: PropTypes.func
}