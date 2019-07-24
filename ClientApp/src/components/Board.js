import React, { Component } from 'react';
import './Board.css';
import PropTypes from 'prop-types';

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
        return <div onClick={() => both(index)} onDragOver={() => dropCard(index)} className={`boardItem a${index}`}><img className='imgCard' src={require(`./../assets/img/${square.id}_${square.owner}.png`)} /></div>
      }else{
       return <div onClick={() => both(index)} onDragOver={() => dropCard(index)} className={`boardItem a${index}`}>{index}</div>
          }   
      }
      )}
      {/* <div onDragOver={() => dropCard(1)} className='boardItem a1'></div>
      <div onDragOver={() => dropCard(2)} className='boardItem a2'></div>
      <div onDragOver={() => dropCard(3)} className='boardItem a3'></div>
      <div onDragOver={() => dropCard(4)} className='boardItem a4'></div>
      <div onDragOver={() => dropCard(5)} className='boardItem a5'></div>
      <div onDragOver={() => dropCard(6)} className='boardItem a6'></div>
      <div onDragOver={() => dropCard(7)} className='boardItem a7'></div>
      <div onDragOver={() => dropCard(8)} className='boardItem a8'></div> */}
    </div>
  );
}

Board.propTypes = {
  dropCard: PropTypes.func,
  boardArray: PropTypes.array,
  deselectCard: PropTypes.func
}