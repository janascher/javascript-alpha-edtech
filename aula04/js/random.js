document.querySelector("button").addEventListener("click", random);

function random() {

    const minNumber = parseInt(document.querySelector("#minNumber").value);
    const maxNumber = parseInt(document.querySelector("#maxNumber").value);

    // let message = "";

    console.log(typeof minNumber)
    console.log(minNumber)
    console.log(maxNumber)

    if (!isNaN(minNumber) && !isNaN(maxNumber)) {
        let sorteio = parseInt((Math.random() * (maxNumber - minNumber)) + minNumber);
        console.log(sorteio)
    } else {
        console.log("Erro! Os valores inseridos não são números.")
    }
    
    document.querySelector("#result").textContent = `Valor: ${sorteio}}.`;
}