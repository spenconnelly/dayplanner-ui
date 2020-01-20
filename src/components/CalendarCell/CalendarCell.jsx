import React from 'react';
import './CalendarCell.scss';

const CalendarCell = ({ dayNum, isToday, events, notCurrentMonth = false }) => {
    return (
        <div className={'day-cell--container ' + (notCurrentMonth ? 'not-current-month--modifier' : null)}>
            {dayNum}
        </div>
    );
};

export default CalendarCell;
