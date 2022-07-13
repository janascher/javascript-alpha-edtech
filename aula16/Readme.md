<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	    <img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade da Aula 16 de Javascript 💃🏻
		<a  href="https://www.alphaedtech.org.br/">
		    Alpha EdTech
		</a>
	</h4>
	<p>AJAX, fetch, API de CEP, CSS cursor e iframe</p>
</div>
<br /> 

--- 

## 🧐 Sobre a atividade 

1. Crie uma página web para consulta de CEP e localidade de forma que:

	- Possua um campo para que o usuário digite o CEP;
	- Fazer uma "pré-verificação" se o CEP é válido antes de habilitar o botão de consulta;
	- Deve haver um botão de “Consultar” que será habilitado se tiver um campo que preencha os requisitos de validação de CEP do lado do cliente (esta validação foi feita no exercício 2 da parte 7 deste módulo);
	- Ao clicar em "Consultar" deve-se fazer uma requisição à API de CEP que deve retornar na página o resultado da consulta:
		- Endereço;
		- Bairro;
		- Cidade;
		- Estado;
		- Latitude;
		- Longitude.
		- Uma área de retorno de dados;
	- Ao retornar os dados, exibir um botão do tipo "Exibir mapa";
	- Ao clicar no botão "Exibir mapa", fazer uma consulta à API do "Google Maps" e preencher em um ‘iframe’ na mesma página com o mapa obtido passando-se o parâmetro de latitude e longitude;
	- A área de `iframe` deve ser conforme o CEP digitado;
	- Utilizar o cursor `wait` e `default` para sinalizar consulta sendo realizada não permitindo ao usuário realizar operações enquanto o cursor não retornar ao `default`;
	- Caso a consulta de CEP retorne inválida:
		- Não exibir os resultados da consulta;
		- Exibir um erro de consulta de CEP do tipo "CEP inválido!";
		- Não exibir botões de "Exibir mapa" nem deve ter nenhum `iframe` com mapa em exibição.

---
## 🔗 Referências básicas

- AJAX:
	- https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX

- fetch:
	- https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
	- https://www.devmedia.com.br/javascript-fetch/41206
	- https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-pt

- API de CEP:
	- https://docs.awesomeapi.com.br/api-cep

- API do Google Maps:
	- https://www.google.com/maps/search/?api=1&parameters

- CSS cursor:
	- https://developer.mozilla.org/pt-BR/docs/Web/CSS/cursor

- iframe:
	- https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe

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