const matrix = []; //matrix de patrate (globala) - fiecare patrat are x, y, color si type (0 - null, 1 - X, 2 - 0)
const boardSize = 5; //dimensiunea tablei de joc de 5x5
const squareSize = 100; //dimensiunea unui patrat de 100x100 pixeli

//functia de initializare a matrix - se executa la incarcarea paginii
function initSquares() {
    for (let i = 0; i < boardSize; i++) { //parcurgem liniile tablei
        matrix.push([]); //adaugam o linie noua goala in matrix
        for (let j = 0; j < boardSize; j++) { //parcurgem coloanele tablei
            //introducem pe fiecare pozitie din matrix un obiect care contine proprietatile x, y, color si type
            matrix[i].push({
                x: i * squareSize,
                y: j * squareSize,
                color: "brown",
                side: 0
            });
        }
    }
}

// test the program in node.js
// initSquares();
// for(let i=0; i<boardSize; i++){
//     for(let j=0; j<boardSize; j++)
//         process.stdout.write("("+matrix[i][j].x+", "+matrix[i][j].y+", "+matrix[i][j].color+"), ");
//     console.log()
// }