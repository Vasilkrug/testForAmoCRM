import React from 'react';
import './CustomButton.css';

const CustomButton = ({classname}) => {
    return (
        <button className={`btn ${classname}`}>Получить консультацию</button>
    );
};

export default CustomButton;