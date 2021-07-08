const game = new Game([new Assassin, new Berzerker, new Fighter, new Monk, new Paladin])
const turn = new Turn

while (game.turnLeft != 0) {
    game.turnLeft -= 1
    game.new_turn()
}