import React from 'react';
import './FooterMenu.css';

const FooterMenu = ({children,title}) => {
    return (
        <div className={'footer-menu'}>
            <h3>{title}</h3>
            <div className={'footer-menu-list'}>
                {children}
            </div>
        </div>
    );
};

export default FooterMenu;