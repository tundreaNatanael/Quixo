let tabWidth = 500;
let tabHeight = 530;

function setup() {
  createCanvas(tabWidth, tabHeight);
  initSquares();
}
function draw() {
  background("black");
  drawSquares();
  drawGameStats();
}

