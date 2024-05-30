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
  drawPlayerVsBotHardButton();
  drawSquares();
  drawGameStats();
  drawResetButton();
  squareHover();
}

function mouseClicked(){
  if(mouseX > tabWidth-100 && mouseX < tabWidth && mouseY > tabHeight-30 && mouseY < tabHeight){
    initGame();
  }
}

