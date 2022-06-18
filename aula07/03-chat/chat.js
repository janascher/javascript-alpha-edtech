const input = document.querySelector("#inputText");
const view = document.querySelector("#view");

document.addEventListener("keydown", enterKey);
document.querySelector("#buttonSubmit").addEventListener("click", submit);
document.querySelector("#buttonClear").addEventListener("click", clear);

// Envia a mensagem ao clicar o botão "Enviar" e
// limpa a mensagem digitada.
function submit() {

    if (input.value != "") {
        view.textContent = `${input.value}`;
    }

    view.scrollTop = view.scrollHeight;
    input.value = "";
};

// Envia a mensagem ao apertar a tecla "Enter".
function enterKey(e) {

    if (e.key == "Enter") {
        e.preventDefault();
        // console.log(e.key)
        submit();
    }
};

// Limpa a mensagem enviada na tele de visualização.
function clear() {

    view.textContent = "";
    input.value = "";
    scrollY = 0;
};