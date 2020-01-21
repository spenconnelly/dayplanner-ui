import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CURRENT_FOCUS_DATE } from '../../apollo/queries';
import { SET_MONTH_FOCUS, SET_YEAR_FOCUS } from '../../apollo/mutations';
import { dayDict, numDaysDict } from '../../constants/dateDicts';
import { incrementMonth, reduceMonth } from '../../utils/monthUtils';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import CalendarControls from '../CalendarControls/CalendarControls';
import './Calendar.scss';
import DayNameCell from '../DayNameCell/DayNameCell';
import CalendarCell from '../CalendarCell/CalendarCell';

const Calendar = () => {
    const { data: dateData, loading: dateLoading } = useQuery(GET_CURRENT_FOCUS_DATE);
    const [setMonthFocus] = useMutation(SET_MONTH_FOCUS);
    const [setYearFocus] = useMutation(SET_YEAR_FOCUS);

    const today = new Date();

    const prevMonthCells = [];
    const monthCells = [];
    const nextMonthCells = [];

    const firstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const populatePrevMonthCells = (month, year) => {
        const lastMonth = month - 1 < 0 ? 11 : month - 1;
        const lastMonthNumDays = numDaysDict(year)[lastMonth];

        for (let i = 0; i < firstDayOfMonth(month, year); i++) {
            const cell = {
                dayNum: lastMonthNumDays - i,
                onClick: () => reduceMonth(month, year, setMonthFocus, setYearFocus)
            };

            prevMonthCells.unshift(cell);
        }
    };

    const populateCurrentMonthCells = (month, year) => {
        for(let i = 1; i <= numDaysDict(year)[ month]; i++) {
            const date = new Date(year, month, i);

            const cell = {
                dayNum: i,
                date,
                isToday: date.setHours(0,0,0,0) === today.setHours(0,0,0,0),
            };

            monthCells.push(cell);
        }
    };

    const populateNextMonthCells = (month, year) => {
        const weekRemainder = (monthCells.length +prevMonthCells.length) % 7;
        const numNextMonthDays = weekRemainder === 0 ? 0 : 7 - weekRemainder;
        for(let i = 0; i < numNextMonthDays; i++) {
            const cell = {
                dayNum: i + 1,
                onClick: () => incrementMonth(month, year, setMonthFocus, setYearFocus)
            };
            nextMonthCells.push(cell);
        }
    };

    const populateCells = (month, year) => {
        populatePrevMonthCells(month, year);
        populateCurrentMonthCells(month, year);
        populateNextMonthCells(month, year);
    };

    if (dateLoading) return <LoadingIcon />;

    if (dateData) populateCells(dateData.monthFocus, dateData.yearFocus);

    return dateData ?
        <div className="calendar--container">
            <CalendarControls monthFocus={dateData.monthFocus} yearFocus={dateData.yearFocus} />
            <div className="dayname-cells--container">
                { Object.values(dayDict).map(dayName => <DayNameCell key={dayName}>{dayName}</DayNameCell>) }
            </div>
            <div className="calendar-cell--container">
                {
                    prevMonthCells.map(({ dayNum, onClick }) =>
                        <CalendarCell
                            onClick={onClick}
                            key={dayNum}
                            dayNum={dayNum}
                            notCurrentMonth={true}
                        />
                )}
                {
                    monthCells.map(({ dayNum, isToday, date }) =>
                        <CalendarCell
                            key={date}
                            date={date}
                            isToday={isToday}
                            dayNum={dayNum}
                        />
                )}
                {
                    nextMonthCells.map(({ dayNum, onClick }) =>
                        <CalendarCell
                            key={dayNum}
                            onClick={onClick}
                            dayNum={dayNum}
                            notCurrentMonth={true}
                        />)
                }
            </div>
        </div> : null;
};

export default Calendar;
