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
            mensagem.textContent = `Produto atualizado com sucesso!`;
        }
    }
};

// Lista os produtos
document.querySelector("#listar").addEventListener("click", listar);

function listar() {

    let i = 0;
    let tbody = document.querySelector("#tbody");

    mensagem.textContent = "";
    tbody.innerText = "";

    while (i < arrayProdutos.length) {

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

        i++;
    }
};

// Adiciona o produto
function adicionar(produto) {

    arrayProdutos.push(produto);
    id++;

};

// Atualiza a lista de produtos
function atualizar(id, produto) {
    let i = 0;

    while (i < arrayProdutos.length) {

        if (arrayProdutos[i].id == id) {

            arrayProdutos[i].nome = produto.nome;
            arrayProdutos[i].descricao = produto.descricao;
            arrayProdutos[i].valor = produto.valor;
        }

        i++;
    }

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
    }

    return true;
};

// Apaga o produto através do ícone
function apagar(id) {
    let i = 0;

    let tbody = document.querySelector("#tbody");

    while (i < arrayProdutos.length) {

        if (arrayProdutos[i].id == id) {
            arrayProdutos.splice(i, 1);
            tbody.deleteRow(i);
        };

        i++;
    }
};