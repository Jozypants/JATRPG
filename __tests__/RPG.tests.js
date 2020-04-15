import { Game } from './../src/RPG.js';
import { Character } from './../src/RPG.js';

describe('Game', () => {
  test('game constructor holds inputted values', () => {
    let game = new Game("peeWee");
    expect(game.character).toEqual("peeWee");
    expect(game.currentPlayer).toEqual([]);
    expect(game.currentAction).toEqual([]);
    expect(game.level).toEqual(0);
  })
})

describe("Character", () => {
  test('character constructor holds separate values for character objects', () => {
    let playerOne = new Character();
    expect(playerOne.peeWee.weapon).toEqual("bike");
    expect(playerOne.peeWee.action).toEqual("dance");
    expect(playerOne.peeWee.level).toEqual(0);
    let playerTwo = new Character();
    expect(playerTwo.davidBowie.weapon).toEqual("glitter");
    expect(playerTwo.davidBowie.action).toEqual("jump");
    expect(playerTwo.davidBowie.level).toEqual(1);
    let playerThree = new Character();
    expect(playerThree.elVira.weapon).toEqual("dagger");
    expect(playerThree.elVira.action).toEqual("spell");
    expect(playerThree.elVira.level).toEqual(0);
  });
});