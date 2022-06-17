// Armazenamento de dados
let user = {
    name: "",
    weight: "",
    height: "",
    gender: "",
    birthDate: "",
};

document.querySelector("#button").addEventListener("click", buttonForm);

function buttonForm() {

    const nameValue = document.querySelector("#name").value;
    const weightValue = parseInt(document.querySelector("#weight").value);
    const heightValue = parseFloat(document.querySelector("#height").value.replace(",", "."));
    const genderValue = document.querySelector("#gender").value;
    const birthDay = document.querySelector("#birth-day").value;
    const birthMonth = document.querySelector("#birth-month").value;
    const birthYear = document.querySelector("#birth-year").value;
    const dateValue = new Date(birthYear, birthMonth - 1, birthDay);
    const dateNow = new Date();
    const birthDateValue = dateValue.toLocaleDateString("pt-BR");

    // let result = document.querySelector("#result");
    let message = document.querySelector("#message");

    user["gender"] = gender;

    try {
        // Verifica se o campo nome foi preenchido ou tenha tamanho inferior a 5 caracteres
        if (nameValue !== "" && nameValue.length > 5) {
            user["name"] = nameValue;
            message.textContent = "";
        } else {
            throw new Error('O campo "nome" é inválido!');
        };

        // Verifica se o campo peso é numérico
        if (isNaN(weightValue) || weightValue < 0) {
            throw new Error('O campo "peso" é inválido!');
        } else {
            user["weight"] = weightValue;;
        };

        // Verifica se o campo altura é numérico e inteiro
        if (heightValue % 1 === 0) {
            if (isNaN(heightValue) || heightValue < 0) {
                throw new Error('O campo "altura" é inválido!');
            } else {
                user["height"] = heightValue;
            }
        } else {
            throw new Error('O campo "altura" é inválido!');
        };

        // Verifica se é um dos gêneros possíveis determinados no formulário
        if (genderValue !== "Selecione" || genderValue === "Feminino" || genderValue === "Masculino") {
            user["gender"] = genderValue;
        } else {
            throw new Error('O campo "gênero" é inválido!');
        };

        // Verifica se a data é um número, 
        // se a data inserida é maior que a data atual, 
        // verifica se o número inserido é negativo, 
        // bem como, a quantidade do mês e ano.
        if (isNaN(dateValue.getTime())) {
            throw new Error('O campo "data de nascimento" é inválido!');
        } else if (birthYear < 1000 || birthYear > 3000 || birthMonth <= 0 || birthMonth > 12 || birthDay <= 0) {
            throw new Error('O campo "data de nascimento" é inválido!');
        } else if (birthYear > dateNow.getFullYear() || birthMonth > dateNow.getMonth() + 1 || birthDay > dateNow.getDate()) {
            throw new Error('O campo "data de nascimento" é inválido!');
        } else {
            user["birthDate"] = birthDateValue;
        };

    } catch (error) {
        message.textContent = error.message;
    }

    // Resultado no console
    console.log(
        `
    <section>
        <label id="nameData">Nome: ${JSON.stringify(user["name"])},</label>
        <label id="weightData">Peso: ${JSON.stringify(user["weight"])} kg,</label>
        <label id="heightDate">Altura: ${JSON.stringify(user["height"])} cm,</label>
        <label id="genderData">Gênero: ${JSON.stringify(user["gender"])},</label>
        <label id="birthDateData">Data de nascimento: ${JSON.stringify(user["birthDate"])}.</label>
    </section>
    `)

    console.log(user);
}