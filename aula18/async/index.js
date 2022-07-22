const button = document.querySelector("#button");

let result = document.querySelector("#result");

function fetchShuffle() {
    return new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=5`)
            .then((drawRes) => {
                if (drawRes.status === 400) {
                    return drawRes.json();
                }
                return reject(result.innerHTML = `Falha na requisição.`);
            })
            .then((dataDraw) => {
                result.innerHTML = "";
                resolve(dataDraw);
            })
            .catch((errorDraw) => {
                result.innerHTML = errorDraw;
                reject(errorDraw);
            });
    }); 
}

async function fetchDraw() {
    result.innerHTML = "";
    let draw = await fetchShuffle();
    renderCards(draw);
}

function renderCards(dataRender) {
    for (i = 0; i < dataRender["cards"].length; i++) {
        result.innerHTML += `<img src=${dataRender["cards"][i]["image"]} />`;
    }
}

button.addEventListener("click", fetchDraw);
