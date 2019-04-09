let dailyGoal = 0;
let dailyGoalMet = false;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

getDataFromFile(function(data) {
  dailyGoal = data.dailyGoal;
  dailyGoalMet = data.dailyGoalMet;
  totalWaterDrankToday = data.totalWaterDrankToday;
  waterDrankRecently = data.waterDrankRecently;

  initializeData();
});

function initializeData() {
  // Update labels to reflect data

  document.getElementById("currentDailyGoal").innerHTML = dailyGoal;

  document.getElementById(
    "totalWaterDrankToday"
  ).innerHTML = totalWaterDrankToday;
}

function saveData() {
  // Save to file
  setDataToFile({
    dailyGoal,
    dailyGoalMet,
    totalWaterDrankToday,
    waterDrankRecently
  });
}

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

  // Save to file
  saveData();

  // Update label to reflect new daily goal
  document.getElementById("currentDailyGoal").innerHTML = dailyGoal;
}

function setWaterDrankRecently(e) {
  if (e) {
    e.preventDefault();
  }
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
  if (!dailyGoalMet && totalWaterDrankToday >= dailyGoal) {
    dailyGoalMet = true;
    try {
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
    } catch (err) {
      console.log("Daily water goal met but notification not shown");
      console.log(err.message);
    }
  }

  // Save to file
  saveData();
}

function getDailyGoalMet() {
  return dailyGoalMet;
}

function getDailyGoal() {
  return dailyGoal;
}

module.exports = {
  getDailyGoal,
  getDailyGoalMet,
  setGoal,
  setWaterDrankRecently
};
