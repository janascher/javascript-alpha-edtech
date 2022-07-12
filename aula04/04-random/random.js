document.querySelector("button").addEventListener("click", random);

function random() {

    const minNumber = parseFloat(document.querySelector("#minNumber").value.replace(",", "."));
    const maxNumber = parseFloat(document.querySelector("#maxNumber").value.replace(",", "."));
    const result = document.querySelector("#result");

    if (((minNumber % 1 === 0) && (maxNumber % 1 === 0))) {

        if (minNumber < maxNumber) {
            let randomNumber = Math.ceil(Math.random() * (maxNumber - minNumber) + minNumber);
            result.innerHTML = `Número sorteado: ${randomNumber}`;

        } else if (minNumber > maxNumber) {
            result.innerHTML = "Erro! O valor mínimo é maior que o máximo.";

        } else if (isNaN(minNumber)) {
            result.innerHTML = "Insira um número inteiro no campo acima.";

        } else if (isNaN(maxNumber)) {
            result.innerHTML = "Insira um número inteiro no campo acima.";
        }
        
    } else {
        console.log("é flutuante, insira números inteiros")       
    }
}