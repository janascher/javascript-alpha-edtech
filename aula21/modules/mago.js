import Avatar from "./avatar.js";

export default class Mago extends Avatar {

    constructor(_coin, _xPosition, _yPosition, _ptsLife, _ptsDamage, _amtMana) {
        super(_coin, _xPosition, _yPosition, _ptsLife, 3);
        this.amtMana = _amtMana;
    }

    // Method
    attack() {
        if (this.amtMana > 0) {
            this.amtMana--;
            return this.ptsDamage;
        } else {
            return `Mana zerada! Recarregando em 10s.`;
        }
    }

    addMana() {
        if (this.amtMana == 0) {
            setTimeout(rechargeMana, 10000);

            function rechargeMana() {
                this.amtMana = 10;
                console.log(`Total de mana: ${this.amtMana}`);
            }
            return this.amtMana;
        }

        return this.amtMana;
    }
}
