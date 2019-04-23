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
let daysInMonthArr = [];
let todayDate;
let currentMonthIndex;
let currentMonth;
let currentYear;
let currentDayOfWeek;

window.onload = initPage;

function initPage() {
  todayDateFull = new Date();
  todayDate = todayDateFull.getDate();
  currentMonthIndex = todayDateFull.getMonth();
  currentMonth = months[currentMonthIndex];
  currentYear = todayDateFull.getFullYear();
  currentDayOfWeek = todayDateFull.getDay();
  //   console.log(months[currentMonthIndex]);
  //   console.log("TD: " + todayDate);
  //   console.log(currentYear);
  //   console.log(currentDayOfWeek);
  let todayDateSimple =
    months[currentMonthIndex] + " " + todayDate + ", " + currentYear;

  document.getElementById("todayDate").innerHTML = todayDateSimple;
  showCalendar(currentMonth, todayDate, currentYear);
}

function showCalendar(currentMonth, currentDate, currentYear) {
  //   console.log(currentMonth);
  //   console.log(currentDate);
  //   console.log(currentYear);

  let i = 0;
  let j = 0;
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
  let cellText, cell;
  let breakTag = document.createElement("BR");
  body.appendChild(breakTag);

  for (i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (j = 0; j < week.length; j++) {
      cell = document.createElement("td");
      if (i == 0) {
        cellText = document.createTextNode(week[j]);
        cell.append(cellText);
      } else {
        cell.append("APPLE");
        getInformation();
      }
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "4");
}

function getInformation() {
  for (let i = 0; i < months.length; i++) {
    daysInMonthArr[i] = getDaysInMonth(i + 1, currentYear);
  }
  console.log(daysInMonthArr);
}

let getDaysInMonth = function(month, year) {
  return new Date(year, month, 0).getDate();
};
