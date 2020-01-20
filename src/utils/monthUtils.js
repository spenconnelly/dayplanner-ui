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
