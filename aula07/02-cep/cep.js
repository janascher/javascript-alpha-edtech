const msgInput = document.querySelector("#msgInput");
const msgKeyup = document.querySelector("#msgKeyup");
const inputCep = document.querySelector("#inputCep");

inputCep.addEventListener("input", cepValue);
inputCep.addEventListener("keyup", cepData);

function cepValue(e) {

    console.log(e)

    // Verifica se é número, 
    // se o CEP é composto por 8 dígitos e 
    // adiciona o 'hífen' conforme o usuário digita.
    if (inputCep.value.length > 9) {
        msgInput.textContent = "Favor insira um CEP válido composto por 8 dígitos!";
        console.log("Favor insira um CEP válido composto por 8 dígitos!")

    } else if (e.data >= 0) {
        msgInput.textContent = e.target.value;

        if (inputCep.value.length === 5) {
            inputCep.value += `-`; 
        }

    } else {
        msgInput.textContent = "CEP inválido!";
        console.log("CEP inválido!")
    };
};

function cepData(e) {
    msgKeyup.textContent += ` ${e.code}`;
};