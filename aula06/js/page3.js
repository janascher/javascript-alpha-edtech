const button = document.querySelector("#button");
const message = document.querySelector("#message");
const audioAlarm = new Audio("./assets/sound/mechanical_clock_ring.ogg");

let minuteInput;
let secondInput;
let timer;
let buttonMode = "start";

button.addEventListener("click", display);

function display() {
    if (buttonMode === "turn off") {
        turnOff();
        return
    } else {
        start();
        return
    }
}

function countdown() {
    // const startTimer = parseInt((minuteInput.value) * 60) + parseInt((secondInput.value));
    message.innerHTML = `Faltam ${minuteInput} : ${secondInput}`;
    secondInput--;

    if ((secondInput == -1) && (minuteInput == 0)) {
        audioAlarm.volume = 0.3;
        audioAlarm.play();
        clearInterval(timer);
    } else if (secondInput == -1) {
        minuteInput--;
        secondInput = 59;
    }
}

function start() {
    minuteInput = document.querySelector("#minuteInput").value;
    secondInput = document.querySelector("#secondInput").value;

    if ((minuteInput == "minutos") || (secondInput == "segundos")) {
        alert ("Insira nos campos minutos e segundos");
    } else {
        timer = setInterval(countdown, 1000);
        buttonMode = "turn off";
        button.innerHTML = "Desarmar";
    }
}

function turnOff() {
    audioAlarm.pause();
    buttonMode = "start";
    button.innerHTML = "Iniciar";
    clearInterval(timer);
}