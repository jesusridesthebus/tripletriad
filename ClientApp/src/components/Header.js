import React, { Component } from 'react';
import './Board.css';
import PropTypes from 'prop-types';



export default function Header(props) {
  function setNull() {
    props.setNull();
  }
    return(
      <div>
        <h1 onDragOver={() => setNull()}>Triple Triad</h1>
      </div>
    );
}

Header.propTypes = {
  setNull: PropTypes.func
}
