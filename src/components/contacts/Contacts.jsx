import React from 'react';
import './Contacts.css';
import {Socials} from '../index';

const Contacts = ({classname = ''}) => {
    return (
        <div className={`contacts ${classname}`}>
            <div className={'phone'}>
                <a href={'#'}>+7 555 555-55-55</a>
            </div>
            <Socials styles={{gap: '30px'}}/>
        </div>
    );
};

export default Contacts;