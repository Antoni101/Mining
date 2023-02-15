
var gravityOn;
var gravPull = 1;
var jumpOn;
var falling = false;
var jumping = false;
var goingLeft = false;
var goingRight = false; var L; var R;

var groundBorder = 83; //Ground Border

var player = {
  icon: null,
  money: 0,
  dmg: 10,
  skill: null,
  speed: 0,
  x: 40,
  y: 40,
  level: 1
};

function refresh() {
  moneyTxt.innerHTML = "Money: $" + player.money;
  player.icon.style.top = player.y + "%"
  player.icon.style.left = player.x + "%"
  if (player.y < groundBorder && falling == false && jumping == false) {
    falling = true;
    gravityOn = setInterval(gravity, 10);
  }
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
    console.log("Falling")
  }
  else {
    clearInterval(gravityOn)
    falling = false;
  }
  refresh()
}

function jump() {
  console.log("Jumping")
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
      }, 500);
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
      }, 500);
    }
})

function moveLeft() {
  if (player.x > 0) {
    console.log("Going Left")
    player.x -= 0.5;
  }
  else {
    if (player.level == 2 || player.level == 3) {
      player.level -= 1;
      player.x -= 0.5;
      player.x = 89;
      checkLevel()
    }
    console.log("Hitting Border");
  }
  refresh()
}

function moveRight() {
  if (player.x < 90) {
    console.log("Going Right")
    player.x += 0.5;
  }
  else {
    if (player.level == 1 || player.level == 2) {
      player.level += 1;
      player.x += 0.5;
      player.x = 1;
      checkLevel()
    }
    console.log("Hitting Border");
  }
  refresh();
}

function clickPlayer() {
  player.money += 1;
  document.body.style.backgroundColor = "Coral";
  setTimeout(function() {
    document.body.style.backgroundColor = bgcolor;
  }, 1000);
  refresh();
}