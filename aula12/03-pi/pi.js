document.querySelector("#button").addEventListener("click", getPi);

function getPi() {

    const inputNumber = parseInt(document.querySelector("#inputNumber").value);

    let pi = 3;
    let sinal = 1;
    let x = 2;

    for(i = 1; i < inputNumber; i++) {
        
        pi = pi + (sinal * (4 / (x * (x + 1) * (x + 2))));
        sinal = sinal * -1;
        x = x + 2;
    };

    console.log(pi)
    document.querySelector("#answer-pi").textContent = `O valor é ${pi}`;
};
