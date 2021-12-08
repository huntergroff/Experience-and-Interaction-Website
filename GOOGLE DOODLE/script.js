var gUp = document.getElementById("G-up-box");
var marioAudio = new Audio("sounds/mariosound.mp3");
marioAudio.preload = "auto";
gUp.addEventListener("mouseover", itsaMe);
function itsaMe(event) {
  marioAudio.play();
}

var oRed = document.getElementById("o-box");
var mushroomAudio = new Audio("sounds/itemsound.mp3");
oRed.addEventListener("mouseover", mushroom);
function mushroom(event) {
  mushroomAudio.play();
}


var oYel = document.getElementById("coinbox");
var coinAudio = new Audio("sounds/coinsound.mp3");
oYel.addEventListener("mouseover", coin);
function coin(event) {
  coinAudio.play();
}

var gLow = document.getElementById("g-low-box");
var yoshiAudio = new Audio("sounds/yoshisound.mp3");
gLow.addEventListener("mouseover", yoshi);
function yoshi(event) {
  yoshiAudio.play();
}

var lLower = document.getElementById("l-box");
var tubeAudio = new Audio("sounds/tubesound.mp3");
lLower.addEventListener("mouseover", tube);
function tube(event) {
  tubeAudio.play();
}

var e = document.getElementById("e-box");
var koopaAudio = new Audio("sounds/koopasound.mp3");
e.addEventListener("mouseover", koopa);
function koopa(event) {
  koopaAudio.play();
}


