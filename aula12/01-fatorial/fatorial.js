const answerFactorial = document.querySelector("#answer-factorial");
const answerEuler = document.querySelector("#answer-euler");
const erro = document.querySelector("#erro");

document.querySelector("#button").addEventListener("click", readData);

// Lê o dado inserido no campo
function readData() {

    let number = parseFloat(document.querySelector("#inputNumber").value);

    if (validation(number) == true) {

        let answerF = factorial(number);
        answerFactorial.textContent = "O fatorial de " + number + " é " + BigInt(answerF);

        let answerE = euler(number);
        answerEuler.textContent = "O número de Euler é " + answerE;
    };
};

// Valida campo
function validation(number) {

    if (isNaN(number)) {
        
        erro.textContent = `Insira um número!`;
        throw new Error(`Insira um número!`);
    };

    if (number < 0 ) {

        erro.textContent = `Insira um número inteiro positivo!`;
        throw new Error(`Insira um número inteiro positivo!`);
   
    };

    return true;
};

// Calcula o fatorial
function factorial(numberF) {

    let resultFactorial = 1;    

    for (i = numberF; i >= 1; i--) {

        resultFactorial = resultFactorial * i;
        
    };
    
    console.log(BigInt(resultFactorial))
    return resultFactorial
};

// Calcula o número de Euler
function euler(numberE) {

    resultEuler = 0;
    
    for (x = numberE; x >= 0; x--) {

        resultEuler = resultEuler + (1 / factorial(x));

    };

    console.log(resultEuler)
    return resultEuler;
};