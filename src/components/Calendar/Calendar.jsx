import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_FOCUS_DATE } from '../../apollo/queries';
import { dayDict, centuryCodes, monthCodes, numDaysDict } from '../../constants/dateDicts';
import { isLeapYear } from '../../utils/monthUtils';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import CalendarControls from '../CalendarControls/CalendarControls';
import './Calendar.scss';
import DayNameCell from '../DayNameCell/DayNameCell';
import CalendarCell from '../CalendarCell/CalendarCell';

const Calendar = () => {
    const { data: dateData, loading: dateLoading } = useQuery(GET_CURRENT_FOCUS_DATE);

    const prevMonthCells = [];
    const monthCells = [];
    const nextMonthCells = [];

    const firstDayOfMonth = (month, year) => {
        const lastTwoYearDigits = year % 100;
        const monthCoefficient = Math.floor(lastTwoYearDigits/ 4) + 1 + monthCodes[month];
        const leapYearCoefficient = isLeapYear(year) && (month === 0 || month === 1) ? 1 : 0;
        const centuryCoefficient = centuryCodes[Math.floor(year/100)];
        const numDay = (monthCoefficient - leapYearCoefficient + centuryCoefficient + lastTwoYearDigits) % 7 - 1;
        return numDay === -1 ? 6 : numDay;
    };

    const populatePrevMonthCells = (month, year) => {
        const lastMonth = month - 1 < 0 ? 11 : month - 1;
        const lastMonthNumDays = numDaysDict(year)[lastMonth];

        for (let i = 0; i < firstDayOfMonth(month, year); i++) {
            const cell = { dayNum: lastMonthNumDays - i };
            prevMonthCells.unshift(cell);
        }
    };

    const populateCurrentMonthCells = (month, year) => {
        for(let i = 1; i <= numDaysDict(year)[ month]; i++) {
            const cell = { dayNum: i };
            monthCells.push(cell);
        }
    };

    const populateNextMonthCells = (month, year) => {
        const weekRemainder = (monthCells.length +prevMonthCells.length) % 7;
        const numNextMonthDays = weekRemainder === 0 ? 0 : 7 - weekRemainder;
        for(let i = 0; i < numNextMonthDays; i++) {
            nextMonthCells.push({ dayNum: i + 1 });
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
                { prevMonthCells.map(({ dayNum }) => <CalendarCell key={dayNum} dayNum={dayNum} notCurrentMonth={true} />) }
                { monthCells.map(({ dayNum }) => <CalendarCell key={dayNum} dayNum={dayNum} />) }
                { nextMonthCells.map(({ dayNum }) => <CalendarCell key={dayNum} dayNum={dayNum} notCurrentMonth={true} />) }
            </div>
        </div> : null;
};

export default Calendar;
