//functia care deseneaza patratele pe canvas
function drawSquares() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            fill(matrix[i][j].color);
            square(matrix[i][j].x, matrix[i][j].y, squareSize);
            if (matrix[i][j].side == 1) {
                textSize(64);
                fill("black");
                text("X", matrix[i][j].x + squareSize / 4, matrix[i][j].y + squareSize * 3 / 4);
            } else if (matrix[i][j].side == 2) {
                textSize(64);
                fill("black");
                text("O", matrix[i][j].x + squareSize / 4, matrix[i][j].y + squareSize * 3 / 4);
            }
        }
    }
}
function drawCircle() {
    fill("#432818");
    circle(tabWidth - 700, tabHeight - 620, 740);
}
//functia care deseneaza informatiile despre joc
function drawGameStats() {
    fill("#6f1d1b"); // Culoarea pătratului
    rect(tabWidth - 950, tabHeight - 380, 200, 30);// Pătratul pentru text 
    if (game.playerTurn == 1) {
        fill("white");// Culoarea scrisului
        textSize(21);
        text("Player's " + game.playerName1 + " turn", 460, 640);
    }
    else {
        fill("white");
        textSize(21);
        text("Player's " + game.playerName2 + " turn", 460, 640);
    }
}

//functia care deseneaza butonul de reset
function drawResetButton() {
    fill(resetButton.color);
    rect(resetButton.x, resetButton.y, resetButton.xSize, resetButton.ySize);
    fill(resetButton.text.color);
    textSize(resetButton.text.size);
    text(resetButton.text.text, resetButton.text.x, resetButton.text.y);
}
//functia care deseneaza butonu de jucat cu bot usor
function drawPlayerVsBotEasyButton() {
    fill(playerVeasyBotButton.color);
    rect(playerVeasyBotButton.x, playerVeasyBotButton.y, playerVeasyBotButton.xSize, playerVeasyBotButton.ySize);
    fill( playerVeasyBotButton.text.color);
    textSize(playerVeasyBotButton.text.size);
    text(playerVeasyBotButton.text.text, playerVeasyBotButton.text.x, playerVeasyBotButton.text.y);
}
//functia care ne arata care asupra carui patrat ne aflam cu mouse-ul
function squareHover() {
    for (let k = 0; k < boardSize; k++) {
        if (mouseX > matrix[k][0].x && mouseX < matrix[k][0].x + squareSize && mouseY > matrix[k][0].y && mouseY < matrix[k][0].y + squareSize) {
            fill(15, 0, 0, 80); // Umbra neagră cu transparență
            rect(matrix[k][0].x, matrix[k][0].y, squareSize, squareSize); // Desenăm umbra peste pătrat
        } else if (mouseX > matrix[0][k].x && mouseX < matrix[0][k].x + squareSize && mouseY > matrix[0][k].y && mouseY < matrix[0][k].y + squareSize) {
            fill(15, 0, 0, 80); // Umbra neagră cu transparență
            rect(matrix[0][k].x, matrix[0][k].y, squareSize, squareSize); // Desenăm umbra peste pătrat
        } else if (mouseX > matrix[k][boardSize-1].x && mouseX < matrix[k][boardSize-1].x + squareSize && mouseY > matrix[k][boardSize-1].y && mouseY < matrix[k][boardSize-1].y + squareSize) {
            fill(15, 0, 0, 80); // Umbra neagră cu transparență
            rect(matrix[k][boardSize-1].x, matrix[k][boardSize-1].y, squareSize, squareSize); // Desenăm umbra peste pătrat
        } else if (mouseX > matrix[boardSize-1][k].x && mouseX < matrix[boardSize-1][k].x + squareSize && mouseY > matrix[boardSize-1][k].y && mouseY < matrix[boardSize-1][k].y + squareSize) {
            fill(15, 0, 0, 80); // Umbra neagră cu transparență
            rect(matrix[boardSize-1][k].x, matrix[boardSize-1][k].y, squareSize, squareSize); // Desenăm umbra peste pătrat
        } 
    }
}