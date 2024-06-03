//fisierul care contine functiile care verifica anumite lucruri

//functia care verifica daca mouse-ul se afla in interiorul tablei de joc si apeleaza functia clickedSquare calculand i si j din coordonatele mouseX si mouseY
checkInsideBoard(){
    if(
        (startBooardX <= mouseX && mouseX <= startBoardX + boardSize * squareSize) &&
        (startBooardY <= mouseY && mouseY <= startBoardY + boardSize * squareSize)
    )
        clickedSquare(Math.floor((mouseY - startBoardY)/boardSize), Math.floor((mouseX - startBoardX)/boardSize))
}