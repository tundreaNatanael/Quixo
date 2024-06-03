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
    fill("#6f1d1b");
    rect(tabWidth - 550, tabHeight - 380, 100, 30);
    fill("white");
    textSize(21);
    text("Reset", tabWidth - 525, tabHeight - 360);
}
//functia care deseneaza butonu de jucat cu bot usor
function drawPlayerVsBotEasyButton() {
    fill("#6f1d1b");
    rect(tabWidth - 110, tabHeight - 990, 100, 30);
    fill("white");
    textSize(21);
    text("Bot easy", tabWidth - 100, tabHeight - 970);
}
//functia care deseneaza butonu de jucat cu bot greu
function drawPlayerVsBotHardButton() {
    fill("#6f1d1b");
    rect(tabWidth - 110, tabHeight - 950, 100, 30);
    fill("white");
    textSize(20);
    text("Bot hard", tabWidth - 100, tabHeight - 930);
}
//functia care ne arata care asupra carui patrat ne aflam cu mouse-ul
function squareHover() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (mouseX > matrix[i][j].x && mouseX < matrix[i][j].x + squareSize && mouseY > matrix[i][j].y && mouseY < matrix[i][j].y + squareSize) {
                fill(15, 0, 0, 80); // Umbra neagră cu transparență
                rect(matrix[i][j].x, matrix[i][j].y, squareSize, squareSize); // Desenăm umbra peste pătrat
            }
        }
    }
}