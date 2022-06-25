// ARRUMAR O EDITAR. ESTÁ SELECIONANDO O PRIMEIRO ID PARA EDITAR;
// QUANDO TEM MAIS DE UM PRODUTO ADICIONADO NA LISTA, ELES NÃO ESTÃO APARECENDO NA TABELA APÓS PESQUISAR;
// A PESQUISA NÃO ESTÁ DIFERENCIANDO LETRAS MAIÚSCULAS DAS MINÚSCULAS;

// Iniciais
let mensagem = document.querySelector("#mensagem");

let tbody = document.querySelector("#tbody");

document.querySelector("#salvar").addEventListener("click", salvar);
document.querySelector("#listar").addEventListener("click", listar);
document.querySelector("#botaoPesquisa").addEventListener("click", pesquisa);

// Construtor
let id = 1;
let arrayProdutos = [];
let editarID = null;

// Tabela
// Cabeçalho da tabela
let trH = theadInfo.insertRow();
let thId = trH.insertCell();
let thProduto = trH.insertCell();
let thDescricao = trH.insertCell();
let thValor = tr.insertCell();
let thIncluidoEm = trH.insertCell();
// Corpo da tabela
let tr = tbody.insertRow();
let tdId = tr.insertCell();
let tdProduto = tr.insertCell();
let tdValor = tr.insertCell();
let tdEditar = tr.insertCell();
let tdApagar = tr.insertCell();
let iconEditar = document.createElement("img");
let iconApagar = document.createElement("img");

// Salva o produto
function salvar() {

    let produto = lerDados();

    if (validaCampo(produto) == true) {

        if (editarID == null) {

            adicionar(produto);

            mensagem.textContent = `Produto ${produto.nome} incluído com sucesso!`;
            mensagem.classList.add("center");
            mensagem.style.color = "rgb(27, 134, 68)";
            mensagem.style.fontWeight = "700";

        } else {
            atualizar(editarID, produto);
            mensagem.textContent = `Produto ${produto.nome} atualizado com sucesso!`;
        };

        limparCampos();
    };
};

// Limpar campos
function limparCampos() {

    editarID = null;

    document.querySelector("#nome").value = "";
    document.querySelector("#descricao").value = "";
    document.querySelector("#valor").value = "";
    document.querySelector(".infoProduto").innerHTML = 
        `<table border="1">
            <thead id="thead-info"></thead>
            <tbody id="tbody-info"></tbody>
        </table>
        `;
};

// Lista os produtos
function listar() {

    mensagem.textContent = "";
    tbody.innerText = "";

    // Coluna nome do produto
    thProduto.innerText = "Produto";
    thProduto.setAttribute("onclick", "ordemAlfabetica()");
    thProduto.style.cursor = "pointer";

    // Coluna valor do produto
    thValor.innerText = "Valor";
    thValor.setAttribute("onclick", "ordemValor()");
    thValor.style.cursor = "pointer";

    for (let i = 0; i < arrayProdutos.length; i++) {
        
        // Corpo da tabela
        tdId.innerText = arrayProdutos[i].id;

        tdProduto.innerText = arrayProdutos[i].nome;
        tdProduto.setAttribute("onclick", "infoProduto(" + tdId.innerText + ")");
        tdProduto.style.cursor = "pointer";

        tdValor.innerText = `R$ ${arrayProdutos[i].valor}`;

        tdId.classList.add("center");

        iconEditar.src = "./assets/icon/icons8-edit.svg";
        tdEditar.appendChild(iconEditar);
        tdEditar.classList.add("center");
        iconEditar.setAttribute("onclick", "edicao(" + JSON.stringify(arrayProdutos[i]) + ")");

        iconApagar.src = "./assets/icon/icons8-delete.svg";
        tdApagar.appendChild(iconApagar);
        tdApagar.classList.add("center");
        iconApagar.setAttribute("onclick", "apagar(" + arrayProdutos[i].id + ")");
        
    };
};

// Ordem alfabética dos nomes dos produtos
function ordemAlfabetica() {

    arrayProdutos.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    });

    listar();
};

// Ordem dos valores dos produtos
function ordemValor() {
   
   arrayProdutos.sort((a, b) => {
        return a.valor - b.valor;
   });

   listar();
};

