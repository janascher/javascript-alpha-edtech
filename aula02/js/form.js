const form = document.querySelector("form");
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const responseElement = document.getElementById("response");

// addEventListener é um ouvinte ao evento submit.
// Para impedir que o formulário seja enviado, usei o preventDefault() para cancelar o evento padrão.
// A propriedade innerHTML retorna HTML, representa o conteúdo de texto e pode ser estilizado no CSS.
form.addEventListener("submit", function(e) {  
    // ------ Maior ------  
    if (firstNumber.value > secondNumber.value) {
        e.preventDefault(); 
        responseElement.innerHTML="O primeiro número é maior que o segundo.";
        console.log("O primeiro número é maior que o segundo.");
    // ------ Menor ------
    } else if (firstNumber.value < secondNumber.value) {
        e.preventDefault();
        responseElement.innerHTML="O primeiro número é menor que o segundo."; 
        console.log("O primeiro número é menor que o segundo.");
    // ------ Igual ------
    } else if(firstNumber.value = secondNumber.value) {
        e.preventDefault();
        responseElement.innerHTML="Os números são iguais.";
        console.log("Os números são iguais.");
    // ------ Botão clicado sem preencher os campos ------
    } else {
        event.preventDefault();
        responseElement.innerHTML="Digite os números nos campos!";
        console.log("Digite os números nos campos!");
    }
})