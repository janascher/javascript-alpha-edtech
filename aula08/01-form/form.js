document.querySelector("#button").addEventListener("click", buttonForm);

function buttonForm() {

    const nameValue = document.querySelector("#name").value;
    const birthDay = document.querySelector("#birth-day").value;
    const birthMonth = document.querySelector("#birth-month").value;
    const birthYear = document.querySelector("#birth-year").value;
    const dateValue = new Date(birthYear, birthMonth-1, birthDay);
    const dateNow = new Date();
    const weightValue = parseFloat(document.querySelector("#weight").value);
    const heightValue = document.querySelector("#height").value.replace(",", ".");
    let message = document.querySelector("#message");

    let select = document.querySelector("#gender");

    let birthDateValue = dateValue.toLocaleDateString("pt-BR");
    let genderValue;

    // Verifica se a data é um número, 
    // se a data inserida é maior que a data atual, 
    // verifica se o número inserido é negativo, 
    // bem como, a quantidade do mês e ano.
    if (isNaN(dateValue.getTime())) {
        console.log("Data inválida.")
        message.textContent = "Data inválida.";
        return null;

    } else if (birthYear < 1000 || birthYear > 3000 || birthMonth <= 0 || birthMonth > 12 || birthDay <= 0) {
        console.log("Data inválida.")
        message.textContent = "Data inválida.";
        return null;

    } else if (birthYear > dateNow.getFullYear() || birthMonth > dateNow.getMonth()+1 || birthDay > dateNow.getDate()) {
        console.log("A data inserida é maior que a data atual.")
        message.textContent = "A data inserida é maior que a data atual.";
        return null;

    } else {
        console.log(birthDateValue)
        message.textContent = birthDateValue;
    }

    // Seleção de gênero
    switch (select.value) {
        case "female":
            genderValue = "Feminino";
            break
        case "male":
            genderValue = "Masculino";
            break
        default:
            genderValue = "Seleção inválida.";
    }

    // Armazenamento de dados
    let user = {
        name: nameValue,
        birthDate: birthDateValue,
        weight: weightValue,
        height: heightValue,
        gender: genderValue,
    };

    console.log(user)

    // Mensagem
    message.innerHTML = 
    `<div class="displayProduct">
        <p>Nome: ${nameValue};</p>
        <p>Data de nascimento: ${birthDateValue};</p>
        <p>Peso: ${weightValue} cm;</p>
        <p>Altura: ${heightValue} kg;</p>
        <p>Gênero: ${genderValue}.</p>
    </div>`;
}