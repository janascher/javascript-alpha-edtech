const numCards = document.querySelector("#numCards");
const btnDrawCards = document.querySelector("#btnDrawCards");
const btnDrawBall = document.querySelector("#btnDrawBall");

let result = document.querySelector("#result");
let element = document.querySelector("#element");

const players = 4;
const cards = new Array(players);

// Cria as cartelas e o números nelas, bem como, verifica se os números se repetem em cada cartela
function bingoCard() {
    const minNumber = 1;
    const maxNumber = 75;

    let numberCardArray = [];

    function createNumbers(maxNumber, minNumber, numberCardArray) {
        while (numberCardArray.length < 10) {
            let count = 0;
            
            let randomNumber = Math.floor(
                Math.random() * (maxNumber - minNumber) + minNumber
            );

            for (j = 0; j < numberCardArray.length; j++) {
                if (randomNumber == numberCardArray[j]) {
                    count++;
                }
            }

            if (count == 0) {
                const object = {
                    number: randomNumber,
                    select: false
                }
                numberCardArray.push(object);
            }
        }
    }

    createNumbers(maxNumber, minNumber, numberCardArray);
    return numberCardArray;
}

for (k = 0; k < players; k++) {
    cards[k] = bingoCard();
}


// [
//     {
//         numero: 2, // de 1 - 75
//         selecionado: true //true ou false
//     }
// ];

console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
console.log(cards[3]);

// SORTEAR NÚMERO
function bingoDraw(minNumber, maxNumber) {
    // minNumber = 1;
    // maxNumber = 75;

    let numberDrawArray = [];
    let randomBallNumber;

    function drawNumber() {
        randomBallNumber = Math.floor(
            Math.random() * (maxNumber - minNumber) + minNumber
        );
        
        while(numberDrawArray.includes(randomBallNumber) === true){
            randomBallNumber = Math.floor(
                Math.random() * (maxNumber - minNumber) + minNumber
            );
        }

        numberDrawArray.push(randomBallNumber);

        console.log(numberDrawArray);
        // randomBallNumber++;
    }

    // function isSorteado(x) {
    //     return true
        
    // }

    return {drawNumber, verificarSeFoiSorteado};
}

let countDraw = bingoDraw(1, 75);
countDraw.drawNumber();
// countDraw.verificarSeFoiSorteado(5);