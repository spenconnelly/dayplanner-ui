export const isLeapYear = (month) => {
    if (month % 4 === 0) {
        if (month % 100 === 0 && month % 400 === 0) {
            return true;
        } else if (month % 100 === 0 && month % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    }

    return false;
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
