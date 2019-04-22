let todayDateFull;
let months = [
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

window.onload = initPage;

function initPage() {
  todayDateFull = new Date();
  let todayDate = todayDateFull.getDate();
  let currentMonthIndex = todayDateFull.getMonth();
  let currentMonth = months[currentMonthIndex];
  let currentYear = todayDateFull.getFullYear();
  console.log(months[currentMonthIndex]);
  console.log(todayDate);
  console.log(currentYear);
  let todayDateSimple =
    months[currentMonthIndex] + " " + todayDate + ", " + currentYear;

  document.getElementById("todayDate").innerHTML = todayDateSimple;
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  console.log("HELLO");
  let i = 0;
  let j = 0;
  let button;
  let cellText;
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let body = document.getElementsByTagName("body")[0];
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  let breakTag = document.createElement("BR");
  for (i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    // button = document.createElement("button");
    for (j = 0; j < 7; j++) {
      let cell = document.createElement("td");
      if (i == 0) {
        cellText = document.createTextNode("HELLO");
      }
      //   cellText = document.createTextNode("cell in row " + i + ", column " + j);
      cell.appendChild(cellText);
      row.appendChild(cell);
      //   row.append(button);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "4");
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

module.exports = {
  daysInMonth
};
