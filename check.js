//fisierul care contine functiile care verifica anumite lucruri

//functia care verifica daca mouse-ul se afla in interiorul tablei de joc si apeleaza functia clickedSquare calculand i si j din coordonatele mouseX si mouseY
checkInsideBoard(){
    if(
        (startBoardX <= mouseX && mouseX <= startBoardX + boardSize * squareSize) &&
        (startBoardY <= mouseY && mouseY <= startBoardY + boardSize * squareSize)
    )
        clickedSquare(Math.floor((mouseY - startBoardY)/boardSize), Math.floor((mouseX - startBoardX)/boardSize))
}
checkReset(){
    if(
        (stardBoardX + 4 *squareSize <= mouseX && <= startBoardX + 4 *squareSize + playerVsBotEasyButtonSize) &&
        (stardBoardY + 4 *squareSize <= mouseY && <= startBoardY + 4 *squareSize + playerVsBotEasyButtonSize)
    )
        clickedSquare(Math.floor((mouseY - startBoardY + 4 *squareSize)/boardSize), Math.floor((mouseX - startBoardX + 4 *squareSize)/boardSize))
}