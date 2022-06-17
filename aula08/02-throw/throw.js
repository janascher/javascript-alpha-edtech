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

    user["gender"] = gender;

    // Verifica se o campo nome foi preenchido ou tenha tamanho inferior a 5 caracteres
    if (nameValue !== "" && nameValue.length > 5) {
        user["name"] = nameValue;
    } else {
        throw new Error('Field "name" is invalid!');
    };

    // Verifica se o campo peso é numérico
    if (isNaN(weightValue)) {
        throw new Error('Field “weight” is invalid!');
    } else {
        user["weight"] = weightValue;
    };

    // Verifica se o campo altura é numérico e inteiro
    if (heightValue % 1 === 0) {
        if (isNaN(heightValue)) {
            throw new Error('Field “height” is invalid!');
        } else {
            user["height"] = heightValue;
        }
    } else {
        console.log("flutuante")
        throw new Error('Field “height” is invalid!');  
    };

    // Verifica se é um dos gêneros possíveis determinados no formulário
    if (genderValue !== "select") {
        user["gender"] = genderValue;
    } else {
        throw new Error('Field “gender” is invalid!');
    };

    // Verifica se a data é um número, 
    // se a data inserida é maior que a data atual, 
    // verifica se o número inserido é negativo, 
    // bem como, a quantidade do mês e ano.
    if (isNaN(dateValue.getTime())) {
        throw new Error('Field “birthDate” is invalid! 01');

    } else if (birthYear < 1000 || birthYear > 3000 || birthMonth <= 0 || birthMonth > 12 || birthDay <= 0) {
        throw new Error('Field “birthDate” is invalid! 02');

    } else if (birthYear > dateNow.getFullYear() || birthMonth > dateNow.getMonth() + 1 || birthDay > dateNow.getDate()) {
        throw new Error('Field “birthDate” is invalid! 03');
    } else {
        user["birthDate"] = birthDateValue;
    };

    console.log(user);
}