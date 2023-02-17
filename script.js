
var MenuX = false; var X;
var menu; var menuBtn;
var stats; var statsBtn;
var game;
var moneyTxt; var speedTxt;
var gravityOn; var gravPull = 1;
var jumpOn; var falling = false; var jumping = false;
var goingLeft = false; var goingRight = false; var L; var R;
var groundBorder = 83; //Ground Border
var bgcolor = "Khaki";
var blockCheck = false;
var doBlock; var blockPos;
var mine; var furnace; var chest;
var loadingSpeed = 500

var player = {
  icon: null,
  ores: 0,
  smelted: 0,
  money: 0,
  speed: 500,
  x: 40,
  y: 40,
  level: 1
};


function load() {
  menu = document.getElementById("menu");
  menuBtn = document.getElementById("menuButton");
  statsBtn = document.getElementById("statsButton");
  stats = document.getElementById("stats")
  game = document.getElementById("game");
  statsTxt = document.getElementById("statsTxt");
  player.icon = document.getElementById("player");
  mine = document.getElementById("mine");
  furnace = document.getElementById("furn");
  chest = document.getElementById("chest");
  X = document.getElementById("x");
  checkLevel();
  startGame();
}

function loadGame() {
  player.money = parseInt(localStorage.getItem("player.money"));
  player.speed = parseInt(localStorage.getItem("player.speed"));
}

function saveGame() {
  localStorage.setItem("player.money", player.money); console.log("Saved Money")
  localStorage.setItem("player.speed", player.speed); console.log("Saved Speed")
}

function startGame() {
  game.style.display = "Inline";
  statsTxt.innerHTML = "Ores: " + player.ores + " / Smelted Ores: " + player.smelted + " / Money: $" + player.money;
  refresh()
}

//-----------------PLAYER--------------------------------

function refresh() {
  statsTxt.innerHTML = "Ores: " + player.ores + " / Smelted Ores: " + player.smelted + " / Money: $" + player.money;
  player.icon.style.top = player.y + "%"
  player.icon.style.left = player.x + "%"
  if (player.y < groundBorder && falling == false && jumping == false) {
    falling = true;
    gravityOn = setInterval(gravity, 10);
  }
  checkLevel()
}

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    toJump();
  }
})

function toJump() {
  if (jumping == false && falling == false) {
    jumping = true;
    gravPull = 1;
    jumpOn = setInterval(jump, 5);
    setTimeout(function() {
      clearInterval(jumpOn);
      jumping = false;
      refresh();
    }, 1000);
  }
}

function gravity() {
  if (player.y < groundBorder) {
    player.y += gravPull;
    gravPull += 0.03
  }
  else {
    clearInterval(gravityOn)
    falling = false;
  }
  refresh()
}

function jump() {
  player.y -= gravPull;
  gravPull -= 0.01
  refresh()
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'w')
    toJump();
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'a')
    if (goingLeft == false) {
      goingLeft = true;
      clearInterval(R);
      L = setInterval(moveLeft, 10);
      setTimeout(function() {
        goingLeft = false;
        clearInterval(L);
      }, 250);
    }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'd')
    if (goingRight == false) {
      goingRight = true;
      clearInterval(L);
      R = setInterval(moveRight, 10);
      setTimeout(function() {
        goingRight = false;
        clearInterval(R);
      }, 250);
    }
})

function moveLeft() {
  if (player.x > 0) {
    player.x -= 0.5;
  }
  else {
    if (player.level == 2 || player.level == 3) {
      player.level -= 1;
      player.x -= 0.5;
      player.x = 99;
    }
  }
  refresh()
}

function moveRight() {
  if (player.x < 90) {
    player.x += 0.5;
  }
  else {
    if (player.level == 1 || player.level == 2) {
      player.level += 1;
      player.x += 0.5;
      player.x = -10;
    }
  }
  refresh();
}

//-----------------------LEVEL--------------------


function checkLevel() {
  if (player.level == 1) {
    mine.style.display = "Block";
    furnace.style.display = "None";
    chest.style.display = "None";
    bgcolor = "Khaki";
    blockPos = 15;
  }
  if (player.level == 2) {
    mine.style.display = "None";
    furnace.style.display = "Block";
    chest.style.display = "None";
    bgcolor = "Gold";
    blockPos = 45;
  }
  if (player.level == 3) {
    mine.style.display = "None";
    furnace.style.display = "None";
    chest.style.display = "Block";
    bgcolor = "GoldenRod";
    blockPos = 75;
  }
  document.body.style.backgroundColor = bgcolor;
  if (player.x <= blockPos + 10 && player.x >= blockPos - 10) {
    player.icon.style.border = "4px solid white"
    if (blockCheck == false) {
      doBlock = setInterval(daBlock, player.speed);
      blockCheck = true;
    }
  }
  else {
    player.icon.style.border = "none"
    clearInterval(doBlock);
    blockCheck = false;
  }
}

function daBlock() {
  if (player.level == 1) {
    player.ores += 1;
  }
  else if (player.level == 2) {
    if (player.ores > 0) {
      player.ores -= 1;
      player.smelted += 1;
    }
  }
  else if (player.level == 3) {
    if (player.smelted > 0) {
      player.smelted -= 1;
      player.money += 1;
    }
  }
  refresh()
}


