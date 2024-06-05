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

//functia care verifica daca mouse-ul se afla in interiorul butonului de reset si apeleaza functia initGame
function checkReset(){
    if(
        (mouseX >= resetButton.x && mouseX <= resetButton.x + resetButton.xSize) &&
        (mouseY >= resetButton.y &&  mouseY <= resetButton.y + resetButton.ySize)
    ){
        initGame();
    }
}

//functia care verifica daca mouse-ul se afla in interiorul butonului de jucat cu bot usor si seteaza tipul de joc cu 2
function checkPlayerVsBotEasy(){
    if(
        (mouseX >= playerVeasyBotButton.x && mouseX <= playerVeasyBotButton.x + playerVeasyBotButton.xSize ) &&
        (mouseY >= playerVeasyBotButton.y && mouseY <= playerVeasyBotButton.y +playerVeasyBotButton.ySize)
    ){
        game.typeOfGame = 3 - game.typeOfGame;
        initGame();
        game.constplayerName2 = "Bot";
    }
}

//0functia care verifica daca jocul mai poate fi jucat (ramane 0 sau modifica game.winner cu 1 sau 2 daca este castigator)
function checkGameEnd(){
    if(checkWinner(3 - game.playerTurn)){
      console.log("verified")
        if(checkWinner(game.playerTurn)){
            game.winner = game.playerTurn
            drawEndGame()
            return true
        }
        else{
            game.winner = 3 - game.playerTurn //castgatorul este celalalt jucator
            drawEndGame()
            return true
        }
    }
    return false
}

//-functia care verifica daca jucatorul trimis ca parametru a castigat (returneaza true - daca a castigat, false - daca nu a castigat)
function checkWinner(checkPlayer){
    if(checkLines(checkPlayer) || checkColumns(checkPlayer) || checkDiagonals(checkPlayer))
        return true
    return false
}

//-functia care verifica daca jucatorul a castigat pe linii (returneaza true - daca a castigat, false - daca nu a castigat)
function checkLines(testPlayer){
    for (let i = 0; i < boardSize; i++) {
        let lineWin = true;
        for (let j = 0; j < boardSize; j++) {
          if (matrix[i][j].side != testPlayer) {
            lineWin = false;
            break;
          }
        }
        if (lineWin) return true;
      }
      return false;
    }

//-functia care verifica daca jucatorul a castigat pe coloane (returneaza true - daca a castigat, false - daca nu a castigat)
function checkColumns(testPlayer){
    for (let j = 0; j < boardSize; j++) {
        let colWin = true;
        for (let i = 0; i < boardSize; i++) {
          if (matrix[i][j].side != testPlayer) {
            colWin = false;
            break;
          }
        }
        if (colWin) return true;
      }
      return false;
    }
    

//-functia care verifica daca jucatorul a castigat pe diagonale (returneaza true - daca a castigat, false - daca nu a castigat)
function checkDiagonals(testPlayer){
    let diag1Win = true;
  for (let i = 0; i < boardSize; i++) {
    if (matrix[i][i].side != testPlayer) {
      diag1Win = false;
      break;
    }
  }
  
  let diag2Win = true;
  for (let i = 0; i < boardSize; i++) {
    if (matrix[i][boardSize - i - 1].side != testPlayer) {
      diag2Win = false;
      break;
    }
  }
  return diag1Win || diag2Win;
}