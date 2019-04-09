const {
  getDailyGoal,
  setDailyGoal,
  setWaterDrankRecently,
  getDailyGoalMet,
  validateUserNumberInput
} = require("../js/daily_goal");

test("setDailyGoal should change currentDailyGoal in DOM to 5", () => {
  // Setup document body for testing
  document.body.innerHTML = '<div id="currentDailyGoal">0</div>';

  // Simulate user input of 5 and submission
  setDailyGoal(5);

  // Check if getDailyGoal gets value from DOM
  expect(getDailyGoal()).toBe(5);

  // Check if DOM shows 5
  const dailyGoalElem = document.getElementById("currentDailyGoal");
  const currDailyGoalVal = dailyGoalElem.innerHTML;
  expect(currDailyGoalVal).toBe("5");
});

/* Have to rethink the unit tests because of the data persistance */

// test("checkGoal should equal true when user surpasses dailyGoal", () => {
//   // Setup document body for testing
//   document.body.innerHTML =
//     '<div id="totalWaterDrankToday">0</div>' +
//     '<form onsubmit="setWaterDrankRecently(event)">' +
//     '<input type="number" id="waterDrankRecently" />' +
//     "</form>" +
//     '<div id="currentDailyGoal">3</div>' +
//     '<div id="waterNeeded">0</div>' +
//     '<div id="percentageWaterConsumed">0%</div>' +
//     '<script src="../daily_goal.js"></script>';

//   // Simulate user reaching daily goal
//   document.getElementById("waterDrankRecently").value = "5";
//   setWaterDrankRecently();

//   // Check if daily goal has been met
//   expect(getDailyGoalMet()).toBe(true);
// });

test("validateUserNumberInput should invalidate NaN input", () => {
  const results = validateUserNumberInput("abc");
  expect(results.valid).toBe(false);
});

test("validateUserNumberInput should invalidate negative number input", () => {
  const results = validateUserNumberInput(-1);
  expect(results.valid).toBe(false);
});

test("validateUserNumberInput should invalidate null input", () => {
  const results = validateUserNumberInput(null);
  expect(results.valid).toBe(false);
});

test("validateUserNumberInput should validate positive number input", () => {
  const results = validateUserNumberInput(1);
  expect(results.valid).toBe(true);
});
