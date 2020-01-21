import React from 'react';
import './CalendarCell.scss';

const CalendarCell = ({ dayNum, isToday, events, notCurrentMonth = false, onClick, date }) => {
    return (
        <div onClick={onClick} className={'day-cell--container ' + (notCurrentMonth ? 'not-current-month--modifier' : null)}>
            <div className={'number--container ' + (isToday ? 'number-today--modifier' : null)}>
                 {dayNum}
            </div>
            <div>
                {/* events */}
            </div>
        </div>
    );
};

export default CalendarCell;
