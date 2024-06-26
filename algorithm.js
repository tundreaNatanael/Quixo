const backgroundColor = "#ffe6a7"; //culoarea de fundal
const circleColor = "#432818"; //culoarea de fundal
matrix = []; //matrix de patrate (globala) - fiecare patrat are x, y, color si side (0 - gol, 1 - X, 2 - 0)
const boardSize = 5; //dimensiunea tablei de joc de 5x5
const squareSize = 100; //dimensiunea unui patrat de 100x100 pixeli
const squareColor = "#99582a"; //culoarea patratelor
const squareHoverColor = "grey"; //culoarea patratelor cand trecem cu mouse-ul peste ele
const squareRadius = 10; //rotunjirea patratelor
const squareSelectedColor = "#99742a"; //culoarea patratelor selectate
const startBoardX = 450; //pozitia x de start a tablei de joc
const startBoardY = 120; //pozitia y de start a tablei de joc
constplayerName1 = "X";
constplayerName2 = "O";

resetButton = {
    x: 850,
    y: 620,
    xSize: 100,
    ySize: 30,
    color: "#6f1d1b",
    text: {
        x: 850 + 20,
        y: 620 + 20,
        size: 21,
        color: "white",
        text: "Reset"
    }
}

playerVeasyBotButton = {
    x: 1200,
    y: 10,
    xSize: 190,
    ySize: 30,
    color: "#6f1d1b",
    normalColor: "#ab5957",
    selectedColor: "black",
    text: {
        x: 1200 + 10,
        y: 10 + 22,
        size: 21,
        color: "white",
        text: "Player vs easyBot"
    }
}

//obiectul care contine informatii despre joc
const game = {
    playerTurn: 1, //jucatorul curent (1 - X, 2 - 0)
    antSquare: 0, //patratul pe care s-a dat click anterior - daca e 0 atuncea inseamna ca nu s-a dat click anterior (i, j)
    winner : 0, //castigatorul jocului (0 - nimeni, 1 - X, 2 - 0)
    playerName1: constplayerName1, //setam initial numele jucatorului 1 cu "1"
    playerName2: constplayerName2, //setam initial numele jucatorului 2 cu "2"
    typeOfGame: 1 //tipul de joc (1 - player vs player, 2 - player vs easyBot)
};

//0functia de initializare a matrix - se executa la incarcarea paginii
function initGame() {
    //reluam jocul de la inceput
    matrix = [] //golim matrix
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
    if(i < 0 || i >= boardSize || j < 0 || j >= boardSize) //daca coordonatele sunt in afara tablei de joc
        return false
    if(
        game.antSquare == 0 && //sa nu fie niciun patrat selectat anterior
        (matrix[i][j].side == 0 || matrix[i][j].side == game.playerTurn) && //patratul sa nu fie al adversarului
        (i == 0 || i == boardSize - 1 || j == 0 || j == boardSize - 1) //patratul sa fie pe margine
    ) 
    {
        game.antSquare = {i: i, j: j}; //game.antSquare primesc coordonatele patratului selectat
        matrix[game.antSquare.i][game.antSquare.j].color = squareSelectedColor; //patratul selectat devine de alta culoare
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
            matrix[game.antSquare.i][game.antSquare.j].color = squareColor; //patratul selectat anterior revine la culoarea initiala
            game.antSquare = 0; //deselctam patratul
            if(game.typeOfGame == 1 && game.playerTurn == 2) { //daca jucam cu botul si e randul lui
                if(checkGameEnd())
                    console.log(game.winner)
                botMove()
            } else if(checkGameEnd())
                console.log(game.winner)
            return true
        }
    }
    return false
}

//-functia care este apelata din clickedSquare si care face miscarea randului/coloanei (primeste coordonatele patratelor chosen (cel ales anterior) si target (cel pe care vrea jucatorul sa il schimbe))
function change(chosen, target) {
    if (chosen.i === target.i) { // If the change is on the same row
        if (chosen.j < target.j) { // If the change is towards the right
            for (let j = chosen.j; j < target.j; j++) {
                matrix[chosen.i][j].side = matrix[chosen.i][j + 1].side;
            }
        } else { // If the change is towards the left
            for (let j = chosen.j; j > target.j; j--) {
                matrix[chosen.i][j].side = matrix[chosen.i][j - 1].side;
            }
        }
    } else { // If the change is on the same column
        if (chosen.i < target.i) { // If the change is downwards
            for (let i = chosen.i; i < target.i; i++) {
                matrix[i][chosen.j].side = matrix[i + 1][chosen.j].side;
            }
        } else { // If the change is upwards
            for (let i = chosen.i; i > target.i; i--) {
                matrix[i][chosen.j].side = matrix[i - 1][chosen.j].side;
            }
        }
    }
    matrix[target.i][target.j].side = game.playerTurn;
}

//-functia care face miscarea botului
function botMove(){
    while(!clickedSquare(Math.floor((Math.random() * 10)) % boardSize, Math.floor((Math.random() * 10)) % boardSize)) {}
    while(!clickedSquare(Math.floor((Math.random() * 10)) % boardSize, Math.floor((Math.random() * 10)) % boardSize)) {}
}