let tabWidth = 1400;
let tabHeight = 1000;

function setup() {
  createCanvas(tabWidth, tabHeight);
  initGame();
}
function draw() {
  background("#ffe6a7");
  drawCircle();
  drawPlayerVsBotHardButton();
  drawPlayerVsBotEasyButton();
  drawSquares();
  drawGameStats();
  drawResetButton();
  squareHover();
  if (game.winner) {
    fill("yellow");
    textSize(32);
    text(game.winner + " wins!", tabWidth / 2 - 100, tabHeight / 2);
    noLoop();
  }
}

function mouseClicked() {
  checkInsideBoard();
  checkReset();
  //checkPlayerVsBotEasy()

  // if (mouseX > tabWidth - 100 && mouseX < tabWidth && mouseY > tabHeight - 30 && mouseY < tabHeight) {
  //   initGame();
  // } else {
  //   for (let i = 0; i < boardSize; i++) {
  //     for (let j = 0; j < boardSize; j++) {
  //       if (mouseX > matrix[i][j].x && mouseX < matrix[i][j].x + squareSize &&
  //           mouseY > matrix[i][j].y && mouseY < matrix[i][j].y + squareSize) {
  //         if (clickedSquare(i, j)) {
  //           if (checkGameEnd()) {
  //             noLoop();
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}

checkInsideBoard() {
  if(
      (startBoardX <= mouseX && mouseX <= startBoardX + boardSize * squareSize) &&
      (startBoardY <= mouseY && mouseY <= startBoardY + boardSize * squareSize)
  ){
      clickedSquare(Math.floor((mouseY - startBoardY)/squareSize), Math.floor((mouseX - startBoardX)/squareSize));
  }
}