// Pesquisa
function pesquisa() {

    let text = document.querySelector("#pesquisa").value;

    if (text === "") {
        
        listar();
        mensagem.textContent = "";

    } else {

        let arrayPesquisa = arrayProdutos.filter((value) => {

            return value.nome.includes(text) || value.descricao.includes(text);

        });        
    
        
        for (let i = 0; i < arrayPesquisa.length; i++) {

            // Corpo da tabela
            tbody.innerText = "";

            tdId.innerText = arrayPesquisa[i].id;

            tdProduto.innerText = arrayPesquisa[i].nome;
            tdProduto.setAttribute("onclick", "infoProduto(" + tdId.innerText + ")");
            tdProduto.style.cursor = "pointer";

            tdValor.innerText = `R$ ${arrayPesquisa[i].valor}`;

            tdId.classList.add("center");

            iconEditar.src = "./assets/icon/icons8-edit.svg";
            tdEditar.appendChild(iconEditar);
            tdEditar.classList.add("center");
            iconEditar.setAttribute("onclick", "edicao(" + JSON.stringify(arrayProdutos[i]) + ")");

            iconApagar.src = "./assets/icon/icons8-delete.svg";
            tdApagar.appendChild(iconApagar);
            tdApagar.classList.add("center");
            iconApagar.setAttribute("onclick", "apagar(" + arrayProdutos[i].id + ")");
            
        };

        if (arrayPesquisa.length === 0) {

            mensagem.textContent = `Não foram encontrados produtos conforme chave de pesquisa!`;
            mensagem.classList.add("center");
            mensagem.style.color = "rgb(212, 25, 25)";
            mensagem.style.fontWeight = "700";

            throw new Error('Não foram encontrados produtos conforme chave de pesquisa!');
    
        } else {
    
            mensagem.textContent = `Foram encontrado(s) ${arrayPesquisa.length}`;
            mensagem.classList.add("center");
            mensagem.style.color = "rgb(27, 134, 68)";
            mensagem.style.fontWeight = "700";
    
        };
    };       
};

// Exibe todas as informações do produto
function infoProduto(ID) {

    let theadInfo = document.querySelector("#thead-info");

    theadInfo.style.background = "rgb(201, 197, 197)";

    // Cria a tabela das informações
    for (let i = 0; i < arrayProdutos.length; i++) {

        if (arrayProdutos[i].id == ID) {

            if (theadInfo.innerText == "") {

                // Cabeçalho da tabela
                trH.style.fontWeight = "700";
                thId.classList.add("center");
                thProduto.classList.add("center");
                thDescricao.classList.add("center");
                thValor.classList.add("center");
                thIncluidoEm.classList.add("center");

                thId.innerText = "ID"
                thProduto.innerText = "Produto";
                thDescricao.innerText = "Descrição";
                thValor.innerText = "Valor";
                thIncluidoEm.innerText = "Incluído em";
            };

            // Corpo da tabela 
            tdId.innerText = arrayProdutos[i].id;
            tdProduto.innerText = arrayProdutos[i].nome;
            tdDescricao.innerText = arrayProdutos[i].descricao;
            tdValor.innerText = arrayProdutos[i].valor;
            tdIncluidoEm.innerText = arrayProdutos[i].incluidoEm;
        };  
    };
};

// Adiciona o produto
function adicionar(produto) {

    arrayProdutos.push(produto);
    id++;

};

// Atualiza a lista de produtos
function atualizar(id, produto) {

    for (let i = 0; i < arrayProdutos.length; i++) {
        if (arrayProdutos[i].id == id) {

            arrayProdutos[i].nome = produto.nome;
            arrayProdutos[i].descricao = produto.descricao;
            arrayProdutos[i].valor = produto.valor;
        };
    };

    document.querySelector("#salvar").innerText = "Adicionar";

    listar();
};

// Prepara para a edição
function edicao(dados) {
    editarID = dados.id;

    document.querySelector("#nome").value = dados.nome;
    document.querySelector("#descricao").value = dados.descricao;
    document.querySelector("#valor").value = dados.valor;
    document.querySelector("#salvar").innerText = "Atualizar";
};

// Lê os dados: lê os campos e devolve para o salvar
function lerDados() {
    const produto = {};
    const hoje = new Date();

    produto.id = id;
    produto.nome = document.querySelector("#nome").value;
    produto.descricao = document.querySelector("#descricao").value;
    produto.valor = parseFloat(document.querySelector("#valor").value.replace(",", "."));
    produto.incluidoEm = hoje.toLocaleString("pt-BR");

    return produto;
};

// Valida os campos do produto
function validaCampo(produto) {

    if (produto.nome == "" || produto.descricao == "") {

        mensagem.textContent = `Falha no cadastro do produto!`;
        mensagem.classList.add("center");
        mensagem.style.color = "rgb(212, 25, 25)";
        mensagem.style.fontWeight = "700";

        throw new Error('Falha no cadastro do produto!');
    };

    if (isNaN(produto.valor) || produto.valor < 0) {

        mensagem.textContent = `Falha no cadastro do produto!`;
        mensagem.classList.add("center");
        mensagem.style.color = "rgb(212, 25, 25)";
        mensagem.style.fontWeight = "700";

        throw new Error('Falha no cadastro do produto!');
    };

    return true;
};

// Apaga o produto através do ícone
function apagar(id) {

    for (let i = 0; i < arrayProdutos.length; i++) {
        if (arrayProdutos[i].id == id) {
            arrayProdutos.splice(i, 1);
            tbody.deleteRow(i);
        };
    };
};