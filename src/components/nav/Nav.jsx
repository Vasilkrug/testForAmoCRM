import React from 'react';
import './Nav.css';

const Nav = ({classname = ''}) => {
    return (
        <nav className={'nav'}>
            <ul className={'nav-list'}>
                <li><a href={'#'}>Услуги</a></li>
                <li><a href={'#'}>Виджеты</a></li>
                <li><a href={'#'}>Интеграции</a></li>
                <li><a href={'#'}>Кейсы</a></li>
                <li className={classname}><a href={'#'}>Сертификаты</a></li>
            </ul>
        </nav>
    );
};

export default Nav;