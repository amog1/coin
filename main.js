// COIN FLIP SIMULATOR
// html variables

let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
// count variables
let numHeads = 0;
let numTails = 0;

//  Button event listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  //    Simulatete the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src= 'img/heads.png'/>";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src= 'img/tails.png'/>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}
