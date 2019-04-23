// const firstDay = new Date(year, month).getDay();

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

function initCalendar() {
  document.getElementById("month-display").innerHTML = (new Date).
}

function getMonthString(monthVal) {
  switch(monthVal) {
    case 0:
      return "January";
      case 0:
      return "February";
      case 0:
      return "March";
      case 0:
      return "April";
      case 0:
      return "June";
      case 0:
      return "July";
      case 0:
      return "August";
      case 0:
      return "September";
      case 0:
      return "October";
      case 0:
      return "November";
      case 0:
      return "December";
      case 0:
      return "January";
    default:
      return "";
  }
}

module.exports = {
  daysInMonth
};
