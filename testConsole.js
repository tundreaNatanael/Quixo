// test the program in console
initSquares();
console.log("first click: ", clickedSquare(3, 0));
console.log("second click: ", clickedSquare(0, 0));
console.log("player: ", game.playerTurn);
for(let i=0; i<boardSize; i++){
    let row = ""
    for(let j=0; j<boardSize; j++)
        row += matrix[i][j].side + " "
    console.log(row)
}

console.log("first click: ", clickedSquare(0, 2));
console.log("second click: ", clickedSquare(4, 2));
console.log("player: ", game.playerTurn);
for(let i=0; i<boardSize; i++){
    let row = ""
    for(let j=0; j<boardSize; j++)
        row += matrix[i][j].side + " "
    console.log(row)
}