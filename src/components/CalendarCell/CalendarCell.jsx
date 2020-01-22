import React from 'react';
import './CalendarCell.scss';
import CalendarEventCard from '../CalendarEventCard/CalendarEventCard';

const CalendarCell = ({ dayNum, isToday, notCurrentMonth = false, onClick, date }) => {
    if (date) console.log(date);

    return (
        <div onClick={onClick} className={'day-cell--container ' + (notCurrentMonth ? 'not-current-month--modifier' : null)}>
            <div className={'number--container ' + (isToday ? 'number-today--modifier' : null)}>
                 {dayNum}
            </div>
            { !notCurrentMonth &&
                <div className="calendar-event-card--container">

                </div>
            }
        </div>
    );
};

export default CalendarCell;
