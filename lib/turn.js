class Turn {
    startTurn = (turn_number, players) => {
        players.forEach(player => {
            function arrayRemove(arr, value) {
                return arr.filter(function(ele) {
                    return ele != value;
                });
            }
            var players_without_attacker = arrayRemove(players, player)
            console.log("it's turn number " + turn_number)
            console.log("It's time for " + player.name + " to play");
            var i = 1
            players_without_attacker.forEach(function(player, i) {
                if (player.status == "playing") {
                    console.log(player.name + " = " + i);
                }
            });
            var victim = prompt("Who want kill ?");
            if (victim == 0) {
                victim = players_without_attacker[0]
                if (players_without_attacker[0]) {
                    attack(player, victim, players)

                }
            } else if (victim == 1) {
                victim = players_without_attacker[1]
                if (players_without_attacker[1]) {
                    attack(player, victim, players)

                }
            } else if (victim == 2) {
                victim = players_without_attacker[2]
                if (players_without_attacker[2]) {
                    attack(player, victim, players)

                }
            } else if (victim == 3) {
                victim = players_without_attacker[3]
                if (players_without_attacker[3]) {
                    attack(player, victim, players)

                }
            } else {
                console.log("too late");
            }

            function attack(player, victim, players) {
                player.deal_damage(victim)
                victim.take_damage(player.dmg)
                if (victim.hp <= 0) {
                    victim.status = "dead"
                }
            }


        })



    }
}