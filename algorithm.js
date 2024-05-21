const matrix = []; //matrix de patrate (globala) - fiecare patrat are x, y, color si side (0 - gol, 1 - X, 2 - 0)
const boardSize = 5; //dimensiunea tablei de joc de 5x5
const squareSize = 100; //dimensiunea unui patrat de 100x100 pixeli
const squareColor = "#8f2e04"; //culoarea patratelor
const startBoardX = 0; //pozitia x de start a tablei de joc
const startBoardY = 0; //pozitia y de start a tablei de joc
constplayerName1 = "X";
constplayerName2 = "O";

//obiectul care contine informatii despre joc
const game = {
    playerTurn: 1, //jucatorul curent (1 - X, 2 - 0)
    antSquare: 0, //patratul pe care s-a dat click anterior - daca e 0 atuncea inseamna ca nu s-a dat click anterior (i, j)
    winner : 0, //castigatorul jocului (0 - nimeni, 1 - X, 2 - 0)
    playerName1: constplayerName1, //setam initial numele jucatorului 1 cu "1"
    playerName2: constplayerName2, //setam initial numele jucatorului 2 cu "2"
    typeOfGame: 2 //tipul de joc (2 - jucator vs jucator, 1 - jucator vs calculator slab, 3 - jucator vs calculator moderat)
};

//0functia de initializare a matrix - se executa la incarcarea paginii
function initGame() {
    //reluam jocul de la inceput
    game.playerTurn = 1 //jucatorul curent (1 - X, 2 - 0)
    game.antSquare = 0 //patratul pe care s-a dat click anterior - daca e 0 atuncea inseamna ca nu s-a dat click anterior (i, j)
    game.winner = 0 //castigatorul jocului (0 - nimeni, 1 - X, 2 - 0)

    //initializam numele jucatorilor cu valorile din inputurile de pe pagina
    if(document.getElementById("inputPlayerName1") != null)
        constplayerName1 = String(document.getElementById("inputPlayerName1").value);
    if(document.getElementById("inputPlayerName2") != null)
        constplayerName2 = String(document.getElementById("inputPlayerName2").value);

    if(constplayerName1 != "")
        game.playerName1 = constplayerName1;
    if(constplayerName2 != "")
        game.playerName2 = constplayerName2;

    //initializam matrix cu patratele tablei de joc
    for (let i = 0; i < boardSize; i++) { //parcurgem liniile tablei
        matrix.push([]); //adaugam o linie noua goala in matrix
        for (let j = 0; j < boardSize; j++) { //parcurgem coloanele tablei
            //introducem pe fiecare pozitie din matrix un obiect care contine proprietatile x, y, color si type
            matrix[i].push({
                x: i * squareSize + startBoardX,
                y: j * squareSize + startBoardY,
                color: squareColor,
                side: 0
            });
        }
    }
}

//0functia care se apeleaza cand se da click pe un patrat (primeste coordonatele patratului) -> (returneaza true sau false daca sunt corecte coordonatele)
function clickedSquare(i, j) {
    if(
        game.antSquare == 0 && //sa nu fie niciun patrat selectat anterior
        (matrix[i][j].side == 0 || matrix[i][j].side == game.playerTurn) && //patratul sa nu fie al adversarului
        (i == 0 || i == boardSize - 1 || j == 0 || j == boardSize - 1) //patratul sa fie pe margine
    ) 
    {
        game.antSquare = {i: i, j: j}; //game.antSquare primesc coordonatele patratului selectat
        return true
    }
    else{
        if(
            !(game.antSquare.i == i && game.antSquare.j == j) && //daca patratul selectat anterior nu e acelasi cu cel selectat acum
            (
                (game.antSquare.i == i && (j == 0 || j == boardSize - 1)) ||
                (game.antSquare.j == j && (i == 0 || i == boardSize - 1))
            ) //daca e pe aceiasi linie sau coloana cu patratul selectat anterior
        ){
            change(game.antSquare, {i: i, j: j}) //facem schimbarea
            game.playerTurn = 3 - game.playerTurn; //schimbam randul jucatorului
            game.antSquare = 0; //deselctam patratul
            return true
        }
    }
    return false
}

//0functia care verifica daca jocul mai poate fi jucat (ramane 0 sau modifica game.winner cu 1 sau 2 daca este castigator)
function checkGameEnd(){
    if(checkWinner(3 - game.playerTurn)){
        if(checkWinner(game.playerTurn)){
            game.winner = game.playerTurn
            return true
        }
        else{
            game.winner = 3 - game.playerTurn //castgatorul este celalalt jucator
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
    let lineWin = true
    for(let i=0; i<boardSize && lineWin; i++){
        for(let j=0; j<boardSize; j++)
            if(matrix[i][j].side != testPlayer){
                lineWin = false
                break;
            }
    }
    return lineWin
}

//-functia care verifica daca jucatorul a castigat pe coloane (returneaza true - daca a castigat, false - daca nu a castigat)
function checkColumns(testPlayer){
    let colWin = true
    for(let j=0; j<boardSize && colWin; j++){
        for(let i=0; i<boardSize; i++)
            if(matrix[i][j].side != testPlayer){
                colWin = false
                break;
            }
    }
    return colWin
}

//-functia care verifica daca jucatorul a castigat pe diagonale (returneaza true - daca a castigat, false - daca nu a castigat)
function checkDiagonals(testPlayer){
    let diag1Win = true
    for(let i=0; i<boardSize && diag1Win; i++)
        if(matrix[i][i].side != testPlayer){
            diagWin = false
            break;
        }
    
    let diag2Win = true
    for(let i=0; i<boardSize && diag2Win; i++)
        if(matrix[i][boardSize-i-1].side != testPlayer){
            diagWin = false
            break;
        }
    return diag1Win || diag2Win
}
//-functia care este apelata din clickedSquare si care face miscarea randului/coloanei (primeste coordonatele patratelor chosen (cel ales anterior) si target (cel pe care vrea jucatorul sa il schimbe))
function change(chosen, target) {
    if (chosen.i == target.i) { // If the change is on the same row
        if (chosen.j < target.j) { // If the change is towards the right
            for (let j = chosen.j; j < target.j; j++) {
                matrix[chosen.i][j].side = matrix[chosen.i][j + 1].side;
            }
            matrix[target.i][target.j].side = game.playerTurn;
        } else { // If the change is towards the left
            for (let j = chosen.j; j >= target.j; j--) {
                matrix[chosen.i][j].side = matrix[chosen.i][j - 1].side;
            }
            matrix[target.i][target.j].side = game.playerTurn;
        }
    } else { // If the change is on the same column
        if (chosen.i < target.i) { // If the change is downwards
            for (let i = chosen.i; i < target.i; i++) {
                matrix[i][chosen.j].side = matrix[i + 1][chosen.j].side;
            }
            matrix[target.i][target.j].side = game.playerTurn;
        } else { // If the change is upwards
            for (let i = chosen.i; i > target.i; i--) {
                matrix[i][chosen.j].side = matrix[i - 1][chosen.j].side;
            }
            matrix[target.i][target.j].side = game.playerTurn;
        }
    }
}