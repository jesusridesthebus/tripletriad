import React, { Component } from 'react';
import './Board.css';
import './Hand.css';
import { ImagesRed, ImagesBlue } from './Images';

// import testImg from './../assets/img/id/_b.png';
import PropTypes from 'prop-types';
export default function Hand(props) {

  function selectCard(id) {
    props.selectCard(id)
  }

  function deselectCard() {
    props.deselectCard();
  }

  console.log(props.player);
  if (props.turn % 2 === 0) {

    return (
      <div className="hand">
        {props.player.map((hand) =>
          <div className="cardHolder">
            <img onClick={() => selectCard(hand.id)} onDragStart={() => selectCard(hand.id)} onDragEnd={() => deselectCard()} className={`card ${hand.id}`} draggable='true' src={require(`./../assets/img/${hand.id}_${hand.owner}.png`)} />
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="hand">
      {props.player.map((hand) =>
        <div className="cardHolder">
          <img className={`card ${hand.id}`} src={require(`./../assets/img/${hand.id}_${hand.owner}.png`)} />
        </div>
      )}
    </div>
  );
}

Hand.propTypes = {
  player: PropTypes.array,
  selectCard: PropTypes.func,
  deselectCard: PropTypes.func,
  hand: PropTypes.int
}