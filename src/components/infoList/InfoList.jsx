import React from 'react';
import './InfoList.css';

const InfoList = ({classname}) => {
    return (
        <ul className={`info-list ${classname}`}>
            <li className={'info-item'}>
                <h3>Виджеты</h3>
                <p>30 готовых решений</p>
            </li>
            <li className={'info-item'}>
                <h3>Dashboard</h3>
                <p>с показателями вашего бизнеса</p>
            </li>
            <li className={'info-item'}>
                <h3>Skype Аудит</h3>
                <p>отдела продаж и CRM системы</p>
            </li>
            <li className={'info-item'}>
                <h3>35 дней</h3>
                <p>использования CRM</p>
            </li>
        </ul>
    );
};

export default InfoList;