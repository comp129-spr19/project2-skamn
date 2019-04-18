function saveBadgeAchievements(name, date) {
  try {
    let badgeData = getDataFromFile(function(data) {
      return data;
    }, "badgeachievements");
    console.log(badgeData);
    badgeData.name = date;
    setDataToFile(badgeData, "badgeachievements");
  } catch (e) {
    // Write new data file since none exists
    if (typeof (e, TypeError)) {
      console.log(e);
      console.log("Creating new file");
      let badgeData = {
        badge1: 0,
        badge2: 0
      };
      badgeData[name] = date;
      setDataToFile(badgeData, "badgeachievements");
    }
  }
}
