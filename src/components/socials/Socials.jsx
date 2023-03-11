import React from 'react';
import './Socials.css';
import {telegram, viber, whatsapp} from '../../assets/icons/icons';

const Socials = ({styles}) => {
    return (
        <div style={styles} className={'socials'}>
            <a href={'#'}><img src={telegram} alt={'telegram'}/></a>
            <a href={'#'}><img src={viber} alt={'viber'}/></a>
            <a href={'#'}><img src={whatsapp} alt={'whatsapp'}/></a>
        </div>
    );
};

export default Socials;