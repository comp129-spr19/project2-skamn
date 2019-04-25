const getPreviousDate = date => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - 1);
  return newDate;
};

module.exports = {
  getPreviousDate
};
