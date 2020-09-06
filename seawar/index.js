// location ships

var locationShip1 = Math.floor(Math.random() * 5); // first section ship
var locationShip2 = locationShip1 + 1; // second section ship
var locationShip3 = locationShip2 + 1; // thread section ship

// fire

var guess;
var hits = 0;
var guesses = 0;

// state

var isSunk = false;

while (isSunk == false) {
  guess = prompt("ready iam fire! enter a number 0-6:");

  if (guess < 0 || guess > 6) {
    alert("please enter a valid cell number");
  } else guesses++;

  if (
    guess == locationShip1 ||
    guess == locationShip2 ||
    guess == locationShip3
  ) {
    hits++;
    if (hits == 3) {
      isSunk = true;
      alert("You sank  battleship!");
    }
  }
}
var stats = "fire" + guesses + "fire battleship";
alert(stats);
