let tabWidth = 1400;
let tabHeight = 1000;

function setup() {
  createCanvas(tabWidth, tabHeight);
  initGame();
}
function draw() {
  background(backgroundColor);
  drawCircle();
  drawPlayerVsBotEasyButton();
  drawSquares()
  drawGameStats();
  drawResetButton();
  squareHover();
}
function mouseClicked() {
    checkInsideBoard();
    checkReset();
    checkPlayerVsBotEasy();
}

