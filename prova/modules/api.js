export default class Api {
  

    constructor() {
    
    }

    apiCep(valor) {
        fetch(`${valor}`)
        .then(resposta => {
            if(!resposta.ok || !resposta.status === 400) {
                throw new Error(`Falha ao solicitar dados: ${resposta.status} - ${resposta.statusText}`);
            }
            return resposta.json();
        })
        .then(dados => {
            // this.nome = dados.address;
        })
        .catch(erro => {
            console.log(erro);
        })
    }
}
