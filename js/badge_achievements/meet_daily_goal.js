function meetDailyGoalOnceBadge() {
    let badgeName = "meetDailyGoalOnce";
    if (!checkIfBadgeAchieved(badgeName)) {
        let date = new Date();
        saveBadgeAchievements(badgeName, date.toLocaleDateString());
    }
}

function meetDailyGoalSevenBadge() {
    let badgeName = "meetDailyGoalSeven";
    if (!checkIfBadgeAchieved(badgeName)) {
        let date = new Date();
        saveBadgeAchievements(badgeName, date.toLocaleDateString());
    }
}