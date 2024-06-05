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
  if (game.winner) {
    fill("yellow");
    textSize(32);
    text(game.winner + " wins!", tabWidth / 2 - 100, tabHeight / 2);
  }
}
function mouseClicked() {
    checkInsideBoard();
    checkReset();
    checkPlayerVsBotEasy();
    
}

