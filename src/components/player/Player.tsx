import React from 'react';
import './Player.css';
import Albums from './Albums';

const Player = () => {
    return (
        <div className="container">
            <div id="top">
                <Albums />
            </div>
            <div id="info"></div>
        </div>
    );
};

export default Player;