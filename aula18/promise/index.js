let button = document.querySelector("#button");

let result = document.querySelector("#result");

function fetchDraw() {
    return new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=5`)
            .then((drawRes) => {
                if (drawRes.status === 200) {
                    return drawRes.json();
                }
                return reject(
                    (result.innerHTML = `Falha na requisição ${drawRes.status}.`)
                );
            })
            .then((dataDraw) => {

                result.innerHTML = "";

                renderCards(dataDraw);
                resolve(dataDraw);
            })
            .catch((errorDraw) => {
                result.innerHTML = errorDraw;
                reject(errorDraw);
            });
    });
}

function renderCards(dataRender) {
   
    for (i = 0; i < dataRender["cards"].length; i++) {
        result.innerHTML += `<img src=${dataRender["cards"][i]["image"]} />`;
    }
}

button.addEventListener("click", fetchDraw);
