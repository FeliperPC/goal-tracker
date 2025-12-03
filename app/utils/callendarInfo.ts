const date = new Date()
  const months = [
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
    "December"
  ];
  export const dateInfo = {
    month : months[date.getMonth()],
    year : date.getFullYear(),
    day : date.getDay()
  }