<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	    <img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade da Aula 14 de Javascript 💃🏻
		<a  href="https://www.alphaedtech.org.br/">
		    Alpha EdTech
		</a>
	</h4>
	<p>Single Page Application, Modules, Custom Events, History e Routing</p>
</div>
<br /> 

--- 

## 🧐 Sobre a atividade 

1. Crie uma página simples de uma "doceria", de forma que:

	- Contenha a página principal, de brigadeiros, de cupcakes, de doces e o arquivo de roteamento, isto é, são 5 (cinco arquivos ao total);
	- As páginas devem ser carregadas utilizando-se o conceito de SPA. Assim, ao clicar em cada *link* das demais páginas, o navegador não deve "recarregar" a página inteira, isto é,  penas o elemento do DOM específico deve ser atualizado;
	- Deve-se existir um arquivo principal `index.js` que contém a rota para as demais páginas. Utilize o sistema de *modules* do Javascript para carregar as demais páginas;
	- O sistema de gerenciamento de rotas deve alterar o endereço do navegador sem recarregar a página (utilize o `pushState()` para o *history*);
	- Como a alteração do endereço do navegador por si só não dispara nenhum evento de alteração de estado do tipo *onstatechange*, criar uma função que faça a atualização do *history* e dispare um evento que servirá como forma de identificar qual rota a sua página deve exibir:
		- Por exemplo: Ao clicar em "brigadeiros", o endereço do navegador deve ser algo do tipo "http://localhost/brigadeiros";
		- A função deve além de alterar o endereço do navegador emitir um `CustomEvent()` *onstatechange* com o dado em details "/brigadeiros";
		- A sua página identificará que houve um evento emitido e renderizará a página respectiva de brigadeiros;
		- Realizar o mesmo para "/", "/cupcackes" e "/doces".

---
## 🔗 Referências básicas

- Single Page Application:
	- https://en.wikipedia.org/wiki/Single-page_application

- Modules:
	- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules
	- https://javascript.info/modules-intro
	- https://v8.dev/features/modules

- Custom Events:
	- https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	- https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

- History:
	- https://developer.mozilla.org/en-US/docs/Web/API/History/pushState

- Routing:
	- https://www.section.io/engineering-education/how-to-build-a-simple-router-in-javascript/
	- https://jstutorial.medium.com/making-your-own-vanilla-js-router-2e621ffdee88

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