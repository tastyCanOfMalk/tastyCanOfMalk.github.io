let score = 0;
let autoclickersPurchased = 0;
let donutClickerMultiplier = 1;
let autoclickerCost = 10;
let donutClickerMultiplierCost = 10;

// let donutClickerButton = document.querySelector("#donut-clicker");
let autoClickerButton = document.querySelector("#autoclickerButton")
let autoclickerButtonCost = document.querySelector("#autoclickerButtonCost")
let autoclickersPurchasedCount = document.querySelector("#autoclickersPurchasedCount")
let scoreCountDisplay = document.getElementById("score")
let multiplierButton = document.querySelector("#multiplierButton")
let multipliersPurchasedCount = document.querySelector("#multipliersPurchasedCount")
let donut = document.querySelector("#donut")

// assign initial button values
autoclickerButtonCost.innerHTML = autoclickerCost;
multiplierButtonCost.innerHTML = donutClickerMultiplierCost;

// DONUT CLICKER BUTTON
// donutClickerButton.addEventListener("click", function() {
//   updateScore(donutClickerMultiplier);
// })  

// DONUT
donut.addEventListener("click", function(){
  donut.classList.add('shakeImage')
})

// AUTOCLICKER BUTTON
autoClickerButton.addEventListener("click", function(){
  buyAutoClicker(autoclickerCost);
})

// MULTIPLIER BUTTON
multiplierButton.addEventListener("click", function(){
  buyMultiplier(donutClickerMultiplierCost)
})

function buyMultiplier(cost){
  updateScore(-cost);

  donutClickerMultiplier *= 1.2;
  donutClickerMultiplierCost *= 1.1;

  multiplierButtonCost.innerHTML = parseFloat(donutClickerMultiplierCost.toFixed(2));
  multipliersPurchasedCount.innerHTML = parseFloat(donutClickerMultiplier.toFixed(2));
}

function buyAutoClicker(cost){
  updateScore(-cost);

  autoclickersPurchased++;
  autoclickersPurchasedCount.innerHTML = autoclickersPurchased;
  
  autoclickerCost = Math.round(autoclickerCost * 1.10);
  autoclickerButtonCost.innerHTML = autoclickerCost;
}

function checkButtons(){
  if(score >= autoclickerCost){
    autoClickerButton.classList.remove('disabled');
  } 
  if(score < autoclickerCost){
    autoClickerButton.classList.add('disabled');
  } 
  if(score >= donutClickerMultiplierCost){
    multiplierButton.classList.remove('disabled');
  } 
  if(score < donutClickerMultiplierCost){
    multiplierButton.classList.add('disabled');
  } 
}

function updateScore(amount){
  score += amount;
  score = parseFloat(score.toFixed(2))
  scoreCountDisplay.innerHTML = score;
  checkButtons(); 
}

function resetAll(){
  score = 0;
  autoclickerCost = 10;
  autoclickersPurchased = 0;
  donutClickerMultiplier = 1;
  donutClickerMultiplierCost = 10;
  
  updateScore(0)
  autoclickerButtonCost.innerHTML = autoclickerCost;
  autoclickersPurchasedCount.innerHTML = autoclickersPurchased;

  multiplierButtonCost.innerHTML = donutClickerMultiplierCost;
  multipliersPurchasedCount.innerHTML = donutClickerMultiplier;

  // document.querySelector("#resetButton").classList.add('disabled');

}

setInterval(
  function(){
    updateScore(autoclickersPurchased);
    donut.classList.remove('shakeImage')

  }, 1000
)

