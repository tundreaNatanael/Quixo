//fisierul care contine functiile care verifica anumite lucruri

//functia care verifica daca mouse-ul se afla in interiorul tablei de joc si apeleaza functia clickedSquare calculand i si j din coordonatele mouseX si mouseY
function checkInsideBoard() {
    if(
        (startBoardX <= mouseX && mouseX <= startBoardX + boardSize * squareSize) &&
        (startBoardY <= mouseY && mouseY <= startBoardY + boardSize * squareSize)
    ){
        clickedSquare(Math.floor((mouseX - startBoardX)/squareSize), Math.floor((mouseY - startBoardY)/squareSize));
    }
}

function checkReset(){
    if(
        (mouseX >= resetButton.x && mouseX <= resetButton.x + resetButton.xSize) &&
        (mouseY >= resetButton.y &&  mouseY <= resetButton.y + resetButton.ySize)
    ){
        initGame();
    }
}
function checkPlayerVsBotEasy(){
    if(
        (mouseX >= playerVeasyBotButton.x && mouseX <= playerVeasyBotButton.x + playerVeasyBotButton.xSize ) &&
        (mouseY >= playerVeasyBotButton.y && mouseY <= playerVeasyBotButton.y +playerVeasyBotButton.ySize)
    ){
        game.typeOfGame = 2;
    }
}
