class Assassin {
    constructor() {
        this.name = "Carl";
        this.hp = 6;
        this.dmg = 6;
        this.mana = 20;
        this.status = "playing";
    }
    special = () => {
        this.dmg += 7;
        this.mana -= 1;
    }
    take_damage = (damage) => {
        this.hp -= damage;
    }
    deal_damage = (victim) => {
        this.mana -= 1;
        if (victim <= 0) {
            this.mana += 20;
        }
    }

}