// OBS: resultados e mensagens de erros são visualizados apenas no console.

document.querySelector("button").addEventListener("click", calculate);

function sum(x, y) {
    z = x + y;
    return z;
};

function multi(x, y, z) {
    if (z > 1) {
        w = sum(x, y);
        multi(w, y, z - 1);
    }
    return w;
};

function exp(x, y, z) {
    if (z > 1) {
        w = multi(x, x, y);
        exp(w, y, z - 1);
    }
    return w;
};

function calculate() {

    let number1 = parseFloat(document.querySelector("#numberOne").value.replace(",", "."));
    let number2 = parseFloat(document.querySelector("#numberTwo").value.replace(",", "."));
    let result;

    let select = document.querySelector("select");

    switch (select.value) {
        
        case "1":
            // Soma:
            if (number1 % 1 !== 0 || number2 % 1 !== 0 || number1 < 0 || number2 < 0) {
                throw new Error(`[sum] Impossible to sum ${number1} + ${number2}`);
            }

            result = sum(number1, number2);
            console.log(result);
            break;           
        case "2":
            // Subtração:
            if (number1 < number2 || number1 < 0 || number2 < 0) {
                throw new Error(`[subtract] Impossible to subtract ${number1} - ${number2}`);
            }

            let numNegative = number2 * -1;
            result = sum(number1, numNegative);
            console.log(result)
            break;           
        case "3":
            // Multiplicação:
            if (number1 % 1 !== 0 || number2 % 1 !== 0 || number1 < 0 || number2 < 0) {
                throw new Error(`[multiply] Impossible to multiply ${number1} * ${number2}`);
            }

            result = multi(number1, number1, number2);
            console.log(result)
            break;          
        case "4":
            // Expoente:
            if (number1 % 1 !== 0 || number2 % 1 !== 0 || number1 < 0 || number2 < 0) {
                // throw new Error(`[multiply] Impossible to multiply ${number1} * ${number2}`);
                throw new Error(`[exponent] Impossible to exponent ${number1} ^ ${number2}`);
            }

            result = exp(number1, number1, number2);
            console.log(result)
            break;       
        case "5":
            // Divisão:
            if (number1 < 0 || number2 < 0) {
                throw new Error(`[divide] Impossible to divice ${number1} / ${number2}`);
            } else if (number2 == 0) {
                throw new Error(`[divide] Division by zero}`);
            }

            result = number1 / number2;
            result.textContent = `${result}`;
            console.log(result)
            break;
    };
};