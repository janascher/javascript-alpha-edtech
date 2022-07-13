<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	    <img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade da Aula 10 de Javascript 💃🏻
		<a  href="https://www.alphaedtech.org.br/">
		    Alpha EdTech
		</a>
	</h4>
	<p>Array, while e do while</p>
</div>
<br /> 

--- 

## 🧐 Sobre a atividade 

1. Crie uma página web que peça ao usuário que digite um nome de "produto", sua "descrição" e seu respectivo "valor" e que possua um botão de "Incluir produto" e outro botão de "Listar produtos", de forma que:

	- Caso o usuário preencha um nome de produto, sua descrição e valor válidos e clique no botão "Incluir produto", deve ser criado um "objeto" do produto (com as propriedades "id",  "nome", "descricao", "valor", "incluidoEm") que será incluído em um *array* de "produtos" e uma mensagem do tipo `Produto ${produto.nome} incluído com sucesso!`;
	- O objeto do produto deve conter o seu "id" que é um número inteiro que sempre incrementa garantido que o produto sempre terá um "id" diferente dos demais;
	- O objeto do produto deve conter a data e a hora da sua criação na propriedade "incluidoEm" no formato de *timestamp* (`Date.now()`);
	- Caso o usuário preencha algum dado incorreto (condições de validação de nome, descrição e valor) e clique no botão "Incluir produto", deverá ser mostrada uma mensagem do tipo "Falha no cadastro do produto!" e, se possível, o motivo da falha na inclusão do produto;
	- Caso o usuário clique no botão "Listar produtos", deve ser mostrada uma tabela com os produtos cadastrados, sendo que:
		- A tabela deve conter 4 colunas: "Produto", "Valor", "Editar" e "Apagar";
		- Cada linha da tabela deve ter o "id" do produto, seu nome, seu valor, uma imagem pequena que representa um botão de editar e uma imagem pequena que representa um botão de apagar;
		- Caso o usuário clique no nome do produto, devem ser exibidos todos os dados cadastrados no objeto respectivo, isto é, o "id",  "nome", "descrição", o "valor" e a informação da sua criação em "incluidoEm" no formato "dd/mm/aaaa – HH:MM:SS" (dd: dia, mm: mês, aaaa: ano, HH: hora, MM: minutos, SS: segundos);
		- Caso o usuário clique na imagem de editar da linha do produto, deve ser possível ao usuário de substituir as informações do "id" do produto selecionado;
		- Caso a lixeira do produto na linha seja clicada, deve-se apagar o produto do *array* de "produtos".
	- A tabela deve ser "atualizada" a cada operação de clique no botão "Listar produtos", de operação de edição e exclusão de produtos.
	- Para incluir um "produto" no *array* de "produtos" utilizar o método `push()`;
	- Para obter o tamanho do *array* "produtos" utilizar seu atributo `length`;
	- Deve-se utilizar apenas a função `while` ou `do...while` para percorrer os items do *array*, pegar um "id" ou para excluir um produto específico deste *array* não sendo permitidas outras estrutura de repetição como `for`;
	- Não é permitido o uso de qualquer outro método de *array* como `map()`, `filter()`, `reduce()`, `splice()`, `slice()`, `find()`, `forEach()` entre outros.

---
## 🔗 Referências básicas

- Array:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
	- https://www.w3schools.com/js/js_loop_while.asp

- while:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/
	- https://www.w3schools.com/js/js_loop_while.asp

- do...while:
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/

---  

## 🦸 Autor

<div>
	<a  href="https://github.com/janascher">
		<img src="https://avatars.githubusercontent.com/u/79182711?v=4" width="100px;" alt="Janaína Scher"/>
		<br />
		<sub>
			<b>Janaína Scher</b> 👩🏻‍💻
		</sub>
	</a>
</div>

Feito com ❤️ por Janaína Scher 👋 Entre em contato!
  
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/janainascher/)
[![ProtonMail Badge](https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:janainascher@protonmail.com)