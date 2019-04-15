function saveData() {
  // Save to file
  setDataToFile({
    dailyGoal: getDailyGoal(),
    dailyGoalMet,
    totalWaterDrankToday: getTotalWaterDrankToday(),
    hydrationTimer
  });
}

module.exports = {
  saveData
};
