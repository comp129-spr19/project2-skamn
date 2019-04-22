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
  if (!checkIfBadgeAchieved(badgeName)) {
    if (dailyGoalMetYesterday()) {
      getDataFromFile(function(data) {
        console.log(data);
        if (data[streak] == 7) {
          saveBadgeAchievementDate(badgeName);
        }
      });
    }
  }
}

function dailyGoalMetYesterday() {
  let filename = "badgeDailyGoalStreak";
  let dailyGoalMetYesterday = false;
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
      let dateToCompare = currentDate;
      dateToCompare.setDate(dateToCompare.getDate() - 1);
      if (data["mostRecentDate"] === dateToCompare.toLocaleDateString()) {
        data["streak"] += 1;
        dailyGoalMetYesterday = true;
      } else {
        data["streak"] = 0;
      }
      setDataToFile(data, filename);
    }
  }, filename);
  console.log(dailyGoalMetYesterday);
  return dailyGoalMetYesterday;
}
