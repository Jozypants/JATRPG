import { Game } from './../src/RPG.js';

describe('Game', () => {
  test('game constructor holds inputted values', () => {
    let game = new Game("peeWee", "peeWee", "fighting");
    expect(game.character).toEqual("peeWee");
    expect(game.currentPlayer).toEqual(['peeWee']);
    expect(game.currentAction).toEqual('fighting');
    expect(game.level).toEqual(0);
  })
})