let dailyGoal = 0;

function setGoal(e) {
  e.preventDefault();
  let dailyGoalUserInput = document.getElementById("dailyGoalUserInput");
  dailyGoal = dailyGoalUserInput.value;
  if (dailyGoal == "") dailyGoal = 1;
  else if (isNaN(dailyGoal)) {
    alert("Please enter a number");
    return;
  } else if (dailyGoal < 1) {
    alert("Plese enter a positive number");
    return;
  }
  let dailyGoalDisplay = document.getElementById("currentDailyGoal");
  dailyGoalDisplay.innerHTML = dailyGoal;
}

module.exports = { dailyGoal, setGoal };
