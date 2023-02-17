

var bgcolor = "Khaki";

var blockCheck = false;

var doBlock;

var blockPos; 

var collectSpeed = 500;

var mine; var furnace; var chest;

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
      doBlock = setInterval(daBlock,collectSpeed);
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
  player.money += 1;
  refresh()
}



