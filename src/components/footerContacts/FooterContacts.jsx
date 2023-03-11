import React from 'react';
import './FooterContacts.css';
import {Socials} from '../index';

const FooterContacts = () => {
    return (
        <ul className={'footer-contacts'}>
            <li><a href="#">+7 555 555-55-55</a></li>
            <li><Socials styles={{gap: '10px'}}/></li>
            <li><p>Москва, Путевой проезд 3с1, к 902</p></li>
        </ul>
    );
};

export default FooterContacts;