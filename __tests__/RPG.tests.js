import { Game } from './../src/RPG.js';

describe('Game', () => {
  test('game constructor holds inputted values', () => {
    let game = new Game("peeWee");
    expect(game.character).toEqual("peeWee");
    expect(game.currentPlayer).toEqual([]);
    expect(game.currentAction).toEqual([]);
    expect(game.level).toEqual(0);
  })
})