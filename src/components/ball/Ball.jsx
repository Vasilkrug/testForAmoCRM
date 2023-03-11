import React from 'react';
import './Ball.css';

const Ball = ({classname}) => {
    return (
        <div className={`ball ${classname}`}></div>
    );
};

export default Ball;