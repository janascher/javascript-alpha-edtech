<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	    <img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade da Aula 07 de Javascript 💃🏻
		<a  href="https://www.alphaedtech.org.br/">
		    Alpha EdTech
		</a>
	</h4>
	<p>change event, onChange event, keyup event, keydown event e scrollTop</p>
</div>
<br /> 

--- 

## 🧐 Sobre a atividade 

1. Crie uma página web que possua um elemento HTML `<select>` que possa selecionar uma lista de carros esportivos, considerando:

	- Identificar a mudança de carro selecionado e alterar a imagem associada;
	- Exibir as informações referentes a este carro (dados do carro como nome, fabricante, velocidade máxima, 0-100km e outras informações que julgar pertinente);
	- A página web deve ser bem construída visualmente.


2. Crie uma página web que contenha um formulário que contenha um campo do tipo CEP (`<input type="text">`), considerando:

	- Capturar o evento de `input` para não permitir ao usuário a inserção de um caractere que não seja numérico;
	- Ao digitar o CEP, capturar o evento de `keyup` para poder preencher o campo até o limite de tamanho de um CEP não permitindo mais números do que o permitido e adicionando, se necessário o "hífen" natural de um CEP, isto é, a medida que o usuário digita um número, o campo de CEP deve conter o valor do CEP (incluindo o hífen);
	- Se o usuário apertar a tecla *backspace* (`keydown`) ele deve apagar o último número inserido.


3. Crie uma página web que possua dois campos, um do tipo `textarea`, outro do tipo `text` e um botão de enviar, considerando:

	- A página deve simular um *chat*, onde possibilite o envio de uma mensagem de forma que a mensagem digitada no campo do tipo `text`, ao clicar no botão enviar, deve aparecer no campo do tipo `textarea` (sem apagar o conteúdo do campo `textarea` adicionando uma linha a mais a cada inserção);
	- O campo `textarea` deve ter uma largura e altura definida de forma a exibir aproximadamente as últimas 10 linhas e, caso possua mais linhas apareça uma barra de *scroll* para visualizar todas as mensagens que excedam este limite;
	- Se o usuário digitar a mensagem e apertar a tecla *enter*, a mensagem deve ser enviada como se o usuário tivesse apertado o botão enviar;
	- O campo `textarea` deve receber as mensagens e automaticamente fazer um *scroll* até a última mensagem permitindo que a última mensagem seja sempre visualizada (utilizar o *scrollTop* para isso);
	- Adicionar um botão para poder *limpar* o conteúdo do campo `textarea` que ao ser clicado apague o conteúdo do campo `textarea`.

---
## 🔗 Referências básicas

- change event:
	- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
	- https://www.javascripttutorial.net/javascript-dom/javascript-change-event/

- onChange event:
	- https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onchange
	- https://www.w3schools.com/tags/ev_onchange.asp

- keyup event:
	- https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event

- keydown event:
	- https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

- input event:
	- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

- HTML textarea:
	- https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea
	- https://www.w3schools.com/tags/tag_textarea.asp

- scrollTop:
	- https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollTop
	- https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page

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