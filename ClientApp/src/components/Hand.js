import React, { Component } from 'react';
import './Board.css';
import './Hand.css';
import {ImagesRed, ImagesBlue} from './Images';

// import testImg from './../assets/img/id/_b.png';
import PropTypes from 'prop-types';
export default function Hand(props) {
  setTimeout( () => {console.log(props.player[0].id)}, 3000);
  return(
    
    <div className="hand">
      {/* {props.player.map(p => {
        {card.push (require('./../assets/img/'+p.id+'/_'+p.owner+'.png'))}
      })} */}
      <img src={ImagesRed[0].src} />
    </div>
  );
}

Hand.propTypes = {
  player: PropTypes.array
}