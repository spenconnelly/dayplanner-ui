import React from 'react';
import dateFormat from 'dateformat';
import './EventListCard.scss';

const EventListCard = ({ id, name, date, description }) => {
    return (
        <div className="card--container">
            <div className="header--block">
                <div>{name}</div>
                <div>{dateFormat(Date(date), 'h:MM:ss TT dddd, mmmm dS, yyyy')}</div>
            </div>
            <div className="body--block">
                {description}
            </div>
        </div>
    );
};

export default EventListCard;
