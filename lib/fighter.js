class Fighter {
    constructor() {
        this.name = "Grace";
        this.hp = 12;
        this.dmg = 4;
        this.mana = 40;
        this.status = "playing";
    }

    special = () => {
        this.dmg + 1;
        this.hp + 2;
        this.mana -= 20;
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