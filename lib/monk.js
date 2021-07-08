class Monk {
    constructor(name, hp, dmg, mana) {
        this.name = "Moana";
        this.hp = 8;
        this.dmg = 2;
        this.mana = 200;
        this.status = "playing";

    }

    special = () => {
        this.hp += 8;
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