const button = document.querySelector("button");

button.addEventListener("click", consoleName);

function consoleName() {
    const name = "Olá console!";
    console.log(name);
}