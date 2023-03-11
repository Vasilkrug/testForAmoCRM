import React from 'react';
import './MobileGifts.css';

const MobileGifts = ({data}) => {
    return (
        <ul className={'mobile-gifts'}>
            {data.map(item => {
                return <li key={item.id} className={'gift-item'}>
                    <p>{item.title}</p>
                </li>
            })}
        </ul>
    );
};

export default MobileGifts;