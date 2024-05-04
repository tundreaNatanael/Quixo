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
    text("Player's " + game.playerTurn + " turn", 10, 520);
}