const {
  getDailyGoal,
  setGoal,
  setWaterDrankRecently,
  getDailyGoalMet
} = require("../daily_goal");

test("initial value of dailyGoal should be 0", () => {
  expect(getDailyGoal()).toBe(0);
});

test("setGoal should change dailyGoal to 5", () => {
  // Setup document body for testing
  document.body.innerHTML =
    '<div id="currentDailyGoal">0</div>' +
    '<form onsubmit="setGoal(event)">' +
    ' <label for="dailyGoalUserInput">New Daily Goal (oz):</label>' +
    ' <input type="number" id="dailyGoalUserInput" />' +
    ' <input type="button" onclick="setGoal(event)" id="dgoalButton" />' +
    "</form>" +
    '<script src="../daily_goal.js"></script>';

  // Simulate user input of 5 and submission
  document.getElementById("dailyGoalUserInput").value = "5";
  setGoal();

  // Check if global variable was set to 5
  expect(getDailyGoal()).toBe("5");

  // Check if DOM shows 5
  const currDailyGoalVal = document.getElementById("currentDailyGoal")
    .innerHTML;
  expect(currDailyGoalVal).toBe("5");
});

test("dailyGoalMet should equal true when user surpasses dailyGoal", () => {
  // Setup document body for testing
  document.body.innerHTML =
    '<div id="totalWaterDrankToday">0</div>' +
    '<form onsubmit="setWaterDrankRecently(event)">' +
    '<input type="number" id="waterDrankRecently" />' +
    "</form>" +
    '<div id="currentDailyGoal">3</div>' +
    '<div id="waterNeeded">0</div>' +
    '<script src="../daily_goal.js"></script>';

  // Simulate user reaching daily goal
  document.getElementById("waterDrankRecently").value = "5";
  setWaterDrankRecently();

  // Check if daily goal has been met
  expect(getDailyGoalMet()).toBe(true);
});
