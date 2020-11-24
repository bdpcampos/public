/* Date handling module */
/* Author: https://github.com/bdpcampos */


//Returns today date yyyy-mm-dd
export function getTodayDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) { month = "0" + month };
    if (day < 10) { day = "0" + day };

    return `${year}-${month}-${day}`;
}

//Fills date input with today date.
export function setTodayDate(querySelector) {
    const today = getTodayDate();

    document.querySelector(querySelector).value = today;
}

//Returns if date is ahead of today
export function isDateFuture(date) {
    const today = getTodayDate();

    return date > today;
}

//Returns if date is today
export function isDateToday(date) {
    const today = getTodayDate();

    return date === today;
}

//Returns if date is behind of today
export function isDatePast(date) {
    const today = getTodayDate();

    return date < today;
}


