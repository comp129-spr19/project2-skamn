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
        if (getTotalWaterDrankToday() >= (getDailyGoal()*2)) {
            saveBadgeAchievementDate(badgeName);
        }
      });
}