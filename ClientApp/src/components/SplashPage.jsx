import React from 'react';
import PropTypes from 'prop-types';
import './SplashPage.css';


function SplashPage(props){
    function setSplash() {
        props.setSplash()
    }
    return (
        <div>
        <h1>Triple Triad</h1>
        <h2 onClick={() => setSplash()}>Play</h2>
        </div>
    );
}

SplashPage.propTypes = {
    setSplash: PropTypes.func
}

export default SplashPage;