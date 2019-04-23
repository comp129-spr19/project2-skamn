function hydratedOneDay() {
  let badgeName = "stayHydratedOneDay";
  checkIfBadgeAchieved(badgeName, function() {
    checkHydrationStreak(badgeName, 1);
  });
}

function checkHydrationStreak(badgeName, streakNeeded) {
  let filename = "badgeHydrationStreak";
  getDataFromFile(function(data) {
    if (data == null) {
      let todayDate = new Date();
      let initialBadgeLogic = {
        mostRecentDate: todayDate.toLocaleDateString(),
        streak: 1
      };
      setDataToFile(initialBadgeLogic, filename);
    } else {
      let dateToCompare = new Date(currentDate.getTime());
      dateToCompare.setDate(dateToCompare.getDate() - 1);
      if (
        hydratedToday &&
        data["mostRecentDate"] === dateToCompare.toLocaleDateString()
      ) {
        data["streak"] += 1;
        if (data["streak"] == streakNeeded) {
          saveBadgeAchievementDate(badgeName);
        }
      } else {
        data["streak"] = 0;
      }
      hydratedToday = true;
      data["mostRecentDate"] = currentDate.toLocaleDateString();
      setDataToFile(data, filename);
    }
  }, filename);
}
