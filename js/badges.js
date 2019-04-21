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

function printBadgeAchievements() {
  getDataFromFile(function(data) {
    console.log(data);
  }, "badgeachievements");
}

function checkIfBadgeAchieved(badgeName) {
  let badgeAchieved = false;
  getDataFromFile(function(data) {
    if (data != null) {
      // Badge not achieved
      if (data[badgeName] == 0) {
        badgeAchieved = false;
      }
      // Badge achieved
      badgeAchieved = true;
    }
  }, "badgeachievements");
  return badgeAchieved;
}
