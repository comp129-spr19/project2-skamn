let dailyGoal = 0;

function setGoal(e) {
  e.preventDefault();
  let dailyGoalUserInput = document.getElementById("dailyGoalUserInput");
  dailyGoal = dailyGoalUserInput.value;
  if (dailyGoal == "") dailyGoal = 0;
  else if (isNaN(dailyGoal)) {
    alert("Please enter a number");
    return;
  }
  let dailyGoalDisplay = document.getElementById("currentDailyGoal");
  dailyGoalDisplay.innerHTML = dailyGoal;
}
