import Avatar from "./avatar.js";

export default class Cowboy extends Avatar {
    #muni;

    constructor(_coin, _xPosition, _yPosition, _ptsLife, _ptsDamage) {
        super(_coin, _xPosition, _yPosition, _ptsLife, 2);
        this.#muni = 10;
    }

    // Getter
    get muni() {
        return this.#muni;
    }

    // Method
    attack() {
        if (super.ptsLife > 0) {
            if (this.#muni > 0) {
                this.#muni--;
                return this.ptsDamage;
            } else {
                return `Munição zerada!`;
            }
        }
    }
}
