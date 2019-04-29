let today = new Date();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

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
  let tbl = document.getElementById("calendar-body"); // body of the calendar
<<<<<<< HEAD
=======

  let t = document.createTextNode("CLICK ME");

>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {     
    // creates a table row
    let row = document.createElement("tr");
    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        // creating buttons
        let btn = document.createElement("button");
        btn.id = "dates", btn.value = date, btn.innerHTML = date;
        console.log(btn.value);
        btn.onclick = () => alert(btn.value);
        let cell = document.createElement("td");
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
        // let cellText = document.createTextNode(date);
        let btn = document.createElement("BUTTON");
        btn.innerHTML = date;
        btn.value = date;
        btn.id = "dates";
        // displaying modal after date has been clicked on in calendar
        btn.onclick = () => makeModal(btn, btn.value, month, year);
<<<<<<< HEAD
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
=======
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.classList.add("bg-info");
          cell.classList.add("../badge-images/goal-30days.png");
        } // color today's date
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // cell.appendChild(cellText);
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
=======
        // cell.appendChild(cellText);
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
        cell.appendChild(btn);
        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row); // appending each row into calendar body.
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
}

function makeModal(btn, date, month, year) {
  let modalBtn = btn;
  let modal = document.getElementById("myModal");
  let value = document.getElementById("modalText");
  let id;
  let i = 0;
  let result = [];
  const nameArr = [];
  const dateArr = [];

  let actualMonth = month + 1;
<<<<<<< HEAD

  getDataFromFile(function(data) {
    if (data != null) {
      for (id in data) {
        if (data[id]["badgeDate"] != 0) {
          nameArr.push(data[id]["badgeName"]);
          dateArr.push(data[id]["badgeDate"]);
        }
      }
    }

=======

  getDataFromFile(function(data) {
    if (data != null) {
      for (id in data) {
        if (data[id]["badgeDate"] != 0) {
          nameArr.push(data[id]["badgeName"]);
          dateArr.push(data[id]["badgeDate"]);
        }
      }
    }

>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
    for (i = 0; i < dateArr.length; i++) {
      result = dateArr[i].split("/");
      if (result[0] == actualMonth && result[1] == date && result[2] == year) {
        value.innerHTML += "<br>" + nameArr[i];
      }
    }
  }, "badgeachievements");

  // Displays Modal after clicking on box inside Calendar
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    value.innerHTML = "";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      value.innerHTML = "";
    }
  };
<<<<<<< HEAD
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
=======
>>>>>>> 7709fa8d6380904c4e5e4262cf6d05baf1df8de6
}

function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

function checkBadgesAchieved() {
  drink64ozBadge();
  doubleGoalBadge();
  inputConsumptionThreeinDay();
}

module.exports = {
  getDaysInMonth
};
