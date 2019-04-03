let dailyGoal = 0;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

function setGoal(e) {
  if (e) {
    e.preventDefault();
  }
  let dailyGoalUserInputValue = document.getElementById("dailyGoalUserInput")
    .value;
  if (dailyGoalUserInputValue == null) {
    dailyGoal = 1;
  } else if (isNaN(dailyGoalUserInputValue)) {
    alert("Please enter a number");
    return;
  } else if (dailyGoalUserInputValue < 1) {
    alert("Please enter a positive number");
    return;
  }
  dailyGoal = dailyGoalUserInputValue;
  // Update label to reflect new daily goal
  document.getElementById("currentDailyGoal").innerHTML = dailyGoal;
}

function setWaterDrankRecently(e) {
  e.preventDefault();
  // retrieving value from user input
  waterDrankRecently = document.getElementById("waterDrankRecently").value;
  // error checking on user input
  if (isNaN(waterDrankRecently)) {
    alert("Please enter a number!");
    return;
  }
  if (waterDrankRecently < 1) {
    alert("Please enter a number greater than 0!");
    return;
  }
  // adding the previous totalWaterDrankToday with new user input
  totalWaterDrankToday =
    parseInt(totalWaterDrankToday) + parseInt(waterDrankRecently);
  // making change to application
  document.getElementById(
    "totalWaterDrankToday"
  ).innerHTML = totalWaterDrankToday;
  if (totalWaterDrankToday >= dailyGoal) {
    let goalReachedNotification = new Notification(
      "Daily Water Consumption Goal Reached!",
      {
        body:
          "Congrats! You aimed to drink " +
          dailyGoal +
          " oz of water and you reached today's goal! Keep it up!"
      }
    );
    goalReachedNotification.show();
  }
}

function getDailyGoal() {
  return dailyGoal;
}

module.exports = {
  getDailyGoal,
  setGoal,
  setWaterDrankRecently
};
