// Function
export default function FuncAvatar(_coin, _xPosition, _yPosition) {
    let coin = _coin;
    let xPosition = _xPosition;
    let yPosition = _yPosition;

    // constructor(_coin, _xPosition, _yPosition) {
    //     this.#coin = _coin;
    //     this.#xPosition = _xPosition;
    //     this.#yPosition = _yPosition;
    // }

    // Getter
    // function coins() {
    //     return coin;
    // }

    // function xPositions() {
    //     return xPosition;
    // }

    // function yPositions() {
    //     return yPosition;
    // }

    // Method
    function forward() {
        yPosition--;

        if (yPosition > 0) {
            return yPosition;
        } else {
            return `Não foi possível mover para frente.`;
        }
    }

    function back() {
        return yPosition++;
    }

    function left() {
        xPosition--;

        if (xPosition > 0) {
            return xPosition;
        } else {
            return `Não foi possível mover para a esquerda.`;
        }
    }

    function right() {
        return xPosition++;
    }

    function addCoinBag() {
        return coin++;
    }

    function getAtributes() {
        return [coin, xPosition, yPosition];
    }

    return {
        forward,
        back,
        left,
        right,
        addCoinBag,
        getAtributes
    }
}

// const avatar1 = new Avatar(3, 20, 30);
// console.log(avatar1)

// console.log(`Frente: ${avatar1.forward()}`);
// console.log(`Para trás: ${avatar1.back()}`);
// console.log(`Esquerda: ${avatar1.left()}`);
// console.log(`Direita: ${avatar1.right()}`);
// console.log(`Adicionada moedas na bolsa: ${avatar1.addCoinBag()}`)
