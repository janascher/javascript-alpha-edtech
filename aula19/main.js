import BingoDraw from "./modules/draw.js";
import BingoCard from "./modules/card.js";

const numCards = document.querySelector("#numCards");
const btnDrawCards = document.querySelector("#btnDrawCards");
const btnDrawBall = document.querySelector("#btnDrawBall");
const drawNumber = document.querySelector("#drawNumber");
const grid = document.querySelector("#grid");

let result = document.querySelector("#result");
let arrayBingoCards = [];
let interval;
let element;

btnDrawCards.addEventListener("click", newCards);
btnDrawBall.addEventListener("click", newBall);

function newBall() {
    const drawer = BingoDraw(5, 1); // ARRUMAR PARA 75
    interval = setInterval(randomNumber, 1000, drawer); // ARRUMAR PARA 5000
}

function randomNumber(drawer) {
    if (drawer.getNumberDrawArray().length == 5) { // ARRUMAR PARA 75
        clearInterval(interval);
    } else {
        let numberDrawer = drawer.drawNumber();

        drawNumber.innerHTML = `
            <h2>${numberDrawer}</h2>
        `;
    }
}

function newCards() {
    const amountCard = parseInt(numCards.value);
    arrayBingoCards = [];
    grid.innerHTML = "";

    for (let k = 0; k < amountCard; k++) {
        const card = BingoCard(75, 1);
        arrayBingoCards.push(card);
        gridCards(card, k);
    }
}

// function selectNumbersCards() {

//     const selected = numCards.select;
//     console.log(selected)

// }

function gridCards(card, player) {
    let number = card.getNumberCards();

    grid.innerHTML += `
    <button data-player="${player}" data-id="0" class="element">${number[0]["value"]}</button>
    <button data-player="${player}" data-id="1" class="element">${number[1]["value"]}</button>
    <button data-player="${player}" data-id="2" class="element">${number[2]["value"]}</button>
    <button data-player="${player}" data-id="3" class="element">${number[3]["value"]}</button>
    <button data-player="${player}" data-id="4" class="element">${number[4]["value"]}</button>
    <button data-player="${player}" data-id="5" class="element">${number[5]["value"]}</button>
    <button data-player="${player}" data-id="6" class="element">${number[6]["value"]}</button>
    <button data-player="${player}" data-id="7" class="element">${number[7]["value"]}</button>
    <button data-player="${player}" data-id="8" class="element">${number[8]["value"]}</button>
    <button data-player="${player}" data-id="9" class="element">${number[9]["value"]}</button>
    <br />
`;

    clickNumbers();
}

function clickNumbers() {
    element = document.querySelectorAll(".element");

    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", clicked);
    }

    function clicked(e) {
        
        e.target.style = "background-color: pink"; 
        let z = e.target.dataset.player
        console.log(z)
       
    }
}
