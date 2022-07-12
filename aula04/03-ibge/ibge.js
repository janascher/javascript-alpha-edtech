document.querySelector("#button").addEventListener("click", randomPerson);

function randomPerson() {
    const personRandom = Math.random();
    console.log(personRandom)
    const result = document.querySelector("#result");

    let age;
    let genre;

    if (personRandom <= 0.183) {
        age = "pessoa idosa";

    } else {
        age = "pessoa não idosa";
    }

    if (personRandom <= 0.167) {
        genre = "masculino";

    } else {
        genre = "feminino";
    }

    result.innerHTML = `Foi sorteado uma ${age} do sexo ${genre}.`;
}