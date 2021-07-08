class Game {
    constructor(players) {
        this.turnLeft = 10;
        this.players = players
    }


    new_turn = () => {
        var turn = new Turn
        turn.startTurn(this.turnLeft, this.players)

        function is_winner(player) {
            if (player.hp > 0) {
                player.status = "Winner"
                console.log(player.status)
            }
        }
        if (this.turnLeft = 0) {
            this.players.map(player => is_winner(player))
        }
    }
}