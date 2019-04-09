let dailyGoal = 0;
let dailyGoalMet = false;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

function setGoal(e) {
  if (e) {
    e.preventDefault();
  }
  let dailyGoalUserInputValue = document.getElementById("dailyGoalUserInput")
    .value;
  if (dailyGoalUserInputValue == null) {
    dailyGoal = 1;
  } else if (isNaN(dailyGoalUserInputValue)) {
    alert("Please enter a number");
    return;
  } else if (dailyGoalUserInputValue < 1) {
    alert("Please enter a positive number");
    return;
  }
  dailyGoal = dailyGoalUserInputValue;
  // Update label to reflect new daily goal
  document.getElementById("currentDailyGoal").innerHTML = dailyGoal;
}

function setWaterDrankRecently(e) {
  if (e) {
    e.preventDefault();
  }
  // retrieving value from user input
  waterDrankRecently = document.getElementById("waterDrankRecently").value;
  // error checking on user input
  if (isNaN(waterDrankRecently)) {
    alert("Please enter a number!");
    return;
  }
  if (waterDrankRecently < 1) {
    alert("Please enter a number greater than 0!");
    return;
  }
  // adding the previous totalWaterDrankToday with new user input
  totalWaterDrankToday =
    parseInt(totalWaterDrankToday) + parseInt(waterDrankRecently);
  // making change to application
  document.getElementById(
    "totalWaterDrankToday"
  ).innerHTML = totalWaterDrankToday;
  if (!dailyGoalMet && totalWaterDrankToday >= dailyGoal) {
    dailyGoalMet = true;
    try {
      let goalReachedNotification = new Notification(
        "Daily Water Consumption Goal Reached!",
        {
          body:
            "Congrats! You aimed to drink " +
            dailyGoal +
            " oz of water and you reached today's goal! Keep it up!"
        }
      );
      goalReachedNotification.show();
    } catch (err) {
      console.log("Daily water goal met but notification not shown");
      console.log(err.message);
    }
  }
  getWaterStillNeeded();
  getPercentageGoal();
}

function getDailyGoalMet() {
  return dailyGoalMet;
}

function getDailyGoal() {
  return dailyGoal;
}

function getWaterStillNeeded(){
    // subtract appropriate values to calculate 
    // water that still needs to be consumed
    let waterStillNeeded = dailyGoal-totalWaterDrankToday;
    if(waterStillNeeded < 0){
        waterStillNeeded = 0;
    }
    document.getElementById("waterNeeded").innerHTML = waterStillNeeded;
}

function getPercentageGoal(){
    // divide appropriate values to calculate
    // percentatge of water consumed
    let percentage = (totalWaterDrankToday/dailyGoal) * 100;
    // adding percentage sign to the value calculated
    percentage = percentage + "%";
    document.getElementById("percentageWaterConsumed").innerHTML = percentage;
}


function progressBarAndUserInput() {
  setWaterDrankRecently();
  progressBar();
}

function progressBar() {
  var elem = document.getElementById("my-bar");   
  var id = setInterval(displayBar, 100);
  let p = (totalWaterDrankToday / dailyGoal) * 100;
  let width = p;
  
  function displayBar() {
    if (totalWaterDrankToday > dailyGoal) {
      width = 100;
      elem.style.width = width + "%";
      clearInterval(id);
    } else {
      elem.style.width = width + '%'; 
      clearInterval(id);
    }
  }
}

window.onload = function init() {
  let TIME_LIMIT = 5;
  let timeOf = TIME_LIMIT;
  let element1 = document.createElement('img');
  element1.id = "aliverose";
  element1.src="./images/AliveRose.jpg";
  document.body.appendChild(element1);

  let element2 = document.createElement('img');
  element2.id="deadrose";

    let hasBeenClicked = document.getElementById('testBtn');
    var id;
    
    var doWork = function() {
      let roseElement = document.getElementById('aliverose');

      hasBeenClicked.onclick=function() {
        let deadRoseElement = document.getElementById('deadrose');
        timeOf=TIME_LIMIT;
        progressBarAndUserInput();

        deadRoseElement.parentNode.removeChild(deadRoseElement);
        let addRose =  document.createElement('img');
        addRose.id="aliverose";
        addRose.src="./images/AliveRose.jpg";
        document.body.appendChild(addRose);
        id = setInterval(doWork, 1000);
        }
        
      console.log("Time remaining: " + timeOf);
      
      if(timeOf > 0) {
        timeOf = timeOf-1;
      }

      else {
        roseElement.parentNode.removeChild(roseElement);
        testDead = document.createElement('img');
        testDead.id="deadrose";
        testDead.src="./images/DeadRose.jpg";
        document.body.appendChild(testDead);      
        alert("Uh oh, you're getting dehydrated. You should probably drink some more water!");  
        clearInterval(id);
      }
    }
      id = setInterval(doWork, 1000);  
};


module.exports = {
  getDailyGoal,
  getDailyGoalMet,
  setGoal,
  setWaterDrankRecently
};


