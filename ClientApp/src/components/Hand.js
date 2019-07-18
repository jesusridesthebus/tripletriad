import React, { Component } from 'react';
import './Board.css';
import './Hand.css';
// import testImg from './../assets/img/id/_b.png';
import PropTypes from 'prop-types';
export default function Hand() {
  return(

    <div className="hand">
      {props.player.map(player => {
        {card1 = require('./../assets/img/'+player.id+'/_'+player.id.owner+'.png')}

      })}
      {/* <img src={} />
      <img src={testImg} />
      <img src={testImg} />
      <img src={testImg} />
      <img src={testImg} /> */}
    </div>
  );
}

Hand.propTypes = {
  player: PropTypes.array
}