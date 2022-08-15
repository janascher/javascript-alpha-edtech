import AscII from "./modules/AscII.js";
import Api from "./modules/api.js";


const botao = document.querySelector("#botao");

const api = new Api();
const asc = new AscII("oi");
console.log(asc.getArray())
console.log(asc.getCode())

async function pesquisar() {
    
    // dadosEndereco.apiCep(inputCep.value);
    // inputEndereco.value = dadosEndereco.rua;
}

botao.addEventListener("click", pesquisar);
