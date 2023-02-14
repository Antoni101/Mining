
var player = {
  money: 0,
  dmg: 10,
  skill: null,
  speed: 0
};

var Player; var x = 40; var go; var attacking = false;
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
  Player = document.getElementById("player");
  X = document.getElementById("x");
  showMenu()
}

function newGame() {
  document.body.style.backgroundColor = "BurlyWood";
  if (attacking == true) {clearInterval(playerAttacking); attacking = false;}
  player.money = 0;
  player.dmg = 10;
  player.speed = 500;
  skill = null;
  menu.style.display = "None";
  setTimeout(function() { document.body.style.backgroundColor = "CornSilk"; startGame() }, 1000);
}

function conGame() {
  document.body.style.backgroundColor = "BurlyWood";
  player.money = parseInt(localStorage.getItem("player.money"));
  player.dmg = parseInt(localStorage.getItem("player.dmg"));
  player.speed = parseInt(localStorage.getItem("player.speed"));
  player.skill = localStorage.getItem("player.skill");
  console.log("Loaded Save")
  menu.style.display = "None";
  setTimeout(function() { document.body.style.backgroundColor = "CornSilk"; startGame() }, 1000);
}

function saveGame() {
  document.body.style.backgroundColor = "Green";
  localStorage.setItem("player.money", player.money); console.log("Saved Money")
  localStorage.setItem("player.dmg", player.dmg); console.log("Saved Dmg")
  localStorage.setItem("player.speed", player.speed); console.log("Saved Speed")
  localStorage.setItem("player.skill", player.skill); console.log("Saved Skill")
  console.log("Saved Game")
  setTimeout(function() { document.body.style.backgroundColor = "CornSilk"; }, 1000);
}

function optGame() {
  document.body.style.backgroundColor = "Red";
  setTimeout(function() { document.body.style.backgroundColor = "CornSilk"; }, 500);
}

function showMenu() {
  game.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() { 
    document.body.style.backgroundColor = "CornSilk"; menu.style.display = "Block";
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
    document.body.style.backgroundColor = "CornSilk"; stats.style.display = "Block";
    moneyTxt.innerHTML = "Money: $" + player.money
    dmgTxt.innerHTML = "Damage: " + player.dmg
    speedTxt.innerHTML = "Speed: " + player.speed + "ms"
  }, 1000);
}

function exitStats() {
  stats.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() { document.body.style.backgroundColor = "CornSilk"; game.style.display = "Block";}, 1000);
}

function startGame() {
  game.style.display = "Inline";
  if (attacking == false) {
    go = false;
    attacking = true;
    playerAttacking = setInterval(playerAttack, player.speed)
  }
}

function menudoX() {
  menu.style.display = "None";
  document.body.style.backgroundColor = "BurlyWood";
  setTimeout(function() { document.body.style.backgroundColor = "CornSilk"; game.style.display = "Block";}, 1000);
}

function playerAttack() {
  if (go == false) {
    x += 1;
    player.money += 1;
    moneyTxt.innerHTML = "Money: $" + player.money
    go = true;
  }
  else {
    x -= 1;
    go = false;
  }

  
  Player.style.left = x + "%";
}