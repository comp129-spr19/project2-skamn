let today = new Date();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
const badgeImages = require("../js/badge_images.json");
let dateSelected = null;

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

let monthAndYear = document.getElementById("monthAndYear");

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = getDaysInMonth(month, year);

  // body of the calendar
  let tbl = document.getElementById("calendar-body");

  // let t = document.createTextNode("CLICK ME");

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  getDataFromFile(results => {
    const data = results;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("tr");

      //creating individual cells, filling them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          formatDateCell(cell, date, month, year);
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          let cell = document.createElement("td");
          formatDateCell(cell, date, month, year);
          let cellText = document.createTextNode(date);
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            cell.classList.add("calendar-current-date");
          }

          // Check if date has a badge achievement
          for (let key in data) {
            if (data[key]["badgeDate"] === `${month + 1}/${date}/${year}`) {
              cell.classList.add("date-has-badge");
              break;
            }
          }

          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      // appending each row into calendar body
      tbl.appendChild(row);
    }
  }, "badgeachievements");
}

function formatDateCell(cell, date, month, year) {
  cell.classList.add("calendar-date");
  cell.setAttribute("data-toggle", "modal");
  cell.setAttribute("data-target", "#calendarModal");
  cell.onclick = () => (dateSelected = `${month + 1}/${date}/${year}`);
}

/* MODAL OPEN */
try {
  $("#calendarModal").on("show.bs.modal", function(event) {
    getDataFromFile(results => {
      const data = results;
      const badgesDisplayElem = document.getElementById("badges-display");

      // Clear badges display
      badgesDisplayElem.innerHTML = "";

      for (let key in data) {
        if (data[key]["badgeDate"] === dateSelected) {
          const badgeSect = document.createElement("div");

          // DISPLAY BADGE EARNED
          const badgeElem = document.createElement("img");
          badgeElem.style.display = "";
          badgeElem.src = badgeImages[data[key]["badgeName"]];
          badgeElem.classList.add("badge-earned");

          // DISPLAY BADGE LABEL
          const badgeLabelElem = document.createElement("label");
          badgeLabelElem.innerHTML = data[key]["badgeName"];

          badgeSect.appendChild(badgeElem);
          badgeSect.appendChild(badgeLabelElem);
          badgesDisplayElem.appendChild(badgeSect);
        }
      }
    }, "badgeachievements");
    console.log(dateSelected);

    // CHANGE TITLE
    const modalTitle = document.getElementById("calendarModalLabel");
    modalTitle.innerHTML = dateSelected;
  });
} catch (err) {
  console.log("jQuery not included");
}

function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

module.exports = {
  badgeImages,
  getDaysInMonth
};
