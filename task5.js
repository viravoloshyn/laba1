exports.calendar = (month, year) => {
    let days = new Date(year, month, 0).getDate();

    if (year % 4 === 0) return (`Year has 366 days and ${month} month has ${days} days!!`);
    else return(`Year ${year} has 365 days and ${month} month has ${days} days!!`);


};