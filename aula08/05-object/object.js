document.querySelector("#button").addEventListener("click", createObject);

function createObject() {
    const attribute = {};

    attribute["Um atributo com espaços"] = 1;
    attribute.um_atributo_com_espaços = 1;
    console.log(attribute)
}