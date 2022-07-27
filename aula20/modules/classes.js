// Classe
export default class ClassAvatar {
    #coin;
    #xPosition;
    #yPosition;

    constructor(_coin, _xPosition, _yPosition) {
        this.#coin = _coin;
        this.#xPosition = _xPosition;
        this.#yPosition = _yPosition;
    }

    // Getter
    get coin() {
        return this.#coin;
    }

    get xPosition() {
        return this.#xPosition;
    }

    get yPosition() {
        return this.#yPosition;
    }

    // Method
    forward() {
        this.#yPosition--;

        if (this.#yPosition > 0) {
            return this.#yPosition;
        } else {
            return `Não foi possível mover para frente.`;
        }
    }

    back() {
        return this.#yPosition++;
    }

    left() {
        this.#xPosition--;

        if (this.#xPosition > 0) {
            return this.#xPosition;
        } else {
            return `Não foi possível mover para a esquerda.`;
        }
    }

    right() {
        return this.#xPosition++;
    }

    addCoinBag() {
        return this.#coin++;
    }
}
