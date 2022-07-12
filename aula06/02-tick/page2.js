const button = document.querySelector("#button");
const h1 = document.querySelector("#message");
const bombImage = document.querySelector("#image");

const audioExplosion = new Audio("../assets/sound/big_explosion_cut_off.ogg");
const audioTick = new Audio("../assets/sound/tick.wav");

const timer = setInterval(bomb, 6000);
const countdown = setInterval(tickBomb, 1000);

let seconds = 60;

bombImage.addEventListener("click", bomb);

function bomb() {
    bombImage.src = "../assets/image/bomb.png";
    bombImage.addEventListener("click", bombOff);
}

function tickBomb() {
    if (seconds != 1) {
            seconds--;
            h1.innerHTML = `Você possui ${seconds} segundos!`;
            audioTick.volume = 0.3;
            audioTick.play();
    } else {
            armedBomb()
    }
}

function armedBomb() {
    h1.innerHTML = "Ah, nãããão!!"
    bombImage.src = "../assets/image/armed-bomb.png";
    bombImage.style.cursor = "default";
    audioExplosion.volume = 0.4;
    audioExplosion.play();
    clearInterval(timer);
    clearInterval(countdown);
    bombImage.removeEventListener("click", bomb);
    bombImage.removeEventListener("click", bombOff);
}

function bombOff() {
    h1.innerHTML = "Uuuuufa, foi por pouco..."
    bombImage.src = "../assets/image/bomb-off.png";
    bombImage.style.cursor = "default";
    clearInterval(timer);
    clearInterval(countdown);
}