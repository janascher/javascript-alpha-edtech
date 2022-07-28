// Classe
export default class Avatar {
    #coin;
    #xPosition;
    #yPosition;
    #ptsLife;
    #ptsDamage;

    constructor(_coin, _xPosition, _yPosition, _ptsLife, _ptsDamage) {
        this.#coin = _coin;
        this.#xPosition = _xPosition;
        this.#yPosition = _yPosition;
        this.#ptsLife = 10;
        this.#ptsDamage = _ptsDamage;
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

    get ptsLife() {
        return this.#ptsLife;
    }

    get ptsDamage() {
        return this.#ptsDamage;
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

    life() {
        return this.#ptsLife;
    }

    damage() {
        return this.#ptsDamage;
    }

    attack() {
        if (this.#ptsLife > 0) {
            return this.#ptsDamage;
        } else {
            return `Game Over`;
        }
    }

    receivedAttack(_damageTaken) {
        this.damageTaken = _damageTaken;
        _damageTaken = 2; // representa o ataque dos adversários

        this.#ptsLife = this.#ptsLife - _damageTaken;

        if (this.#ptsLife > 0) {
            return this.#ptsLife;
        } else {
            return `Game Over`;
        }
    }
}
