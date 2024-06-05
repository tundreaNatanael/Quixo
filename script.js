let tabWidth = 1400;
let tabHeight = 1000;

function setup() {
  createCanvas(tabWidth, tabHeight);
  initGame();
}
function draw() {
  background("#ffe6a7");
  drawCircle();
  drawPlayerVsBotEasyButton();
  drawSquares();
  drawGameStats();
  drawResetButton();
  squareHover();
  checkGameEnd()
}
function mouseClicked() {
    checkInsideBoard();
    checkReset();
    checkPlayerVsBotEasy();
}

