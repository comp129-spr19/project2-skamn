const convert = require("convert-units");

function convertHTMLUnits(toUnits) {
  const fromUnits = getUnits();
  const convertedDailyGoalVal = convert(getDailyGoal())
    .from(fromUnits)
    .to(toUnits);
  const convertedTotalWaterDrankToday = convert(getTotalWaterDrankToday())
    .from(fromUnits)
    .to(toUnits);

  setDailyGoal(convertedDailyGoalVal);
  setTotalWaterDrankToday(convertedTotalWaterDrankToday);
  setUnits(toUnits);
  updateDependentComponents();
}

function getUnits() {
  return document.getElementById("currentUnits").innerHTML;
}

function setUnits(units) {
  document.getElementById("currentUnits").innerHTML = units;
}
