// import { goBrigadeiros } from "./brigadeiros.js";
// import { goCandies } from "./candies.js";
// import { goCupcakes } from "./cupcakes.js";

// export function goMainPage() {
//     const app = document.querySelector("#app");
//     app.innerHTML = mainPage();

//     const button = document.querySelectorAll(".button");
    
//     button[0].addEventListener("click", goBrigadeiros);
//     button[1].addEventListener("click", goCandies);
//     button[2].addEventListener("click", goCupcakes);

// };
import { router } from "./router.js.js";

export function main() {

//     setTimeout(() => { 
//         const brigadeiros = document.querySelector("#brigadeiro");
//     brigadeiros.addEventListener("click", () => router.push('/brigadeiros'));
// }, 300)

    const brigadeiros = document.querySelector("#brigadeiro");
    brigadeiros.addEventListener("click", () => router.push('/brigadeiros'));

    return `
        <h1>Doceria</h1>
        <button id="brigadeiro" class="button" type="button">Brigadeiro</button>
        <button id="doces" class="button" type="button">Doces</button>
        <button id="cupcakes" class="button" type="button">Cupcakes</button>
    `
};