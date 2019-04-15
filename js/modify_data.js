function saveData() {
  // Save to file
  setDataToFile({
    dailyGoal: getDailyGoal(),
    dailyGoalMet,
    totalWaterDrankToday: getTotalWaterDrankToday(),
    hydrationTimer
  });
}

function resetData() {
  setDataToFile({
    dailyGoal: 0,
    dailyGoalMet: false,
    totalWaterDrankToday: 0,
    hydrationTimer
  });
}

module.exports = {
  saveData,
  resetData
};
