import { consultCep } from "./consultCep.js";

export function mainPage() {

    return `
        <section>
            <h1>Consulta CEP</h1>
            <label for="inputCep">
                Digite um CEP:
            </label>
            <input id="input-cep" class="inputCep" type="number" />
            <button id="consult-button" class="consultButton" type="button">
                Consultar
            </button>
        </section>
    `
};

function goConsultCep() {
    const consult = document.querySelector("#consult-button").addEventListener("click", consultCep);
    
}



