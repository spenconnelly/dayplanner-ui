import React from 'react';
import Title from '../Title/Title';
import { Button } from 'reactstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SET_MONTH_FOCUS, SET_YEAR_FOCUS } from '../../apollo/mutations';
import { incrementMonth, reduceMonth } from '../../utils/monthUtils';
import { monthDict } from '../../constants/dateDicts';
import './CalendarControls.scss';
import { useMutation } from '@apollo/client';

const CalendarControls = ({monthFocus, yearFocus}) => {
    const [setMonthFocus] = useMutation(SET_MONTH_FOCUS);
    const [setYearFocus] = useMutation(SET_YEAR_FOCUS);

    return (
        <div className="calendar-controls--container">
            <Button onClick={() => reduceMonth(monthFocus, yearFocus, setMonthFocus, setYearFocus)} className="control--button" color="warning"><IoIosArrowBack /></Button>
            <div className="title--container">
                <Title>{monthDict[monthFocus]} {yearFocus}</Title>
            </div>
            <Button onClick={() => incrementMonth(monthFocus, yearFocus, setMonthFocus, setYearFocus)} className="control--button" color="warning"><IoIosArrowForward /></Button>
        </div>
    );
};

export default CalendarControls;
