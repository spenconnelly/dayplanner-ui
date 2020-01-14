import React from 'react';
import './EventListCard.scss';

const EventListCard = ({ id, name, date, description }) => (
    <div className="card--container">
        <div className="header--block">
            {name}
        </div>
        <div className="body--block">
            {date}
        </div>
    </div>
);

export default EventListCard;
