import React from 'react';
import './Footer.css';
import {FooterMenu, ColumnMenu, FooterContacts} from '../index';
import {aboutCompanyData, firstMenuData, secondMenuData} from '../../data/data';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer-left'}>
                <FooterMenu title={'О Компании'}>
                    <ColumnMenu data={aboutCompanyData}/>
                </FooterMenu>
                <FooterMenu title={'Меню'}>
                    <ColumnMenu data={firstMenuData}/>
                    <ColumnMenu data={secondMenuData}/>
                </FooterMenu>
            </div>
            <div className={'footer-right'}>
                <FooterMenu title={'Контакты'}>
                    <FooterContacts/>
                </FooterMenu>
            </div>
            <div className={'copyright'}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <a href="#">Политика конфиденциальности</a>
            </div>
        </footer>
    );
};

export default Footer;