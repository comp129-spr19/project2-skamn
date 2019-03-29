let dailyGoal = 0;
let hydrationLevel = 0;
let waterDrank = 0;

function setGoal(e) {
  e.preventDefault();
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

function setWaterDrank(e) {
  waterDrank = document.getElementById("waterDrank").value;
  if (isNaN(waterDrank)) {
    alert("Please enter a number!");
    return;
  }
  if (waterDrank < 1) {
    alert("Please enter a number greater than 0!");
    return;
  }
  hydrationLevel = parseInt(hydrationLevel) + parseInt(waterDrank);
  console.log(hydrationLevel);
  document.getElementById("totalHydrationLevel").innerHTML = hydrationLevel;
  if (hydrationLevel >= dailyGoal) {
    alert("YOU HAVE REACHED YOUR GOAL FOR THE DAY!");
  }
}
