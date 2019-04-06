let dailyGoal = 0;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

function setGoal(e) {
  e.preventDefault();
  let dailyGoalUserInputValue = document.getElementById("dailyGoalUserInput").value;
    if (dailyGoalUserInputValue == null) {
      dailyGoal = 1;
    }
    dailyGoal = dailyGoalUserInputValue;
    // Update label to reflect new daily goal
    document.getElementById("currentDailyGoal").innerHTML = dailyGoal; 
}

function progressBarAndUserInput() {
  setWaterDrankRecently();
  progressBar();
  
}

function setWaterDrankRecently() {
  waterDrankRecently = document.getElementById("waterDrankRecently").value;
  if(isNaN(waterDrankRecently) || waterDrankRecently < 1) {
    alert('please enter a valid number');
}
  totalWaterDrankToday = parseInt(totalWaterDrankToday) + parseInt(waterDrankRecently);
  document.getElementById("totalWaterDrankToday").innerHTML = totalWaterDrankToday;
  if (totalWaterDrankToday >= dailyGoal) {
    alert("You've reached your goal for the day!\nKeep drinking!!");
  }j
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
  element1.id = "middlerose";
  element1.src="./images/MediumRose.jpg";
  document.body.appendChild(element1);

  let element2 = document.createElement('img');
  element2.id="deadrose";

    let hasBeenClicked = document.getElementById('submitBtn');
    var id;
    
    var doWork = function() {
      let roseElement = document.getElementById('middlerose');
      let deadRoseElement = document.getElementById('deadrose');

      hasBeenClicked.onclick=function() {
        let roseElement = document.getElementById('middlerose');
        let deadRoseElement = document.getElementById('deadrose');
        timeOf=TIME_LIMIT;
        progressBarAndUserInput();

        deadRoseElement.parentNode.removeChild(deadRoseElement);
        let tst =  document.createElement('img');
        tst.id="middlerose";
        tst.src="./images/MediumRose.jpg";
        document.body.appendChild(tst);s
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
