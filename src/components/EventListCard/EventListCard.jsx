import React from 'react';
import './EventListCard.scss';

const EventListCard = ({ id, name, date, description }) => {

    return (
        <div className="card--container">
            <div className="header--block">
                <div>{name}</div>
                <div>{Date(date)}</div>
            </div>
            <div className="body--block">
                {description}
            </div>
        </div>
    );
};

export default EventListCard;
