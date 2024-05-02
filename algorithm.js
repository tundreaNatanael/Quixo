const matrix = []; //matrix de patrate (globala) - fiecare patrat are x, y, color si type (0 - null, 1 - X, 2 - 0)
const boardSize = 5; //dimensiunea tablei de joc de 5x5
const squareSize = 100; //dimensiunea unui patrat de 100x100 pixeli
const squareColor = "#8f2e04"; //culoarea patratelor

//obiectul care contine informatii despre joc
const game = {
    playerTurn: 1, //jucatorul curent (1 - X, 2 - 0)
    antSquare: 0 //patratul pe care s-a dat click anterior - daca e 0 atuncea inseamna ca nu s-a dat click anterior ([i, j])
};

//functia de initializare a matrix - se executa la incarcarea paginii
function initSquares() {
    for (let i = 0; i < boardSize; i++) { //parcurgem liniile tablei
        matrix.push([]); //adaugam o linie noua goala in matrix
        for (let j = 0; j < boardSize; j++) { //parcurgem coloanele tablei
            //introducem pe fiecare pozitie din matrix un obiect care contine proprietatile x, y, color si type
            matrix[i].push({
                x: i * squareSize,
                y: j * squareSize,
                color: squareColor,
                side: 0
            });
        }
    }
}

//functia care se apeleaza cand se da click pe un patrat (primeste coordonatele patratului) -> (returneaza true sau false daca sunt corecte coordonatele)
function clickedSquare(i, j) {
    if(
        game.antSquare == 0 && //sa nu fie niciun patrat selectat anterior
        (matrix[i][j].side == 0 || matrix[i][j].side == game.playerTurn) && //patratul sa nu fie al adversarului
        (i == 0 || i == boardSize - 1 || j == 0 || j == boardSize - 1) //patratul sa fie pe margine
    ) 
    {
        game.antSquare = [i, j]; //game.antSquare primesc coordonatele patratului selectat
        return true
    }
    else{
        if(
            !(game.antSquare[0] == i && game.antSquare[1] == j) && //daca patratul selectat anterior nu e acelasi cu cel selectat acum
            (
                (game.antSquare[0] == i && (j == 0 || j == boardSize - 1)) ||
                (game.antSquare[1] == j && (i == 0 || i == boardSize - 1))
            ) //daca e pe aceiasi linie sau coloana cu patratul selectat anterior
        ){
            interchange(game.antSquare, [i, j]) //facem schimbarea
            game.playerTurn = 3 - game.playerTurn; //schimbam randul jucatorului
            game.antSquare = 0; //deselctam patratul
            return true
        }
    }
    return false
}
//functia care este apelata din clickedSquare si care face miscarea randului/coloanei (primeste coordonatele patratelor chosen (cel ales anterior) si target (cel pe care vrea jucatorul sa il schimbe))
function interchange(chosen, target){
    if(chosen[0] == target[0]){ //daca schimbarea se pe linie
        if(chosen[1] < target[1]){ //daca schimbarea se face spre dreapta
            for(let j=target[1]-1; j>=chosen[1]; j--){
                matrix[chosen[0]][j].side = matrix[chosen[0]][j+1].side
            }
            matrix[target[0]][target[1]].side = game.playerTurn
        }
        else{ //daca schimbarea se face spre stanga
            for(let j=target[1]+1; j<=chosen[1]; j--){
                matrix[chosen[0]][j].side = matrix[chosen[0]][j-1].side
            }
            matrix[target[0]][target[1]].side = game.playerTurn
        }
    }
    else{ //daca schimbarea se face pe coloana
        if(chosen[0] < target[0]){ //daca schimbarea se face in jos
            for(let i=target[0]-1; i>=chosen[0]; i--){
                matrix[i][chosen[1]].side = matrix[i+1][chosen[1]].side
            }
            matrix[target[0]][target[1]].side = game.playerTurn
        }
        else{ //daca schimbarea se face in sus
            for(let i=target[0]+1; i<=chosen[0]; i++){
                matrix[i][chosen[1]].side = matrix[i-1][chosen[1]].side
            }
            matrix[target[0]][target[1]].side = game.playerTurn
        }
    }
}