document.querySelector("button").addEventListener("click", calculate);

function calculate() {

    const weight = document.querySelector("#inputWeight").value;
    const height = document.querySelector("#inputHeight").value.replace(",", ".");

    let imc = (weight/(height*height)).toFixed(1);

    let message = "";

    if (imc < 18.5) {
        message = "está abaixo do peso";

        console.log(imc);
        console.log("está abaixo do peso");
    } else if (imc <= 24.9) {
        message = "está no peso normal";

        console.log(imc);
        console.log("está no peso normal");
        
    } else if (imc <= 29.9) {
        message = "no sobrepeso (acima do peso desejado)";

        console.log(imc);
        console.log("no sobrepeso (acima do peso desejado)");
    } else if (imc >= 30) {
        message = "na obesidade";

        console.log(imc);
        console.log("na obesidade");
    }
    
    document.querySelector("#result").textContent = `O seu IMC é ${imc}.`;
    document.querySelector("#message").textContent = `De acordo com a Organização Mundial da Saúde, você está ${message}.`;
}