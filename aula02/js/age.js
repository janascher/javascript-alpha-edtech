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
    birthDay = parseInt(e.target.value);
    console.log(birthDay);
})

document.querySelector("#month-birth").addEventListener("change", (e) => {
    birthMonth = parseInt(e.target.value);
    console.log(birthMonth);
})

document.querySelector("#birth-year").addEventListener("change", (e) => {
    birthYear = parseInt(e.target.value);
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
    // Total de dias para morrer
    let daysTotalDie = lifetime - ageDays;
    // Quantos anos de vida a pessoa possui
    let yearsDie = parseInt(daysTotalDie/365);
    console.log(yearsDie)
    // Quantos meses de vida a pessoa possui
    let monthDie = parseInt((daysTotalDie - (yearsDie * 365))/30);
    console.log(monthDie)
    // Quantos dias de vida a pessoa possui
    let daysDie = parseInt(daysTotalDie - (yearsDie*365) - (monthDie * 30));
    console.log(daysDie)

    response.innerHTML = "Você possui " + daysDie + " dias, " + monthDie + " meses e " + yearsDie + " anos de vida!";
    console.log("Você possui " + daysDie + " dias, " + monthDie + " meses e " + yearsDie + " anos de vida!");
})