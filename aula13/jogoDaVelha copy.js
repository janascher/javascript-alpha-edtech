// ENTRADA
const player1 = "X";
const player2 = "O";

let playerNow = player1; // jogador do momento
let gameOver = false;
let plays = 0;

let element = document.querySelectorAll(".element");

console.log(element)
// console.log(element[1].dataset.id)
// console.log(element[1].dataset.game)

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

// LÊ OS QUADRADOS
function startElement() {

    for (i = 0; i < element.length; i++) {
        element[i].addEventListener("click", click);

    };

    // CLICK NOS QUADRADOS
    function click(e) {

        if (gameOver == true) {
            return
        };

        if (e.target.dataset.img == "") {

            if (playerNow == player1) {

                console.log("x")
                e.target.innerHTML = "<img src='./assets/icons/x.png' />";
                console.log(e.target.dataset.id)
                // "game"" vai servir para ver se o jogador venceu ou não o jogo
                e.target.dataset.game = player1;
                playerNow = player2;

            } else {
                console.log("o")
                e.target.innerHTML = "<img src='./assets/icons/o.png' />";
                console.log(e.target.dataset.id)
                // "game"" vai servir para ver se o jogador venceu ou não o jogo
                e.target.dataset.game = player2;
                playerNow = player1;
            };

            refreshDisplay();
            winner();
        };
    };
};

function winner() {

    let winner = "";


    if (
        (
            (element[0].dataset.game == element[3].dataset.game && element[0].dataset.game == element[6].dataset.game) ||
            (element[0].dataset.game == element[1].dataset.game && element[0].dataset.game == element[2].dataset.game) ||
            (element[0].dataset.game == element[4].dataset.game && element[0].dataset.game == element[8].dataset.game)
        ) && element[0].dataset.game != ""
    ) {

        winner = element[0].dataset.game;

    } else if (
        (
            (element[4].dataset.game == element[3].dataset.game && element[4].dataset.game == element[5].dataset.game) ||
            (element[4].dataset.game == element[1].dataset.game && element[4].dataset.game == element[7].dataset.game) ||
            (element[4].dataset.game == element[2].dataset.game && element[4].dataset.game == element[6].dataset.game)
        ) && element[4].dataset.game != ""
    ) {

        winner = element[4].dataset.game;

    } else if (
        (
            (element[8].dataset.game == element[7].dataset.game && element[8].dataset.game == element[6].dataset.game) ||
            (element[8].dataset.game == element[5].dataset.game && element[8].dataset.game == element[2].dataset.game)
        ) && element[8].dataset.game != ""
    ) {

        winner = element[8].dataset.game;

    };


    if (winner != "") {

        gameOver = true;
        console.log("O ganhador foi o: " + winner)

    };

    if (winner == "" && plays == 8) {

        gameOver = true;
        console.log("Empate")

    };

    plays++

};