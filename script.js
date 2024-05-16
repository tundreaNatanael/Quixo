let tabWidth = 500;
let tabHeight = 530;

function setup() {
  createCanvas(tabWidth, tabHeight);
  initGame();
}
function draw() {
  background("black");
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

