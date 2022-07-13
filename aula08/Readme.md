<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	    <img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade da Aula 08 de Javascript 💃🏻
		<a  href="https://www.alphaedtech.org.br/">
		    Alpha EdTech
		</a>
	</h4>
	<p>Objetos em JS, try...catch, throw, JSON.stringfy, JSON.parse e Date</p>
</div>
<br /> 

--- 

## 🧐 Sobre a atividade 

1. Crie uma página web que peça ao usuário que preencha 5 dados de usuário ("Nome","Data de Nascimento","Peso", "Altura" e "Gênero") por meio de um formulário, sendo armazenado em um objeto JavaScript "user" após clique de um botão, de forma que:

	- O campo do "Nome" é do tipo *string* e será armazenado no formato *string*;
	- A "Data de Nascimento" deve ser inserida pelo usuário através de 3 campos ("dia","mês" e "ano") de forma que a seleção de não pode ser de data inexistente ou superior à data atual, sendo armazenada no formato `Date`;
	- O "Peso" e "Altura" embora seja inserido no formato *string* deve ser armazenado no formato numérico, de forma que o peso (kg) é numérico de ponto flutuante e a altura (cm) em um numérico inteiro;
	- O "Gênero" deve ser capturado por meio de um campo do tipo `select` e armazenado em formato *string*;
	- O objeto Javascript deve conter os seguintes atributos:
		- *name*: que armazenará o nome do usuário (formato *string*);
		- *birthDate*: que armazenará a data de nascimento (formato `Date`);
		- *weight*: que armazenará o peso em quilogramas (formato numérico *float*);
		- *height*: que armazenará a altura em centímetros (formato numérico *int*);
		- *gender*: que armazenará o gênero (formato *string*).


2. Estenda o exercício anterior agora "capturando" e "emitindo" erros (`throw`), de forma que:

	- Emitir erro de "*Field “name” is invalid!*" se o nome estiver sem valor preenchido ou tenha tamanho inferior a 5 caracteres;
	- Emitir erro "*Field “birthDate” is invalid!*" se a data de nascimento for superior a data atual ou se a data for impossível (inválida);
	- Emitir erro "*Field “weight” is invalid!*", se não for do tipo numérico;
	- Emitir erro "*Field “height” is invalid!*", se não for do tipo numérico e não for inteiro;
	- Emitir erro "*Field “gender” is invalid!*", caso não seja um dos gêneros possíveis determinados por você no formulário.


4. Crie uma página web que possua um formulário com 2 campos, um do tipo `textarea` e um botão, de forma que:

	- A área de texto deve permitir ao usuário inserir um texto que posteriormente será convertido em um objeto;
	- Ao clicar no botão deverá:
		- Exibir um erro caso não seja possível converter o texto em um objeto JavaScript (`JSON.parse()`), capturando o erro por meio da estrutura *try...catch*;
		- Caso seja possível a conversão:
			- Exibir uma mensagem "*Parsable JSON string!*";
			- Mostrar no console o objeto.


5. Crie um objeto sem atributos "{ }" e adicione um atributo “Um atributo com espaços” com valor numérico 1, e exiba no console, de duas formas:

	- Utilizando colchetes;
	- Sem utilizar colchetes.

---
## 🔗 Referências básicas

- Objetos em JavaScript:
	- https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics
	- https://www.javascripttutorial.net/javascript-objects/
	- https://www.tutorialsteacher.com/javascript/javascript-object
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

- try...catch:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch

- throw:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw

- JSON.stringify:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

- JSON.parse:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

- Date:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
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