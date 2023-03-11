import React from 'react';
import './ColumnMenu.css';

const ColumnMenu = ({data}) => {
    return (
        <ul className={'menu-column'}>
            {data.map(item => {
                return <li key={item.id}>
                    <a href={item.path}>{item.link}</a>
                </li>
            })}
        </ul>
    );
};

export default ColumnMenu;