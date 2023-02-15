
var gravityOn;
var gravPull = 1;
var jumpOn;
var falling = false;
var jumping = false;
var goingLeft = false;
var goingRight = false; var L; var R;

var groundBorder = 83; //Ground Border

function refresh() {
  player.icon.style.top = player.y + "%"
  player.icon.style.left = player.x + "%"
  if (player.y < groundBorder && falling == false && jumping == false) {
    falling = true;
    gravityOn = setInterval(gravity, 20);
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
    jumpOn = setInterval(jump, 10);
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
    gravPull += 0.02
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
    refresh()
  }
  else {
    console.log("Hitting Border");
  }
}

function moveRight() {
  if (player.x < 90) {
    console.log("Going Right")
    player.x += 0.5;
    refresh();
  } 
  else {
    console.log("Hitting Border");
  }
}