document.querySelector("#button").addEventListener("click", check);

function check() {
    const number = parseFloat(document.querySelector("#number").value.replace(",", "."));
    const result = document.querySelector("#result");
    const floor = Math.floor(number);
    const ceil = Math.ceil(number);

    if (isNaN(number)) {
        console.log("acima")
        result.innerHTML = `Insira um número.`;
    } else if (number % 1 === 0) {
        console.log("Insira um número não inteiro acima.")
        result.innerHTML = `Insira um número não inteiro acima.`;
    } else {
        result.innerHTML = `O menor número inteiro inserido é ${floor} e o maior número inteiro inserido é ${ceil}.`;
    }
}