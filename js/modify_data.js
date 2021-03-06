function saveData() {
  // Save to file
  setDataToFile({
    dailyGoal: getDailyGoal(),
    dailyGoalMet,
    totalWaterDrankToday: getTotalWaterDrankToday(),
    hydrationTimer,
    lastUpdatedDate: currentDate
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
