function saveBadgeAchievementDate(badgeName) {
  let date = new Date();
  saveBadgeAchievements(badgeName, date.toLocaleDateString());
  displayBadgeNotifications(badgeName);
}

function meetDailyGoalOnceBadge() {
  let badgeName = "meetDailyGoalOnce";
  checkIfBadgeAchieved(badgeName, function() {
    saveBadgeAchievementDate(badgeName);
  });
}

function meetDailyGoalSevenBadge() {
  let badgeName = "meetDailyGoalSeven";
  checkIfBadgeAchieved(badgeName, function() {
    dailyGoalMetYesterday(badgeName, 7);
  });
}

function meetDailyGoalThirtyBadge() {
  let sevenBadgeDay = "meetDailyGoalSeven";
  let badgeName = "meetDailyGoalThirty";
  let filename = "badgeachievements";
  getDataFromFile(function(data) {
    if (data != null) {
      // If 7 day streak badge hasn't been met, dailyGoalMetYesterday()
      // should only be called once. Otherwise, streak data will be overwritten
      if (data[sevenBadgeDay]["badgeDate"] != 0) {
        checkIfBadgeAchieved(badgeName, function() {
          dailyGoalMetYesterday(badgeName, 30);
        });
      }
    }
  }, filename);
}

function dailyGoalMetYesterday(badgeName, streakNeeded) {
  let filename = "badgeDailyGoalStreak";
  getDataFromFile(function(data) {
    if (data == undefined || data === {}) {
      let todayDate = new Date();
      let initialBadgeLogic = {
        mostRecentDate: todayDate.toLocaleDateString(),
        streak: 1
      };
      setDataToFile(initialBadgeLogic, filename);
    } else {
      let dateToCompare = new Date(currentDate.getTime());
      dateToCompare.setDate(dateToCompare.getDate() - 1);
      if (data["mostRecentDate"] === dateToCompare.toLocaleDateString()) {
        data["streak"] += 1;
        if (data["streak"] == streakNeeded) {
          saveBadgeAchievementDate(badgeName);
        }
      } else {
        data["streak"] = 0;
      }
      data["mostRecentDate"] = currentDate.toLocaleDateString();
      setDataToFile(data, filename);
    }
  }, filename);
}
