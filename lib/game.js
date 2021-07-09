class Game {
    constructor(players) {
        this.turnLeft = 3;
        this.players = players
    }
    newTurn = () => {
        this.players.forEach(player => {
            function arrayRemove(arr, value) {
                return arr.filter(function(ele) {
                    return ele != value;
                });
            }
            var players_without_attacker = arrayRemove(players, player)
            var current_player = player

            console.log(current_player.name + " who do you want to attack ?");

            var i = 0

            players_without_attacker.forEach(player => {
                console.log(player.name + " == " + i);
                i++
            });

            var user_selection = prompt("choose who want killing")
            var type_of_attack = prompt("basic attack == 0, special attack == 1")
            attack(current_player, user_selection, type_of_attack, players_without_attacker)
            if (players_without_attacker[user_selection].hp <= 0) {
                console.log("dead");
                var index = this.players.indexOf(players_without_attacker[user_selection]);
                if (index > -1) {
                    this.players.splice(index, 1);
                }
            }

            function attack(current_player, user_selection, type_of_attack) {
                if (type_of_attack == 0) {
                    players_without_attacker[user_selection].take_damage(current_player.dmg)
                    current_player.deal_damage = (players_without_attacker)
                } else if (type_of_attack == 1) {
                    current_player.special()
                    players_without_attacker[user_selection].take_damage(current_player.dmg)
                    current_player.deal_damage = (players_without_attacker)
                }
            }
        });
        this.players.forEach(player => {
            console.log(player.name + " is survivor");
        });
    }
}