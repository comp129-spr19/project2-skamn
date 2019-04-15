const convert = require("convert-units");

function convertHTMLUnits(fromUnits, toUnits) {
  const convertedDailyGoalVal = convert(getDailyGoal())
    .from(fromUnits)
    .to(toUnits);
  const convertedTotalWaterDrankToday = convert(
    getTotalWaterDrankToday()
      .from(fromUnits)
      .to(toUnits)
  );

  setDailyGoal(convertedDailyGoalVal);
  setTotalWaterDrankToday(convertedTotalWaterDrankToday);
  updateDependentComponents();
}
