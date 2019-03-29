let dailyGoal = 0;

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
