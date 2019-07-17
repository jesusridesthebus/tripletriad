import React, { Component } from 'react';
import './Board.css';
import './Hand.css';
import testImg from './../assets/img/1_b.png';

export default function Hand() {
  return(
    <div className="hand">
      <img src={testImg} />
      <img src={testImg} />
      <img src={testImg} />
      <img src={testImg} />
      <img src={testImg} />
    </div>
  );
}
