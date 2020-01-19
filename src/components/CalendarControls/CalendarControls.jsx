import React from 'react';
import Title from '../Title/Title';
import { Button } from 'reactstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SET_MONTH_FOCUS, SET_YEAR_FOCUS } from '../../apollo/mutations';
import { monthDict } from '../../constants/dateDicts';
import './CalendarControls.scss';
import { useMutation } from '@apollo/client';

const CalendarControls = ({monthFocus, yearFocus}) => {
    const [setMonthFocus] = useMutation(SET_MONTH_FOCUS);
    const [setYearFocus] = useMutation(SET_YEAR_FOCUS);

    const incrementMonth = () => {
        const month = monthFocus === 11 ? 0 : monthFocus + 1;
        const year = monthFocus === 11 ? yearFocus + 1 : yearFocus;

        setMonthFocus({ variables: { month } });
        setYearFocus({ variables: { year } });
    };

    const reduceMonth = () => {
        const month = monthFocus === 0 ? 11 : monthFocus - 1;
        const year = monthFocus === 0 ? yearFocus - 1 : yearFocus;

        setMonthFocus({ variables: { month } });
        setYearFocus({ variables: { year } });
    };

    return (
        <div className="calendar-controls--container">
            <Button onClick={reduceMonth} className="control--button" color="warning"><IoIosArrowBack /></Button>
            <div className="title--container">
                <Title>{monthDict[monthFocus]} {yearFocus}</Title>
            </div>
            <Button onClick={incrementMonth} className="control--button" color="warning"><IoIosArrowForward /></Button>
        </div>
    );
};

export default CalendarControls;
