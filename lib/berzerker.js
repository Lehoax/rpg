class Berzerker {
    constructor(name, hp, dmg, mana) {
        this.name = "Draven";
        this.hp = 8;
        this.dmg = 4;
        this.mana = 0;
        this.status = "playing";

    }

    special = () => {
        this.dmg += 1;
        this.hp -= 1;
    }
    take_damage = (damage) => {
        this.hp -= damage;

    }
    deal_damage = (victim) => {
        this.dmg += 7;
        this.mana -= 1;
        if (victim <= 0) {
            this.mana += 20;
        }
    }

}