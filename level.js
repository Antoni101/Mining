

var bgcolor = "Cornsilk"

function checkLevel() {
  if (player.level == 1) {
    bgcolor = "Cornsilk";
  }
  if (player.level == 2) {
    bgcolor = "Gold";
  }
  if (player.level == 3) {
    bgcolor = "GoldenRod";
  }
  document.body.style.backgroundColor = bgcolor;
}