function drink64ozBadge() {
  let badgeName = "drink64ozOneDay";
  checkIfBadgeAchieved(badgeName, function() {
    if (getTotalWaterDrankToday() >= 64) {
      saveBadgeAchievementDate(badgeName);
    }
  });
}

function doubleGoalBadge() {
  let badgeName = "doubleGoal";
  checkIfBadgeAchieved(badgeName, function() {
    if (getTotalWaterDrankToday() >= getDailyGoal() * 2) {
      saveBadgeAchievementDate(badgeName);
    }
  });
}

function inputConsumptionThreeinDay() {
  let badgeName = "inputConsumpThreeXOneDay";
  checkIfBadgeAchieved(badgeName, function() {
    inputConsumptionOneDay(badgeName, 3);
  });
}

function inputConsumptionOneDay(badgeName, streakNeeded) {
  let filename = "badgeDailyInputConsumption";
  getDataFromFile(function(data) {
    if (data == undefined || data === {}) {
      let todayDate = new Date();
      let initialConsumptionLogic = {
        mostRecentDate: todayDate.toLocaleDateString(),
        streak: 1
      };
      setDataToFile(initialConsumptionLogic, filename);
    } else {
      let dateToCompare = new Date(currentDate.getTime());
      if (data["mostRecentDate"] === dateToCompare.toLocaleDateString()) {
        data["streak"] += 1;
        if (data["streak"] == streakNeeded) {
          saveBadgeAchievementDate(badgeName);
        }
      } else {
        data["streak"] = 1;
      }
      data["mostRecentDate"] = currentDate.toLocaleDateString();
      setDataToFile(data, filename);
    }
  }, filename);
}

// XXX: Testing function. Needs to be deleted
function initializeConsumptionStreaksForTesting() {
  let todayDate = new Date();
  let initialConsumptionLogic = {
    mostRecentDate: todayDate.toLocaleDateString(),
    streak: 0
  };
  setDataToFile(initialConsumptionLogic, "badgeDailyInputConsumption");
}
