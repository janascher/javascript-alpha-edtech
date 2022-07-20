<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	    <img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade da Aula 17 de Javascript 💃🏻
		<a  href="https://www.alphaedtech.org.br/">
		    Alpha EdTech
		</a>
	</h4>
	<p>Promises, async...await, fetch, API de localidades do IBGE e APIs do Instituto Nacional de Meteorologia</p>
</div>
<br /> 

--- 

## 🧐 Sobre a atividade 

1. Crie uma página web para exibir a previsão do tempo de uma cidade. A página deve conter:

	- Um `<select>` para seleção de um estado brasileiro;
	- Ao selecionar um estado, uma requisição à API de localidades do IBGE deve ser feita, e um segundo `<select>` deve exibido com as cidades do estado selecionado;
	- Ao selecionar uma cidade, devem ser mostradas ao usuário as previsões do tempo para os períodos manhã, tarde e noite do dia atual e dos próximos três dias (dados obtidos a partir de uma requisição à API de previsão do tempo do Instituto Nacional de Meteorologia), com as seguintes informações:
		- data;
		- dia da semana;
		- ícone que represente o tempo;
		- resumo da previsão;
		- temperatura mínima;
	 	- temperatura máxima.
	- Cada requisição às APIs deve ser feita através de uma função que retorne uma `Promise`, que devolverá apenas os dados necessários para a mostrar das informações de previsão do tempo na página;
	- Caso o retorno de qualquer consulta não retorne o status `200`, isto é, os dados não forem devidamente recebidos, a sua função deverá rejeitar (`reject`) o retorno que deverá ser devidamente tratado exibindo uma mensagem de erro ao usuário.
	- As funções `async/await` não devem ser utilizadas nessa questão.


2. Refaça a questão anterior e reescreva as chamadas à promises, utilizando as funções `async/await`.

---
## 🔗 Referências básicas

- Promises:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
	- https://www.w3schools.com/js/js_promise.asp

- async/await:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function
	- https://www.treinaweb.com.br/blog/usando-o-async-await-do-javascript

- fetch:
	- https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
	- https://www.devmedia.com.br/javascript-fetch/41206
	- https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-pt

- API de localidades do IBGE:
	- https://servicodados.ibge.gov.br/api/docs/localidades

- APIs do Instituto Nacional de Meteorologia
	- https://portal.inmet.gov.br/manual
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