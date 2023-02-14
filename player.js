
var gravityOn;
var gravPull = 1;
var jumpOn;
var falling = false;
var jumping = false;

var groundBorder = 80; //Ground Border

function refresh() {
  player.icon.style.top = player.y + "%"
  player.icon.style.left = player.x + "%"
  console.log("X: "+player.icon.style.left+"/ Y: "+ player.icon.style.top);
  if (player.y < groundBorder && falling == false && jumping == false) {
    falling = true;
    gravityOn = setInterval(gravity, 20);
  }
}

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    if (jumping == false && falling == false) {
      jumping = true;
      gravPull = 1;
      jumpOn = setInterval(jump, 10);
      setTimeout(function(){
        clearInterval(jumpOn); 
        jumping = false;
        refresh();
      }, 1000);
    }
  }
})

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
  player.y -= gravPull;
  gravPull -= 0.01
  refresh()
}