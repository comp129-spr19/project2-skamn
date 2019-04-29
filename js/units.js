const convert = require("convert-units");
let currentDisplayUnits = "fl-oz";

function convertHTMLUnits(toUnits) {
  const fromUnits = currentDisplayUnits;
  const convertedDailyGoalVal = convert(getDailyGoal())
    .from(fromUnits)
    .to(toUnits);
  const convertedTotalWaterDrankToday = convert(getTotalWaterDrankToday())
    .from(fromUnits)
    .to(toUnits);

  // Calling appropriate functions to change units throughout app
  setDailyGoal(convertedDailyGoalVal.toFixed(1));
  setTotalWaterDrankToday(convertedTotalWaterDrankToday.toFixed(1));
  updateDisplayUnits(toUnits);
  updateDependentComponents();

  currentDisplayUnits = toUnits;
}

function updateDisplayUnits(newUnits) {
  const unitsElems = document.getElementsByClassName("units-text");
  for (unitElem of unitsElems) {
    unitElem.innerHTML = newUnits;
  }
}

function unitChange(e) {
  convertHTMLUnits(e.target.value);
  saveUnits();
  saveData();
}

function initUnits() {
  getDataFromFile(function(data) {
    currentDisplayUnits = data.units || "fl-oz";

    document.getElementById("unit-select").value = currentDisplayUnits;
    convertHTMLUnits(currentDisplayUnits);
  }, "hydrationstationunits");
}

function saveUnits() {
  setDataToFile(
    {
      units: currentDisplayUnits
    },
    "hydrationstationunits"
  );
}

function getCurrentDisplayUnits() {
  return currentDisplayUnits;
}
