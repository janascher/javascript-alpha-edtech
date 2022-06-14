document.querySelector("#inputCep").addEventListener("input", inputCep);

function inputCep() {

    const cep = parseInt(document.querySelector("#inputCep").value);
    // const message = document.querySelector("#message");

    console.log(typeof cep)

    if (Number(cep)) {
       
        console.log("é um número")
        console.log(typeof cep)

    } else {
        console.log("não é um número")
        console.log(typeof cep)
    }
}