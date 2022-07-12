document.querySelector("button").addEventListener("click", selectProduct);
const product = new Image(250,250);

function selectProduct() {

    const femaleProduct = document.querySelector("#female");
    const photoProduct = document.querySelector("#productDisplay");

    switch (femaleProduct.value) {
        case "blouse":
            product.src = "./image/blouse.png";
            product.alt = "Blusa";        
        break;
        case "bags":
            product.src = "./image/bags.png";
            product.alt = "Bolsa";     
        break;
        case "t-shirt":
            product.src = "./image/t-shirt.png";
            product.alt = "Camiseta";         
        break;
        case "pants":
            product.src = "./image/pants.png" ;
            product.alt = "Calça";        
        break;
        case "dresses":
            product.src = "./image/dresses.png";
            product.alt = "Vestido";     
        break;
        default:
            product.src = "./image/store.png";
            product.alt = "Loja";
    }

    photoProduct.appendChild(product);
}