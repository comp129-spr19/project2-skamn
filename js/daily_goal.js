let dailyGoalMet = false;
const HYDRATION_TIMER_MAX = 5;
let hydrationTimer = HYDRATION_TIMER_MAX;

function getDailyGoal() {
  return parseInt(document.getElementById("currentDailyGoal").innerHTML);
}

function setDailyGoal(newGoal) {
  document.getElementById("currentDailyGoal").innerHTML = newGoal;
}

function validateUserNumberInput(userInput) {
  let result = {
    valid: false,
    msg: ""
  };

  if (!userInput || isNaN(userInput)) {
    result.msg = "Please enter a number";
  } else if (userInput < 1) {
    result.msg = "Please enter a number greater than 0";
  } else {
    result.valid = true;
    result.msg = "Success";
  }

  return result;
}

function setGoal(e) {
  if (e) {
    e.preventDefault();
  }

  // Get user input
  const dailyGoalInputElem = document.getElementById("dailyGoalUserInput");
  const dailyGoalInputValue = dailyGoalInputElem.value;

  // Validate user input
  const inputValidationResults = validateUserNumberInput(dailyGoalInputValue);
  if (!inputValidationResults.valid) {
    alert(inputValidationResults.msg);
    return;
  }

  // Update DOM
  setDailyGoal(dailyGoalInputValue);
  updateDependentComponents();

  // Save to file
  saveData();
}

function getTotalWaterDrankToday() {
  return parseInt(document.getElementById("totalWaterDrankToday").innerHTML);
}

function setTotalWaterDrankToday(totalWater) {
  document.getElementById("totalWaterDrankToday").innerHTML = totalWater;
}

function getDailyGoalMet() {
  return dailyGoalMet;
}

function setDailyGoalMet(goalMet) {
  dailyGoalMet = goalMet;
}

function checkGoal() {
  return !getDailyGoalMet() && getTotalWaterDrankToday() >= getDailyGoal();
}

function displayGoalNotification() {
  try {
    let goalReachedNotification = new Notification(
      "Daily Water Consumption Goal Reached!",
      {
        body:
          "Congrats! You aimed to drink " +
          getDailyGoal() +
          " oz of water and you reached today's goal! Keep it up!"
      }
    );
    goalReachedNotification.show();
    console.log("Goal reached!");
  } catch (err) {
    console.log("Daily water goal met but notification not shown");
    console.log(err.message);
  }
}

function setWaterDrankRecently(e) {
  if (e) {
    e.preventDefault();
  }

  // retrieving value from user input
  const userInputElem = document.getElementById("waterDrankRecently");
  const waterDrankRecently = parseInt(userInputElem.value);

  // error checking on user input
  const inputValidationResults = validateUserNumberInput(waterDrankRecently);
  if (!inputValidationResults.valid) {
    alert(inputValidationResults.msg);
    return;
  }

  // Update DOM
  const newTotalWaterDrank = getTotalWaterDrankToday() + waterDrankRecently;
  setTotalWaterDrankToday(newTotalWaterDrank);
  updateDependentComponents();

  // Update Hydration Timer
  hydrationTimer = HYDRATION_TIMER_MAX;

  // Check if daily goal was met
  if (checkGoal()) {
    console.log("here");
    setDailyGoalMet(true);
    displayGoalNotification();
  }

  // Save data to storage
  saveData();
}

function updateWaterStillNeeded() {
  // subtract appropriate values to calculate needed water
  // water that still needs to be consumed
  const waterNeeded = Math.max(getDailyGoal() - getTotalWaterDrankToday(), 0);
  document.getElementById("waterNeeded").innerHTML = waterNeeded;
}

function updatePercentageGoal() {
  const totalWaterDrankToday = getTotalWaterDrankToday();
  const dailyGoal = getDailyGoal();
  // divide appropriate values to calculate
  // percentatge of water consumed
  let percentage = (totalWaterDrankToday / dailyGoal) * 100 || 0;
  // adding percentage sign to the value calculated
  percentage = percentage.toFixed(1) + "%";
  document.getElementById("percentageWaterConsumed").innerHTML = percentage;
}

function updateProgressBar() {
  const dailyGoal = getDailyGoal();
  const totalWaterDrankToday = getTotalWaterDrankToday();

  var elem = document.getElementById("my-bar");
  const width = Math.min((totalWaterDrankToday / dailyGoal) * 100, 100) + "%";

  // Update progress bar in DOM after delay
  setTimeout(function() {
    elem.style.width = width;
  }, 100);
}

function updateDependentComponents() {
  updateWaterStillNeeded();
  updatePercentageGoal();
  updateProgressBar();
}

function updateGraphic() {
  const plantGraphic = document.getElementById("plant-graphic");

  if (hydrationTimer === -99) {
    plantGraphic.src = "../images/DeadRose.jpg";
    return;
  }

  hydrationTimer--;

  if (hydrationTimer <= 0) {
    hydrationTimer = -99;
    plantGraphic.src = "../images/DeadRose.jpg";
    alert(
      "Uh oh, you're getting dehydrated. You should drink some more water!"
    );
  } else {
    plantGraphic.src = "../images/AliveRose.jpg";
  }

  saveData();
  console.log("Hydration Timer: ", hydrationTimer);
}

window.onload = function() {
  // Load data from storage and initialize app data with the storage data
  getDataFromFile(function(data) {
    setDailyGoal(data.dailyGoal || 0);
    dailyGoalMet = data.dailyGoalMet || false;
    setTotalWaterDrankToday(data.totalWaterDrankToday || 0);
    hydrationTimer = data.hydrationTimer || HYDRATION_TIMER_MAX;

    updateDependentComponents();
    updateGraphic();
  });

  setInterval(updateGraphic, 1000);
};

module.exports = {
  getDailyGoal,
  setDailyGoal,
  validateUserNumberInput,
  checkGoal,
  getDailyGoalMet,
  setGoal,
  setWaterDrankRecently,
  updateWaterStillNeeded
};
