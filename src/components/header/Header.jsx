import React from 'react';
import './Header.css';
import {Ball,Light,Contacts,Nav, Logo} from '../index';

const Header = () => {
    return (
        <header className={'header'}>
            <Logo classname={'mobile-none'}/>
            <Nav classname={'mobile-none'}/>
            <Contacts classname={'mobile-none'}/>
            <Light classname={'purple-light'}/>
            <Ball classname={'purple-ball'}/>
            <Ball classname={'red-ball'}/>
        </header>
    );
};

export default Header;