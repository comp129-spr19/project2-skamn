function saveBadgeAchievements(name, date) {
  getDataFromFile(function(data) {
    if (data == null) {
      const badgeData = {
        meetDailyGoalOnce: {
          badgeName: "Meet Daily Goal - 1 Day",
          badgeDate: 0
        },
        meetDailyGoalSeven: {
          badgeName: "Meet Daily Goal - 7 Days in a Row",
          badgeDate: 0
        },
        meetDailyGoalThirty: {
          badgeName: "Meet Daily Goal - 30 Days in a Row",
          badgeDate: 0
        },
        drink64ozOneDay: { badgeName: "Drink 64oz in One Day", badgeDate: 0 },
        doubleGoal: { badgeName: "Doubled Daily Goal", badgeDate: 0 },
        inputConsumpThreeXOneDay: {
          badgeName: "Input Water Consumption into App 3 Times in One Day",
          badgeDate: 0
        }
      };
      badgeData[name]["badgeDate"] = date;
      setDataToFile(badgeData, "badgeachievements");
    } else {
      let newData = data;
      newData[name]["badgeDate"] = date;
      setDataToFile(newData, "badgeachievements");
    }
  }, "badgeachievements");
}

// Needs to be deleted. Just for current testing purposes
function initializeBadgeAchievementsForTesting() {
  const badgeData = {
    meetDailyGoalOnce: { badgeName: "Meet Daily Goal - 1 Day", badgeDate: 0 },
    meetDailyGoalSeven: {
      badgeName: "Meet Daily Goal - 7 Days in a Row",
      badgeDate: 0
    },
    meetDailyGoalThirty: {
      badgeName: "Meet Daily Goal - 30 Days in a Row",
      badgeDate: 0
    },
    drink64ozOneDay: { badgeName: "Drink 64oz in One Day", badgeDate: 0 },
    doubleGoal: { badgeName: "Doubled Daily Goal", badgeDate: 0 },
    stayHydratedOneDay: {
      badgeName: "Stay hydrated for an entire day",
      badgeDate: 0
    },
    stayHydratedSevenDay: {
      badgeName: "Stay hydrated for 7 days in a row",
      badgeDate: 0
    },
    stayHydratedThirtyDay: {
      badgeName: "Stay hydrated for 30 days in a row",
      badgeDate: 0
    },
    inputConsumpThreeXOneDay: {
      badgeName: "Input Water Consumption into App 3 Times in One Day",
      badgeDate: 0
    }
  };
  setDataToFile(badgeData, "badgeachievements");
}

// XXX: Testing function. Needs to be deleted
function initializeDailyGoalStreaksForTesting() {
  let todayDate = new Date();
  let initialBadgeLogic = {
    mostRecentDate: todayDate.toLocaleDateString(),
    streak: 0
  };
  setDataToFile(initialBadgeLogic, "badgeDailyGoalStreak");
}

function initializeHydrationStreaksForTesting() {
  let initialBadgeLogic = {
    mostRecentDate: todayDate.toLocaleDateString(),
    hydrated: false
  };
  setDataToFile(initialBadgeLogic, "badgeHydrationStreak");
}

function checkIfBadgeAchieved(badgeName, callback) {
  getDataFromFile(function(data) {
    if (data != null) {
      // Badge not achieved
      if (data[badgeName]["badgeDate"] == 0) {
        callback();
      }
    }
  }, "badgeachievements");
}

function displayBadgeNotifications(badgeName) {
  getDataFromFile(function(data) {
    let displayBadgeName = data[badgeName]["badgeName"];
    try {
      let badgeReachedNotification = new Notification("Badge Achieved!", {
        body: "Congrats! You achieved badge '" + displayBadgeName + "' today!"
      });
      badgeReachedNotification.show();
      console.log("Badge '" + displayBadgeName + "' Achieved");
    } catch (err) {
      console.log("Badge achieved but notification not shown");
    }
  }, "badgeachievements");
}
