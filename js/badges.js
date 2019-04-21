function saveBadgeAchievements(name, date) {
  getDataFromFile(function(data) {
    if (data == null) {
      const badgeData = {
        badge1: 0,
        badge2: 0
      };
      badgeData[name] = date;
      setDataToFile(badgeData, "badgeachievements");
    } else {
      let newData = data;
      newData[name] = date;
      setDataToFile(newData, "badgeachievements");
    }
  }, "badgeachievements");
}

function printBadgeAchievements() {
  getDataFromFile(function(data) {}, "badgeachievements");
}
