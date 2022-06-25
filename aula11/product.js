// Construtor
let id = 1;
let arrayProdutos = [];
let editarID = null;

// Salva o produto
document.querySelector("#salvar").addEventListener("click", salvar);

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
document.querySelector("#listar").addEventListener("click", listar);

function listar() {

    let tbody = document.querySelector("#tbody");

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

    // Corpo da tabela
    for (let i = 0; i < arrayProdutos.length; i++) {

        let tr = tbody.insertRow();
        let tdId = tr.insertCell();
        let tdProduto = tr.insertCell();
        let tdValor = tr.insertCell();
        let tdEditar = tr.insertCell();
        let tdApagar = tr.insertCell();

        let iconEditar = document.createElement("img");
        let iconApagar = document.createElement("img");

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

// Ordem de valor dos produtos
function ordemValor() {
   
   arrayProdutos.sort((a, b) => {
        return a.valor - b.valor;
   });

   listar();
};

document.querySelector("#botaoPesquisa").addEventListener("click", pesquisa);

// Pesquisa
function pesquisa() {

    let text = document.querySelector("#pesquisa").value;
    let tbody = document.querySelector("#tbody");

    let mensagem = document.querySelector("#mensagem");

    if (text === "") {
        
        listar();
        mensagem.textContent = "";

    } else {

        let array = arrayProdutos.filter((value) => {

            return value.nome.includes(text) || value.descricao.includes(text);

        });        
    
        // Corpo da tabela
        for (let i = 0; i < array.length; i++) {
            
            tbody.innerText = "";

            let tr = tbody.insertRow();
            let tdId = tr.insertCell();
            let tdProduto = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdEditar = tr.insertCell();
            let tdApagar = tr.insertCell();

            let iconEditar = document.createElement("img");
            let iconApagar = document.createElement("img");

            // ARRUMAR O EDITAR. ESTÁ SELECIONANDO O PRIMEIRO ID PARA EDITAR;
            // QUANDO TEM MAIS DE UM PRODUTO ADICIONADO NA LISTA, ELES NÃO ESTÃO APARECENDO NA TABELA APÓS PESQUISAR;
            // A PESQUISA NÃO ESTÁ DIFERENCIANDO LETRAS MAIÚSCULAS DAS MINÚSCULAS;
            tdId.innerText = array[i].id;

            tdProduto.innerText = array[i].nome;
            tdProduto.setAttribute("onclick", "infoProduto(" + tdId.innerText + ")");
            tdProduto.style.cursor = "pointer";

            tdValor.innerText = `R$ ${array[i].valor}`;

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

        if (array.length === 0) {

            mensagem.textContent = `Não foram encontrados produtos conforme chave de pesquisa!`;
            mensagem.classList.add("center");
            mensagem.style.color = "rgb(212, 25, 25)";
            mensagem.style.fontWeight = "700";

            throw new Error('Não foram encontrados produtos conforme chave de pesquisa!');
    
        } else {
    
            mensagem.textContent = `Foram encontrado(s) ${array.length}`;
            mensagem.classList.add("center");
            mensagem.style.color = "rgb(27, 134, 68)";
            mensagem.style.fontWeight = "700";
    
        };
    };       
};

// Exibe todas as informações do produto
function infoProduto(ID) {

    let theadInfo = document.querySelector("#thead-info");
    let tbodyInfo = document.querySelector("#tbody-info");

    theadInfo.style.background = "rgb(201, 197, 197)";

    // Cria a tabela das informações
    for (let i = 0; i < arrayProdutos.length; i++) {

        if (arrayProdutos[i].id == ID) {

            if (theadInfo.innerText == "") {

                // Cabeçalho da tabela
                let tr = theadInfo.insertRow();
                let thId = tr.insertCell();
                let thProduto = tr.insertCell();
                let thDescricao = tr.insertCell();
                let thValor = tr.insertCell();
                let thIncluidoEm = tr.insertCell();

                tr.style.fontWeight = "700";
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
            let tb = tbodyInfo.insertRow();
            let tdId = tb.insertCell();
            let tdProduto = tb.insertCell();
            let tdDescricao = tb.insertCell();
            let tdValor = tb.insertCell();
            let tdIncluidoEm = tb.insertCell();

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
    let mensagem = document.querySelector("#mensagem");

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

    let tbody = document.querySelector("#tbody");

    for (let i = 0; i < arrayProdutos.length; i++) {
        if (arrayProdutos[i].id == id) {
            arrayProdutos.splice(i, 1);
            tbody.deleteRow(i);
        };
    };
};