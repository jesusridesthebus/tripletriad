import React, { Component } from 'react';
import './Board.css';
import PropTypes from 'prop-types';

export default function Footer(props) {
  function setNull() {
    props.setNull();
  }

  return(
    <div>
      <h1 className='margin15' onDragOver={() => setNull()}></h1>
    </div>
  );
}

Footer.propTypes = {
  setNull: PropTypes.func
}