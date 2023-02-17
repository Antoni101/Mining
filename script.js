
var MenuX = false;
var X;

var menu; var menuBtn;
var stats; var statsBtn;

var game;

var moneyTxt; var speedTxt; var dmgTxt;

function load() {
  menu = document.getElementById("menu");
  menuBtn = document.getElementById("menuButton");
  statsBtn = document.getElementById("statsButton");
  stats = document.getElementById("stats")
  game = document.getElementById("game");
  moneyTxt = document.getElementById("moneyTxt");
  speedTxt = document.getElementById("speedTxt");
  dmgTxt = document.getElementById("dmgTxt");
  player.icon = document.getElementById("player");
  mine = document.getElementById("mine");
  furnace = document.getElementById("furn");
  chest = document.getElementById("chest");
  X = document.getElementById("x");
  moneyTxt.innerHTML = "Money: $" + player.money;
  checkLevel()
  showMenu()
}

function newGame() {
  document.body.style.backgroundColor = "BurlyWood";
  player.money = 0;
  player.dmg = 10;
  player.speed = 500;
  skill = null;
  menu.style.display = "None";
  setTimeout(function() { document.body.style.backgroundColor = bgcolor; startGame() }, 1000);
}

function conGame() {
  document.body.style.backgroundColor = "BurlyWood";
  player.money = parseInt(localStorage.getItem("player.money"));
  player.dmg = parseInt(localStorage.getItem("player.dmg"));
  player.speed = parseInt(localStorage.getItem("player.speed"));
  player.skill = localStorage.getItem("player.skill");
  console.log("Loaded Save")
  menu.style.display = "None";
  setTimeout(function() { document.body.style.backgroundColor = bgcolor; startGame() }, 1000);
}

function saveGame() {
  document.body.style.backgroundColor = "Green";
  localStorage.setItem("player.money", player.money); console.log("Saved Money")
  localStorage.setItem("player.dmg", player.dmg); console.log("Saved Dmg")
  localStorage.setItem("player.speed", player.speed); console.log("Saved Speed")
  localStorage.setItem("player.skill", player.skill); console.log("Saved Skill")
  console.log("Saved Game")
  setTimeout(function() { document.body.style.backgroundColor = bgcolor; }, 1000);
}

function optGame() {
  document.body.style.backgroundColor = "Red";
  setTimeout(function() { document.body.style.backgroundColor = bgcolor; }, 500);
}

function showMenu() {
  game.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() { 
    document.body.style.backgroundColor = bgcolor; menu.style.display = "Block";
    if (MenuX == false) {
      X.style.display = "None";
      MenuX = true;
    }
    else {
      X.style.display = "Inline";
    }
  }, 1000);
}

function showStats() {
  game.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() {
    document.body.style.backgroundColor = bgcolor; stats.style.display = "Block";
    moneyTxt.innerHTML = "Money: $" + player.money
    dmgTxt.innerHTML = "Damage: " + player.dmg
    speedTxt.innerHTML = "Speed: " + player.speed + "ms"
  }, 1000);
}

function exitStats() {
  stats.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() { document.body.style.backgroundColor = bgcolor; game.style.display = "Block";}, 1000);
}

function startGame() {
  game.style.display = "Inline";
  moneyTxt.innerHTML = "Money: $" + player.money;
  refresh()
}

function menudoX() {
  menu.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() { document.body.style.backgroundColor = bgcolor; game.style.display = "Block";}, 1000);
}
