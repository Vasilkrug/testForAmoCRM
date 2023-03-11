import React from 'react';
import './Light.css';

const Light = ({classname}) => {
    return (
        <div className={`light ${classname}`}></div>
    );
};

export default Light;