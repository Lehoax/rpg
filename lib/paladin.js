class Paladin {
    constructor(name, hp, dmg, mana) {
        this.name = "Ulder";
        this.hp = 16;
        this.dmg = 3;
        this.mana = 160;
        this.status = "playing";

    }

    special = () => {
        this.dmg + 4;
        this.hp += 5;
        this.mana -= 40;
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