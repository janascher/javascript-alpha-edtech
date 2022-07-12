// getDate(): dia do mês
// getMonth(): mês do ano
// getFullYear(): ano
// get Date(): dia da semana em português
// mês em português
// valor da data em milissegundos

document.querySelector("button").addEventListener("click", dateInformation);

function dateInformation() {

    let date = document.querySelector("#inputDate").value;
    let nameWeek = new Array ("segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo");
    let nameMonth = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro");

    const now = new Date(date);
    // Adicionado +1 ao dia devido ao diferencial UTC-3
    const day = now.getDate() + 1;
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const week = now.getDay();
    const ptMonth = now.getMonth();
    const timeStapm = Date.parse(day);

    switch (day) {
        case day:
            document.querySelector("#messageDay").textContent = `Dia: ${day}`;
        case month:
            document.querySelector("#messageMonth").textContent = `Mês: ${month}`;
        case year:
            document.querySelector("#messageYear").textContent = `Ano: ${year}`;
        case week:
            document.querySelector("#messageNameWeek").textContent = `Dia da semana: ${nameWeek[week]}`;
        case ptMonth:
            document.querySelector("#messageNameMonth").textContent = `Mês: ${nameMonth[ptMonth]}`;
        case timeStapm:
            document.querySelector("#messageTimeStapm").textContent = `Time Stapm ${timeStapm} em milissegundos.`;
            break
        default:
            document.querySelector("#messageDay").textContent = "Favor insira uma data válida.";
    }    
}