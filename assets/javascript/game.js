var crystalAmounts = [];
var targetAmount = 0;
var playerAmount = 0;
var wins = 0;
var losses = 0;

function setup(){  
    crystalAmounts = {
      red: rand(5,20),
      blue: rand(10,25),
      yellow: rand(15,25),
      green: rand(20,30)
    }
    targetAmount = rand(75,100);
    playerAmount = 0;
    setTargetNumText();
    setPlayerAmtText();
}

//random number within min and max value lets say 5-10
function rand(min, max) {
  //decimal between 0 and 1 * ((10-5)+1), so we get a decimal between 0-5 + 5
  return Math.floor((Math.random()*((max-min)+1))+min);
}

function setTargetNumText() {
  $("#target-num").html("<p>"+targetAmount+"</p>");
}

function setWinText() {
  $("#wins").text("Wins: "+wins);
}

function setLossText() {
  $("#losses").text("Losses: "+losses);
}

function setPlayerAmtText() {
  $("#total-score").html("<p>"+playerAmount+"</p>");
}

function gemClicked(gem){
  playerAmount += crystalAmounts[gem];
  setPlayerAmtText();
  if(playerAmount === targetAmount){
    wins++;
    setWinText();
    setup();
  } else if (playerAmount > targetAmount ) {
    losses++;
    setLossText();
    setup();
  }
}

$("#red").on("click", function(){
  gemClicked(this.id);
});

$("#blue").on("click", function(){
  gemClicked(this.id);
});

$("#yellow").on("click", function(){
  gemClicked(this.id);
});

$("#green").on("click", function(){
  gemClicked(this.id);
});

$("#refresh").on("click", function(){
  setup();
  losses = 0;
  setLossText();
  wins = 0;
  setWinText();
});

$(window).on('load', function() {
  setup();
});