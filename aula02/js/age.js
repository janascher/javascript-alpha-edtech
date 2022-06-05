const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

let birthDay = null;
let birthMonth = null;
let birthYear = null;
let gender = null;

// ------ Data de Nascimento ------
document.querySelector("#birth-day").addEventListener("change", (e) => {
    birthDay = Number(e.target.value);
    console.log(birthDay);
})

document.querySelector("#month-birth").addEventListener("change", (e) => {
    birthMonth = Number(e.target.value);
    console.log(birthMonth);
})

document.querySelector("#birth-year").addEventListener("change", (e) => {
    birthYear = Number(e.target.value);
    console.log(birthYear);
})

// ------ Gênero ------
document.querySelector("#gender-female").addEventListener("change", (e) => {
    gender = e.target.value;
    console.log(gender);
})

document.querySelector("#gender-male").addEventListener("change", (e) => {
    gender = e.target.value;
    console.log(gender);
})

// ------ Calcula quando o botão é clicado ------
document.querySelector("button").addEventListener("click", (e) => {
    // Para impedir que o formulário seja enviado, usei o preventDefault() para cancelar o evento padrão.
    e.preventDefault();

    let day = currentDay - birthDay;
    let moth = currentMonth - birthMonth;
    let year = currentYear - birthYear;
    let ageDays = day+(moth*30)+(year*365); // Idade em número de dias

    // ------ Dados fornecidos pelo IBGE ------
    if (gender === "female") {
        lifetime = 29236;
    }

    if (gender === "male") {
        lifetime = 26681;
    }

    // ------ Resultado final ------
    let daysDie = lifetime - ageDays;

    response.innerHTML = "Você possui " + daysDie + " dias de vida!";
    console.log("Você possui " + daysDie + " dias de vida!");
})