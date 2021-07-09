players = [new Assassin, new Berzerker, new Fighter, new Monk, new Paladin]
const game = new Game(players)

var i = 3

while (i != 0) {
    game.newTurn(players)
    i -= 1
}