import React, { Component } from 'react';
import './Board.css';
import './Hand.css';
import {ImagesRed, ImagesBlue} from './Images';

// import testImg from './../assets/img/id/_b.png';
import PropTypes from 'prop-types';
export default function Hand(props) {
  console.log(props.player);
  return(
    <div className="hand">
    {props.player.map((hand) => 
      <img src={require(`./../assets/img/${hand.id}_${hand.owner}.png`)} />
    )}
    </div>
  );
}

Hand.propTypes = {
  player: PropTypes.array
}