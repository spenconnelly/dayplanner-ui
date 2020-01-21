export const isLeapYear = (year) => {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

export const incrementMonth = (month, year, setMonth, setYear) => {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    setMonth({ variables: { month: nextMonth } });
    setYear({ variables: { year: nextYear } });
};

export const reduceMonth = (month, year, setMonth, setYear) => {
    const nextMonth = month === 0 ? 11 : month - 1;
    const nextYear = month === 0 ? year - 1 : year;

    setMonth({ variables: { month: nextMonth } });
    setYear({ variables: { year: nextYear } });
};
