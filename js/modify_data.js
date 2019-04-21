function saveData() {
  // Save to file
  setDataToFile({
    dailyGoal: getDailyGoal(),
    dailyGoalMet,
    totalWaterDrankToday: getTotalWaterDrankToday(),
    hydrationTimer,
    todayDate: currentDate
  });
}

function resetWaterDrankToday() {
  setDataToFile({
    dailyGoal: getDailyGoal(),
    dailyGoalMet: false,
    totalWaterDrankToday: 0,
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

function resetBadgeAchievements() {
  const badgeData = {
    badge1: 0,
    badge2: 0
  };
  setDataToFile(badgeData, "badgeachievements");
}

module.exports = {
  saveData,
  resetData
};
