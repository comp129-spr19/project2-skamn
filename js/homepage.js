let dailyGoalMet = false;
const HYDRATION_TIMER_MAX = 6;
let hydrationTimer = HYDRATION_TIMER_MAX;
let currentDate = new Date();

function getDailyGoal() {
  return parseFloat(document.getElementById("currentDailyGoal").innerHTML);
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
  return parseFloat(document.getElementById("totalWaterDrankToday").innerHTML);
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
  let userInputElem = document.getElementById("waterDrankRecently");
  let waterDrankRecently = parseInt(userInputElem.value);
  const waterDrankUnits = document.getElementById("water-drank-units").value;

  // error checking on user input
  let inputValidationResults = validateUserNumberInput(waterDrankRecently);
  if (!inputValidationResults.valid) {
    alert(inputValidationResults.msg);
    return;
  }

  // Convert input value to match display units
  const displayUnits = getCurrentDisplayUnits();
  const convertedValue =
    displayUnits === waterDrankUnits
      ? waterDrankRecently
      : convert(waterDrankRecently)
          .from(waterDrankUnits)
          .to(displayUnits);

  // Update DOM
  let newTotalWaterDrank = getTotalWaterDrankToday() + convertedValue;
  setTotalWaterDrankToday(newTotalWaterDrank.toFixed(1));
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
  let waterNeeded = Math.max(getDailyGoal() - getTotalWaterDrankToday(), 0);
  waterNeeded = Math.round(waterNeeded * 100) / 100;
  document.getElementById("waterNeeded").innerHTML = waterNeeded;
}

function updatePercentageGoal() {
  let totalWaterDrankToday = getTotalWaterDrankToday();
  let dailyGoal = getDailyGoal();
  // divide appropriate values to calculate
  // percentatge of water consumed
  let percentage = (totalWaterDrankToday / dailyGoal) * 100 || 0;
  // adding percentage sign to the value calculated
  percentage = percentage.toFixed(1) + "%";
  document.getElementById("percentageWaterConsumed").innerHTML = percentage;
}

function updateProgressBar() {
  let dailyGoal = getDailyGoal();
  let totalWaterDrankToday = getTotalWaterDrankToday();

  const elem = document.getElementById("my-bar");
  const width = Math.min((totalWaterDrankToday / dailyGoal) * 100, 100) + "%";

  // Update progress bar in DOM after delay
  setTimeout(function() {
    elem.style.width = width;
  }, 100);
}

function resetDataForNewDate(data) {
  try {
    let savedDate = new Date(data.lastUpdatedDate);
    if (savedDate.getDate() != currentDate.getDate()) {
      dailyGoalMet = false;
      setTotalWaterDrankToday(0);
    } else {
      dailyGoalMet = data.dailyGoalMet || false;
      setTotalWaterDrankToday(data.totalWaterDrankToday || 0);
    }
  } catch (e) {
    // In situation where date isn't saved in file (e.g. user's first time loading app)
    if (e instanceof TypeError) {
      dailyGoalMet = false;
      setTotalWaterDrankToday(0);
    }
  } finally {
    setDailyGoal(data.dailyGoal || 0);
    hydrationTimer = data.hydrationTimer || HYDRATION_TIMER_MAX;
  }
}

function updateDependentComponents() {
  updateWaterStillNeeded();
  updatePercentageGoal();
  updateProgressBar();
}

function updateGraphic() {
  const hydrationGraphic = document.getElementById("hydration-graphic");

  if (hydrationTimer === -99) {
    hydrationGraphic.src = "../images/HydrationDehydrated.png";
    return;
  }

  hydrationTimer--;

  if (hydrationTimer <= 0) {
    hydrationTimer = -99;
    alert(
      "Uh oh, you're getting dehydrated. You should drink some more water!"
    );
  } else if (hydrationTimer <= HYDRATION_TIMER_MAX / 2) {
    hydrationGraphic.src = "../images/HydrationLow.png";
  } else {
    hydrationGraphic.src = "../images/HydrationFull.png";
  }

  saveData();
  console.log("Hydration Timer: ", hydrationTimer);
}

function initHomepage() {
  // Load data from storage and initialize app data with the storage data
  getDataFromFile(function(data) {
    resetDataForNewDate(data);
    updateDependentComponents();
    updateGraphic();
    saveData();
  });

  setInterval(updateGraphic, 1000);
}

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
