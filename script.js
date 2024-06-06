let tabWidth = 1400;
let tabHeight = 1000;

function setup() {
  createCanvas(tabWidth, tabHeight);
  initGame();
}
function draw() {
  background(backgroundColor);
  drawCircle();
  drawSquares2();
  drawPlayerVsBotEasyButton();
  if(game.winner == 0) {
    drawSquares();
    squareHover();
    drawGameStats();
  }
  else
    drawEndGame();
  drawResetButton();
  
}
function mouseClicked() {
    checkInsideBoard();
    checkReset();
    checkPlayerVsBotEasy();
}

