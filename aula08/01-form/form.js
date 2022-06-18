document.querySelector("#button").addEventListener("click", buttonForm);

function buttonForm() {

    let genderValue;

    const nameValue = document.querySelector("#name").value;
    const birthDay = document.querySelector("#birth-day").value;
    const birthMonth = document.querySelector("#birth-month").value;
    const birthYear = document.querySelector("#birth-year").value;
    const dateValue = new Date(birthYear, birthMonth-1, birthDay);
    const dateNow = new Date();
    const weightValue = parseFloat(document.querySelector("#weight").value);
    const heightValue = parseFloat(document.querySelector("#height").value);

    let select = document.querySelector("#gender");
    let message = document.querySelector("#message");
    let birthDateValue = dateValue.toLocaleDateString("pt-BR");

    // Verifica se os campos nome, peso e altura foram preenchidos
    if (nameValue === "" || isNaN(weightValue) || isNaN(heightValue)) {
        message.textContent = "Preencha o campo que se encontra em branco.";
        console.log("Preencha o campo que se encontra em branco.")
        return null;
    };

    // Verifica se a data é um número, 
    // se a data inserida é maior que a data atual, 
    // verifica se o número inserido é negativo, 
    // bem como, a quantidade do mês e ano.
    if (isNaN(dateValue.getTime())) {
        message.textContent = "Data inválida.";
        console.log("Data inválida.")
        return null;

    } else if (birthYear < 1000 || birthYear > 3000 || birthMonth <= 0 || birthMonth > 12 || birthDay <= 0) {
        message.textContent = "Data inválida.";
        console.log("Data inválida.")
        return null;

    } else if (birthYear > dateNow.getFullYear() || birthMonth > dateNow.getMonth()+1 || birthDay > dateNow.getDate()) { 
        message.textContent = "A data inserida é maior que a data atual.";
        console.log("A data inserida é maior que a data atual.")
        return null;
    };

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
    };

    // Armazenamento de dados
    let user = {
        name: nameValue,
        weight: weightValue,
        height: heightValue,
        gender: genderValue,
        birthDate: birthDateValue,
    };

    console.log(user)

    // Mensagem
    message.innerHTML = 
    `<div>
        <p>Nome: ${nameValue};</p>
        <p>Peso: ${weightValue} kg;</p>
        <p>Altura: ${heightValue} cm;</p>
        <p>Gênero: ${genderValue};</p>
        <p>Data de nascimento: ${birthDateValue}.</p>
    </div>`;
}