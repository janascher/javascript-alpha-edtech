// addEventListener é um ouvinte ao evento submit.
// Para impedir que o formulário seja enviado, usei o preventDefault() para cancelar o evento padrão.
// A propriedade innerHTML retorna HTML, representa o conteúdo de texto e pode ser estilizado no CSS.
let form = document.querySelector("form").addEventListener("submit", function(e) {
    
    const firstNumber = parseInt(document.querySelector("#first-number").value);
    const secondNumber = parseInt(document.querySelector("#second-number").value);
    const responseElement = document.querySelector("#response");
    
    // ------ Maior ------  
    if (firstNumber > secondNumber) {
        e.preventDefault();
        responseElement.innerHTML="O primeiro número é maior que o segundo.";
        console.log("O primeiro número é maior que o segundo.");
    // ------ Menor ------
    } else if (firstNumber < secondNumber) {
        e.preventDefault();
        responseElement.innerHTML="O primeiro número é menor que o segundo."; 
        console.log("O primeiro número é menor que o segundo.");
    // ------ Igual ------
    } else if (firstNumber === secondNumber) {
        e.preventDefault();
        responseElement.innerHTML="Os números são iguais.";
        console.log("Os números são iguais.");
    // ------ Botão clicado sem preencher os campos ------
    } else {
        e.preventDefault();
        responseElement.innerHTML="Digite os números nos campos!";
        console.log("Digite os números nos campos!");
    }
})