import React from 'react';
import './Logo.css';
import {logo} from '../../assets/icons/icons';

const Logo = ({classname = ''}) => {
    return (
        <div className={`logo ${classname}`}>
            <div className={'logo-img'}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={'logo-text'}>
                <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
        </div>
    );
};

export default Logo;