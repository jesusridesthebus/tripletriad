import React, { Component } from 'react';
import './Board.css';
import PropTypes from 'prop-types';



export default function Header(props) {
  function setNull() {
    props.setNull();
  }

    return(
      <div>
        <h1 className='margin15 headerTitle' onDragOver={() => setNull()}>TRIPLE TRIAD</h1>
      </div>
    );
}

Header.propTypes = {
  setNull: PropTypes.func
}
