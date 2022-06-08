document.querySelector("button").addEventListener("click", selectProduct);

function selectProduct() {

    let femaleProduct = document.querySelector("#female").value;

    switch (femaleProduct) {
        case "blouse":
            const photoBlouse = document.querySelector("#productDisplay");
            // Largura (width) e altura (height) da imagem:
            let blouse = new Image(250,250);
            blouse.src = "./assets/image/blouse.png";
            blouse.alt = "Blusa";
            photoBlouse.appendChild(blouse);           
        break;
        case "bags":
            const photoBags = document.querySelector("#productDisplay");
            let bags = new Image(250,250);
            bags.src = "./assets/image/bags.png";
            bags.alt = "Bolsa";
            photoBags.appendChild(bags);           
        break;
        case "t-shirt":
            const photoTshirt = document.querySelector("#productDisplay");
            let tShirt = new Image(250,250);
            tShirt.src = "./assets/image/t-shirt.png";
            tShirt.alt = "Camiseta";
            photoTshirt.appendChild(tShirt);           
        break;
        case "pants":
            const photoPants = document.querySelector("#productDisplay");
            let pants = new Image(250,250);;
            pants.src = "./assets/image/pants.png" ;
            pants.alt = "Calça";
            photoPants.appendChild(pants);           
        break;
        case "dresses":
            const photoDresses = document.querySelector("#productDisplay");
            let dresses = new Image(250,250);
            dresses.src = "./assets/image/dresses.png";
            dresses.alt = "Vestido";
            photoDresses.appendChild(dresses);           
        break;
        default:
            const photoDefault = document.querySelector("#productDisplay");
            let store = new Image(250,250);
            store.src = "./assets/image/store.png";
            store.alt = "Loja";
            photoDefault.appendChild(store);
    }
}