// addEventListener é um ouvinte ao evento submit.
// Para impedir que o formulário seja enviado, usei o preventDefault() para cancelar o evento padrão.
// A propriedade innerHTML retorna HTML, representa o conteúdo de texto e pode ser estilizado no CSS.
let form = document.querySelector("form").addEventListener("submit", function(e) {

    const firstString = document.querySelector("#first-string").value.length;
    const secondString = document.querySelector("#second-string").value.length;
    const response = document.querySelector("#response");

    // ------ Maior ------
    if (firstString > secondString) {
        e.preventDefault(); 
        response.innerHTML="O tamanho da primeira string é maior do que a segunda.";
        console.log("O tamanho da primeira string é maior do que a segunda.");
    // ------ Menor ------
    } else if (firstString < secondString) {
        e.preventDefault();
        response.innerHTML="O tamanho da primeira string é menor do que a segunda."; 
        console.log("O tamanho da primeira string é menor do que a segunda.");
    // ------ Igual ------
    } else {
        e.preventDefault();
        response.innerHTML="O tamanho das strings são iguais.";
        console.log("O tamanho das strings são iguais.");
    }
})