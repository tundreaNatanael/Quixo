//fisierul care contine functiile care verifica anumite lucruri

//functia care verifica daca mouse-ul se afla in interiorul tablei de joc si apeleaza functia clickedSquare calculand i si j din coordonatele mouseX si mouseY
checkInsideBoard();{
    if(
        (startBoardX <= mouseX && mouseX <= startBoardX + boardSize * squareSize) &&
        (startBoardY <= mouseY && mouseY <= startBoardY + boardSize * squareSize)
    ){
        clickedSquare(Math.floor((mouseY - startBoardY)/squareSize), Math.floor((mouseX - startBoardX)/squareSize));
    }
}
checkReset();{
    if(
        (startBoardX + 4 *squareSize <= mouseX && mouseX <= startBoardX + 4 *squareSize + playerVsBotEasyButtonSize) &&
        (startBoardY + 4 *squareSize <= mouseY && mouseY <= startBoardY + 4 *squareSize + playerVsBotEasyButtonSize)
    ){
        clickedSquare(Math.floor((mouseY - (startBoardY + 4 *squareSize)/squareSize)), Math.floor((mouseX - (startBoardX + 4 *squareSize)/squareSize)));
    }
}
checkPlayerVsBotEasy();{
    
}