function drink64ozBadge() {
    let badgeName = "drink64ozOneDay";
    if (!checkIfBadgeAchieved(badgeName)) {
        if (getTotalWaterDrankToday() >= 64) {
            saveBadgeAchievementDate(badgeName);
            displayBadgeNotifications(badgeName);
        }
    }
}