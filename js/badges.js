function saveBadgeAchievements(name, date) {
  let badgeData = null;

  try {
    badgeData = getDataFromFile(function(data) {
      return data;
    }, "badgeachievements");
    badgeData.name = date;
  } catch (e) {
    if (e instanceof ReferenceError) {
        setDataToFile({
            "badge1": 0,
            "badge2": 0

          }, "badgeachievements");
      badgeData = getDataFromFile(function(data) {
        return data;
      }, "badgeachievements");
      badgeData.name = date;
    }
  }
  setDataToFile(badgeData, "badgeAchievements");
}
