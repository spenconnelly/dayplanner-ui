import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_FOCUS_DATE } from '../../apollo/queries';
import { dayDict } from '../../constants/dateDicts';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import CalendarControls from '../CalendarControls/CalendarControls';
import './Calendar.scss';
import DayNameCell from '../DayNameCell/DayNameCell';

const Calendar = () => {
    const { data: dateData, loading: dateLoading } = useQuery(GET_CURRENT_FOCUS_DATE);

    if (dateLoading) return <LoadingIcon />;

    return dateData ?
        <div className="calendar--container">
            <CalendarControls monthFocus={dateData.monthFocus} yearFocus={dateData.yearFocus} />
            <div className="dayname-cells--container">
                { Object.values(dayDict).map(dayName => <DayNameCell key={dayName}>{dayName}</DayNameCell>) }
            </div>
            <div className="calendar-cell--container">

            </div>
        </div> : null;
};

export default Calendar;
