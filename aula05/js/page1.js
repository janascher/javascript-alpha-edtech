document.querySelector("button").addEventListener("click", textualValue);

function textualValue() {
    const number = parseInt(document.querySelector("#inputNumber").value);

    let message = "";
    let erro = "";

    // Valor impresso: "Números de 0 a 10"
    switch (number) {
        case 1:
            console.log("é um")
            message = "um";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break
        case 2:
            console.log("é dois")
            message = "dois";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break
        case 3:
            console.log("é três")
            message = "três";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break
        case 4:
            console.log("é quatro")
            message = "quatro";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break
        case 5:
            console.log("é cinco")
            message = "cinco";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break;
        case 6:
            console.log("é seis")
            message = "seis";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break;
        case 7:
            console.log("é sete")
            message = "sete";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break;
        case 8:
            console.log("é oito")
            message = "oito";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break;
        case 9:
            console.log("é nove")
            message = "nove";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break;
        case 10:
            console.log("é dez")
            message = "dez";
            document.querySelector("#message").textContent = `O número digitado foi ${message}.`;
            break;
        default:
            console.log("Favor insira números entre 0 a 10.")
            message = "Favor insira números entre 0 a 10.";
            document.querySelector("#message").textContent = `${message}`;
    }
}