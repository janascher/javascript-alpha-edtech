document.querySelector("select").addEventListener("change", selectProduct);

function selectProduct() {

    const info = document.querySelector("#info");

    let photo;
    let carName;
    let manufacturer;
    let maxSpeed;
    let kmh;
    let price;

    switch (car.value) {
        case "sandero":
            photo = "./assets/image/sandero-rs.png";
            carName = "Sandero RS";
            manufacturer = "Renault";
            maxSpeed = "202km/h";
            kmh = "8 segundos";
            price = "R$ 99.290,00";
        break;
        case "peugeot":
            photo = "./assets/image/peugeot-2008-thp.png";
            carName = "Peugeot 2008 THP";
            manufacturer = "Peugeot";
            maxSpeed = "209km/h";
            kmh = "8,8 segundos";
            price = "R$ 125.990,00";   
        break;
        case "cactus":
            photo = "./assets/image/c4-cactus.png";
            carName = "C4 Cactus";
            manufacturer = "Citroën";
            maxSpeed = "212km/h";
            kmh = "7,3 segundos";
            price = "R$ 135.590,00";        
        break;
        case "jetta":
            photo = "./assets/image/jetta-gli.png";
            carName = "Jetta GLI";
            manufacturer = "Volkswagen";
            maxSpeed = "250km/h";
            kmh = "6,8 segundos";
            price = "R$ 205.590,00";        
        break;
        case "s60":
            photo = "./assets/image/s60-t4.png";
            carName = "S60 T4";
            manufacturer = "Volvo";
            maxSpeed = "220km/h";
            kmh = "7,1 segundos";
            price = "R$ 209.950,00";      
        break;
        case "select":
            photo = "";
            carName = "";
            manufacturer = "";
            maxSpeed = "";
            kmh = "";
            price = "";
    }

    info.innerHTML = 
    `<div class="displayProduct">
        <img src="${photo}" />
        <div class="infoProduct">
            <p>Modelo: ${carName}</p>
            <p>Fabricante: ${manufacturer}</p>
            <p>Velocidade máxima: ${maxSpeed}</p>
            <p>Vai de 0 a 100km/h em: ${kmh}</p>
            <p>Preço: ${price}</p>
        </div>  
    </div>`;

}