export const formatDate = (date:string) => {
    const longMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decemeber",
    ];
    // const isoDate = new Date(date);
    // const day = isoDate.getDate()+1;
    // const month = longMonths[isoDate.getMonth()];
    // const year = isoDate.getFullYear();
    // const fullDate = `${day}-${month}-${year}`;
    // return fullDate;
    const longDate = date.split("T")[0];
    const day = longDate.split("-")[2];
    const month = longMonths[parseInt(longDate.split("-")[1]) - 1];
    const year = longDate.split("-")[0];
    const returnDate = `${day}-${month}-${year}`;
    return returnDate;
};

export const formatDate2 = (date:string) => {
    const longMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decemeber",
    ];
    const longDate = date.split("T")[0];
    const day = longDate.split("-")[2];
    const month = longMonths[parseInt(longDate.split("-")[1]) - 1];
    const year = longDate.split("-")[0];
    const returnDate = `${day} ${month} ${year}`;
    return returnDate;
};
