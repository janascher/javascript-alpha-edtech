// ENTRADA
const player1 = "X";
const player2 = "O";
const clickedElements = new Array(3); // Criado um array dimensional

let playerNow = player1; // jogador do momento
let gameOver = false;
let plays = 0;

const btnReset = document.querySelector("#btn").addEventListener("click", reset);
let element = document.querySelectorAll(".element");

for (i = 0; i < clickedElements.length; i++) {

    clickedElements[i] = [];
};

refreshDisplay();
startElement();

// ATUALIZA O DISPLAY
function refreshDisplay() {

    const player = document.querySelectorAll("section#display > img")[0];

    if (gameOver == true) {

        return;
    };

    if (playerNow == player1) {

        player.setAttribute("src", "./assets/icons/x.png");
    } else {

        player.setAttribute("src", "./assets/icons/o.png");
    };
};

// LÊ O TABULEIRO
function startElement() {

    for (i = 0; i < element.length; i++) {

        element[i].addEventListener("click", click);
    };
};

// CLICK NOS ELEMENTOS
function click(e) {

    if (gameOver == true) {

        return
    };

    if (e.target.dataset.img == "") {

        if (playerNow == player1) {

            e.target.innerHTML = "<img src='./assets/icons/x.png' />";
            // "game"" vai servir para ver se o jogador venceu ou não o jogo
            e.target.dataset.game = player1;
            playerNow = player2;
            array(e, "x");

        } else {
            
            e.target.innerHTML = "<img src='./assets/icons/o.png' />";
            // "game"" vai servir para ver se o jogador venceu ou não o jogo
            e.target.dataset.game = player2;
            playerNow = player1;
            array(e, "o");
        };

        refreshDisplay();
        winner();
    };
};

// GANHADOR OU EMPATE
function winner() {

    let winner = "";

    const resultGame = document.querySelector("#result");

    if (
        (
            (element[0].dataset.game == element[3].dataset.game && element[0].dataset.game == element[6].dataset.game) ||
            (element[0].dataset.game == element[1].dataset.game && element[0].dataset.game == element[2].dataset.game) ||
            (element[0].dataset.game == element[4].dataset.game && element[0].dataset.game == element[8].dataset.game)
        ) 
        && element[0].dataset.game != ""
    ) {

        winner = element[0].dataset.game;

    } else if (
        (
            (element[4].dataset.game == element[3].dataset.game && element[4].dataset.game == element[5].dataset.game) ||
            (element[4].dataset.game == element[1].dataset.game && element[4].dataset.game == element[7].dataset.game) ||
            (element[4].dataset.game == element[2].dataset.game && element[4].dataset.game == element[6].dataset.game)
        ) 
        && element[4].dataset.game != ""
    ) {

        winner = element[4].dataset.game;

    } else if (
        (
            (element[8].dataset.game == element[7].dataset.game && element[8].dataset.game == element[6].dataset.game) ||
            (element[8].dataset.game == element[5].dataset.game && element[8].dataset.game == element[2].dataset.game)
        ) 
        && element[8].dataset.game != ""
    ) {

        winner = element[8].dataset.game;
    };


    if (winner != "") {

        gameOver = true;
        resultGame.textContent = `Parabéns! O "${winner}" venceu!`;  
    };

    if (winner == "" && plays == 8) {

        gameOver = true;
        resultGame.textContent = `Empate! Tente novamente ;D`;
    };

    plays++

};

// CRIA UM ARRAY 2D
function array(idNum, symbol) {

    let ii = parseInt(idNum.target.dataset.id[0])-1; // Define a linha a ser armazenada
    let jj = parseInt(idNum.target.dataset.id[2])-1; // Define a coluna a ser armazenada

    clickedElements[ii][jj] = symbol;

    console.log(clickedElements, ii, jj);
};

// BOTÃO DE REINICIAR O JOGO
function reset(){ 

    location.reload();
    return false;
};