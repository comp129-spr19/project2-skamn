let dailyGoal = 0;
let totalWaterDrankToday = 0;
let waterDrankRecently = 0;

function setGoal(e) {
  e.preventDefault();
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

function progressBarAndUserInput() {
  setWaterDrankRecently();
  progressBar();
  
}


// WRAP SETINTERVAL THROUGH ALL OF WATER DRANK RECENTLY, IF WATER DRANK > 0, SET TIMER AND IMAGE TO MEDIUM ROSE
function setWaterDrankRecently() {
  // retrieving value from user input
  waterDrankRecently = document.getElementById("waterDrankRecently").value;
  // if(isNaN(waterDrankRecently) || waterDrankRecently < 1) {
  //   alert('please enter a valid number');

  // }

  let timeOf = 25;
  let showImage = document.createElement('img');
  showImage.id = "middlerose";
  showImage.src="MediumRose.jpg"
  document.body.appendChild(showImage);
  id = setInterval(() => {
    console.log("Time remaining: " + timeOf);
    if(timeOf > 0) {
      timeOf = timeOf-1;
    }
    else {
      element = document.getElementById('middlerose');
      element.parentNode.removeChild(element);
      let showImage = document.createElement('img');
      showImage.id="deadrose";
      showImage.src="DeadRose.jpg"
      document.body.appendChild(showImage);
      clearInterval(id);
    }
  }, 1000);

  // adding the previous totalWaterDrankToday with new user input
  totalWaterDrankToday = parseInt(totalWaterDrankToday) + parseInt(waterDrankRecently);
  // making change to application
  document.getElementById("totalWaterDrankToday").innerHTML = totalWaterDrankToday;
  if (totalWaterDrankToday >= dailyGoal) {
    alert("YOU HAVE REACHED YOUR GOAL FOR THE DAY!");
  }
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

// function init() {
//   waterDrankRecently = document.getElementById('waterDrankRecently').value;


//   let timeOf = 25;
//   let showImage = document.createElement('img');
//   showImage.id = "middlerose";
//   showImage.src="MediumRose.jpg"
//   document.body.appendChild(showImage);
//   id = setInterval(() => {
//     if(waterDrankRecently)
//     console.log("Time remaining: " + timeOf);
//     if(timeOf > 0) {
//       timeOf = timeOf-1;
//     }
//     else {
//       element = document.getElementById('middlerose');
//       element.parentNode.removeChild(element);
//       let showImage = document.createElement('img');
//       showImage.id="deadrose";
//       showImage.src="DeadRose.jpg"
//       document.body.appendChild(showImage);
//       clearInterval(id);
//     }
//   }, 1000);
// };