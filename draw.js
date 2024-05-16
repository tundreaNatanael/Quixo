//functia care deseneaza patratele pe canvas
function drawSquares() {
    for (let i = 0; i < boardSize; i++) {
        for(let j = 0; j < boardSize; j++){
            fill(matrix[i][j].color);
            square(matrix[i][j].x,matrix[i][j].y, squareSize);
        }
    }
}

//functia care deseneaza informatiile despre joc
function drawGameStats() {
    fill("white");
    textSize(20);
    if(game.playerTurn == 1)
        text("Player's " + game.playerName1 + " turn", 10, 520);
    else 
        text("Player's " + game.playerName2 + " turn", 10, 520);
}

//functia care deseneaza butonul de reset
function drawResetButton() {
    fill("red");
    rect(tabWidth-100, tabHeight-30, 100, 30);
    fill("white");
    textSize(15);
    text("Reset", tabWidth-70, tabHeight-10);
}