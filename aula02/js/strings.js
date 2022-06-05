const form = document.querySelector("form");
const firstString = document.getElementById("first-string");
const secondString = document.getElementById("second-string");
const response = document.getElementById("response");

// addEventListener é um ouvinte ao evento submit.
// Para impedir que o formulário seja enviado, usei o preventDefault() para cancelar o evento padrão.
// A propriedade innerHTML retorna HTML, representa o conteúdo de texto e pode ser estilizado no CSS.
form.addEventListener("submit", function(e) {
    // ------ Maior ------
    if (firstString.value.length > secondString.value.length) {
        e.preventDefault(); 
        response.innerHTML="O tamanho da primeira string é maior do que a segunda.";
        console.log("O tamanho da primeira string é maior do que a segunda.");
    // ------ Menor ------
    } else if (firstString.value.length < secondString.value.length) {
        e.preventDefault();
        response.innerHTML="O tamanho da primeira string é menor do que a segunda."; 
        console.log("O tamanho da primeira string é menor do que a segunda.");
    // ------ Igual ------
    } else if(firstString.value.length = secondString.value.length) {
        e.preventDefault();
        response.innerHTML="O tamanho das strings são iguais.";
        console.log("O tamanho das strings são iguais.");
    // ------ Botão clicado sem preencher os campos ------
    } else {
        event.preventDefault();
        response.innerHTML="Digite as palavras nos campos!";
        console.log("Digite as palavras nos campos!");
    }
})