const uf = document.querySelector("#uf");
const city = document.querySelector("#city");
const result = document.querySelector("#result");

// Seleção dos estados brasileiros
function getUf() {
    return new Promise((resolve, reject) => {
        // API de localidades do IBGE
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/?orderBy=nome`)
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                };
                return Promise.reject("Falha na requisição dos estados.");
            })
            .then(data => {
                uf.innerHTML = `<option hidden>Selecione uma estado:</option>`;

                data.forEach(selectUf => {
                    uf.innerHTML += `<option value=${selectUf.sigla}>${selectUf.sigla} - ${selectUf.nome}</option>`;
                })              
                resolve(data);
            })
            .catch(error => {
                result.innerHTML = error;
                reject(error);
            });
    });  
};

// Seleção das cidades brasileiras
function getCity(UF) {
    return new Promise((resolve, reject) => {
        // API de localidades do IBGE
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                };
                return Promise.reject("Falha na requisição das cidades.");
            })
            .then(data => {
                city.innerHTML = `<option hidden>Selecione uma cidade:</option>`;
                city.removeAttribute("disabled");

                data.forEach(selectCity => {
                    city.innerHTML += `<option value=${selectCity.id}>${selectCity.nome}</option>`;
                })              
                resolve(data);
            })
            .catch(error => {
                result.innerHTML = error;
                reject(error);
            });
    });
};

// Previsão do tempo da cidade
function getWeather(id) {
    return new Promise((resolve, reject) => {
        // API de localidades do IBGE
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${id}`)
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                };
                return Promise.reject("Falha na requisição da previsão do tempo.");
            })
            .then(data => {

                // Data
                const date1 = document.querySelector("#date1");
                const date2 = document.querySelector("#date2");

                const day1 = new Date();

                const day2 = new Date();
                day2.setDate(day2.getDate()+1);

                const day1P = `${(String(day1.getDate()).padStart(2, "0"))}/${String(day1.getMonth() + 1).padStart(2, "0")}/${day1.getFullYear()}`;
                const day2P = `${(String(day2.getDate()).padStart(2, "0"))}/${String(day2.getMonth() + 1).padStart(2, "0")}/${day2.getFullYear()}`;

                // ----- Dia 1 -----
                const weekday1 = document.querySelector("#weekday1");

                const period1 = document.querySelector("#period1");
                const period2 = document.querySelector("#period2");
                const period3 = document.querySelector("#period3");

                const icon1 = document.querySelector("#icon1");
                const summary1 = document.querySelector("#summary1");
                const tMin1 = document.querySelector("#tMin1");
                const tMax1 = document.querySelector("#tMax1");

                const icon2 = document.querySelector("#icon2");
                const summary2 = document.querySelector("#summary2");
                const tMin2 = document.querySelector("#tMin2");
                const tMax2 = document.querySelector("#tMax2");

                const icon3 = document.querySelector("#icon3");
                const summary3 = document.querySelector("#summary3");
                const tMin3 = document.querySelector("#tMin3");
                const tMax3 = document.querySelector("#tMax3");
                
                date1.innerText = day1P;
                weekday1.innerText = data[id][day1P]["manha"]["dia_semana"];
                weekday1.style.cssText = 'border-bottom: solid 1px rgb(0%, 29%, 51%); text-align: center; width: 100%';
        
                // Manhã
                period1.innerText = `Manhã`;
                icon1.src = data[id][day1P]["manha"]["icone"];
                summary1.innerText = data[id][day1P]["manha"]["resumo"];
                tMin1.innerHTML = `<span>&#8595;${data[id][day1P]["manha"]["temp_min"]}°C</span>`;
                tMax1.innerHTML = `<span>&#8593;${data[id][day1P]["manha"]["temp_max"]}°C</span>`;

                // Tarde
                period2.innerText = `Tarde`;
                icon2.src = data[id][day1P]["tarde"]["icone"];
                summary2.innerText = data[id][day1P]["tarde"]["resumo"];
                tMin2.innerHTML = `<span>&#8595;${data[id][day1P]["tarde"]["temp_min"]}°C</span>`;
                tMax2.innerHTML = `<span>&#8593;${data[id][day1P]["tarde"]["temp_max"]}°C</span>`;

                // Noite
                period3.innerText = `Noite`;
                icon3.src = data[id][day1P]["noite"]["icone"];
                summary3.innerText = data[id][day1P]["noite"]["resumo"];
                tMin3.innerHTML = `<span>&#8595;${data[id][day1P]["noite"]["temp_min"]}°C</span>`;
                tMax3.innerHTML = `<span>&#8593;${data[id][day1P]["noite"]["temp_max"]}°C</span>`;

                // ----- Dia 2 -----
                const weekday2 = document.querySelector("#weekday2");
                weekday2.style.cssText = 'border-bottom: solid 1px rgb(0%, 29%, 51%); text-align: center; width: 100%';

                const period21 = document.querySelector("#period21");
                const period22 = document.querySelector("#period22");
                const period23 = document.querySelector("#period23");

                const icon21 = document.querySelector("#icon21");
                const summary21 = document.querySelector("#summary21");
                const tMin21 = document.querySelector("#tMin21");
                const tMax21 = document.querySelector("#tMax21");

                const icon22 = document.querySelector("#icon22");
                const summary22 = document.querySelector("#summary22");
                const tMin22 = document.querySelector("#tMin22");
                const tMax22 = document.querySelector("#tMax22");

                const icon23 = document.querySelector("#icon23");
                const summary23 = document.querySelector("#summary23");
                const tMin23 = document.querySelector("#tMin23");
                const tMax23 = document.querySelector("#tMax23");
                
                date2.innerText = day2P;
                weekday2.innerText = data[id][day2P]["manha"]["dia_semana"];
        
                // Manhã
                period21.innerText = `Manhã`;
                icon21.src = data[id][day2P]["manha"]["icone"];
                summary21.innerText = data[id][day2P]["manha"]["resumo"];
                tMin21.innerHTML = `<span>&#8595;${data[id][day2P]["manha"]["temp_min"]}°C</span>`;
                tMax21.innerHTML = `<span>&#8593;${data[id][day2P]["manha"]["temp_max"]}°C</span>`;

                // Tarde
                period22.innerText = `Tarde`;
                icon22.src = data[id][day2P]["tarde"]["icone"];
                summary22.innerText = data[id][day2P]["tarde"]["resumo"];
                tMin22.innerHTML = `<span>&#8595;${data[id][day2P]["tarde"]["temp_min"]}°C</span>`;
                tMax22.innerHTML = `<span>&#8593;${data[id][day2P]["tarde"]["temp_max"]}°C</span>`;

                // Noite
                period23.innerText = `Noite`;
                icon23.src = data[id][day2P]["noite"]["icone"];
                summary23.innerText = data[id][day2P]["noite"]["resumo"];
                tMin23.innerHTML = `<span>&#8595;${data[id][day2P]["noite"]["temp_min"]}°C</span>`;
                tMax23.innerHTML = `<span>&#8593;${data[id][day2P]["noite"]["temp_max"]}°C</span>`;
                
                resolve(data);
            })
            .catch(error => {
                result.innerHTML = error;
                reject(error);
            });
    });
};

uf.addEventListener("change", getUf());
uf.addEventListener("change", (event) => {getCity(event.target.value)});
city.addEventListener("change", (event) => {getWeather(event.target.value)});