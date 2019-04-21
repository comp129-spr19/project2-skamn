function meetDailyGoalOnceBadge() {
    let badgeName = "meetDailyGoalOnce";
    if (!checkIfBadgeAchieved(badgeName)) {
        let date = new Date();
        saveBadgeAchievements(badgeName, date.toLocaleDateString());
    }
}