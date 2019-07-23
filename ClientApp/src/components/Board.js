import React, { Component } from 'react';
import './Board.css';
import PropTypes from 'prop-types';

export default function Board(props) {

  function dropCard(position) {
    props.dropCard(position);
  }

  return(
    <div className='board'>
      <div onDragOver={() => dropCard(0)} className='boardItem a0'></div>
      <div onDragOver={() => dropCard(1)} className='boardItem a1'></div>
      <div onDragOver={() => dropCard(2)} className='boardItem a2'></div>
      <div onDragOver={() => dropCard(3)} className='boardItem a3'></div>
      <div onDragOver={() => dropCard(4)} className='boardItem a4'></div>
      <div onDragOver={() => dropCard(5)} className='boardItem a5'></div>
      <div onDragOver={() => dropCard(6)} className='boardItem a6'></div>
      <div onDragOver={() => dropCard(7)} className='boardItem a7'></div>
      <div onDragOver={() => dropCard(8)} className='boardItem a8'></div>
    </div>
  );
}

Board.propTypes = {
  dropCard: PropTypes.func
}