// const firstDay = new Date(year, month).getDay();

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

module.exports = {
  daysInMonth
};
