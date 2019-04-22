function drink64ozBadge() {
    let badgeName = "drink64ozOneDay";
    if (!checkIfBadgeAchieved(badgeName)) {
        if (getTotalWaterDrankToday() >= 64) {
            saveBadgeAchievementDate(badgeName);
        }
    }
}

function doubleGoalBadge() {
    let badgeName = "doubleGoal";
    if (!checkIfBadgeAchieved(badgeName)) {
        if (getTotalWaterDrankToday() >= (getDailyGoal()*2)) {
            saveBadgeAchievementDate(badgeName);
        }
    }
}