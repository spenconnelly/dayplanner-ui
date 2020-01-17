import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_FOCUS_DATE, GET_CURRENT_EVENTS } from '../../apollo/queries';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import Title from '../Title/Title';

const Calendar = () => {
    const { data: dateData, loading: dateLoading } = useQuery(GET_CURRENT_FOCUS_DATE);
    const { data: eventsData, loading: eventsLoading } = useQuery(GET_CURRENT_EVENTS);

    if (dateLoading || eventsLoading) return <LoadingIcon />;
    return dateData ?
        <div>
            <Title>{dateData.yearFocus}</Title>
        </div> : null;
};

export default Calendar;
