const button = document.querySelector("#button");
const h1 = document.querySelector("#message");
const bombImage = document.querySelector("#image");
const message = document.querySelector("#bomb");
const audioExplosion = new Audio("../assets/sound/big_explosion_cut_off.ogg");

let timer = null;

button.addEventListener("click", bomb);

function bomb() {
    h1.innerHTML = "Rápido! Desarme a bomba em 10s!"
    bombImage.src = "../assets/image/bomb.png";
    bombImage.addEventListener("click", bombOff);
    timer = setTimeout(armedBomb, 10000);
}

function armedBomb() {
    button.innerHTML = "Tente de novo";
    h1.innerHTML = "Ah, nãããão!!"
    bombImage.src = "../assets/image/armed-bomb.png";
    bombImage.removeEventListener("click", bombOff);
    audioExplosion.volume = 0.4;
    audioExplosion.play();
}

function bombOff() {
    button.innerHTML = "Tente de novo";
    h1.innerHTML = "Uuuuufa, foi por pouco..."
    bombImage.src = "../assets/image/bomb-off.png";
    clearTimeout(timer);
}