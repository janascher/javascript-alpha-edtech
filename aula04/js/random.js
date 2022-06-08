document.querySelector("button").addEventListener("click", random);

function random() {

    const minNumber = parseFloat(document.querySelector("#minNumber").value);
    const maxNumber = parseFloat(document.querySelector("#maxNumber").value);

    let min = Number.isInteger(minNumber);
    let max = Number.isInteger(maxNumber);

    // console.log(typeof minNumber)
    // console.log(minNumber)
    // console.log(maxNumber)

    // Para validar se o num é inteiro, fazer o calc utilizando o % (resto)
    if (min > max) {
        console.log("Erro! O valor mínimo é maior que o máximo.")
    } else if ((isNaN(minNumber)) && (min == false)) {
        console.log("Digite um número inteiro no campo valor mínino acima.")
    } else if ((isNaN(minNumber)) && (min == false)) {
        console.log("Digite um número inteiro no campo valor máximo acima.")
    } else {
        let sorteio = parseInt((Math.random() * (maxNumber - minNumber)) + minNumber);
        console.log(sorteio)
    }

    // if (!isNaN(minNumber) && !isNaN(maxNumber)) {
    //     let sorteio = parseInt((Math.random() * (maxNumber - minNumber)) + minNumber);
    //     console.log(sorteio)
    // } else {
    //     console.log("Erro! Os valores inseridos não são números.")
    // }
    
    // document.querySelector("#result").textContent = `Valor: ${sorteio}}.`;
}