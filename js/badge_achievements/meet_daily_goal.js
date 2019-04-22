function saveBadgeAchievementDate(badgeName) {
  let date = new Date();
  saveBadgeAchievements(badgeName, date.toLocaleDateString());
}

function meetDailyGoalOnceBadge() {
  let badgeName = "meetDailyGoalOnce";
  if (!checkIfBadgeAchieved(badgeName)) {
    saveBadgeAchievementDate(badgeName);
  }
}

function meetDailyGoalSevenBadge() {
  let badgeName = "meetDailyGoalSeven";
  checkIfBadgeAchieved(badgeName, function() {
    dailyGoalMetYesterday(badgeName);
  });
}

function dailyGoalMetYesterday(badgeName) {
  let filename = "badgeDailyGoalStreak";
  getDataFromFile(function(data) {
    console.log(data);
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
        if (data["streak"] == 7) {
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
