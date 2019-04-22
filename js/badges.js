function saveBadgeAchievements(name, date) {
  getDataFromFile(function(data) {
    if (data == null) {
      const badgeData = {
        meetDailyGoalOnce: 0,
        meetDailyGoalSeven: 0,
        meetDailyGoalThirty: 0
      };
      badgeData[name] = date;
      setDataToFile(badgeData, "badgeachievements");
    } else {
      let newData = data;
      newData[name] = date;
      setDataToFile(newData, "badgeachievements");
    }
  }, "badgeachievements");
}

function initializeBadgeAchievementsForTesting() {
  const badgeData = {
    meetDailyGoalOnce: 0,
    meetDailyGoalSeven: 0,
    meetDailyGoalThirty: 0
  };
  setDataToFile(badgeData, "badgeachievements");
}

function initializeDailyGoalStreaksForTesting() {
  let todayDate = new Date();
  let initialBadgeLogic = {
    mostRecentDate: todayDate.toLocaleDateString(),
    streak: 0
  };
  setDataToFile(initialBadgeLogic, "badgeDailyGoalStreak");
}

function checkIfBadgeAchieved(badgeName, callback) {
  getDataFromFile(function(data) {
    if (data != null) {
      // Badge not achieved
      if (data[badgeName] == 0) {
        callback();
      }
    }
  }, "badgeachievements");
}
