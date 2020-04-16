
import { Player } from './../src/RPG.js';

describe("Player", () => {
  test('Player constructor holds separate values for character objects', () => {
    let playerOne = new Player();
    expect(playerOne.player.peeWee.weapon).toEqual("bike");
    expect(playerOne.player.peeWee.action).toEqual("dance");
    expect(playerOne.player.peeWee.hp).toEqual(30);
    expect(playerOne.player.peeWee.level).toEqual(0);
  });
    test("character choice method should hold character value.", () => {
      let playerOne = new Player();
      playerOne.chooseCharacter("peeWee");
      expect(playerOne.currentPlayer.weapon).toEqual("bike");
    });
  test("allows character weapon to be discovered and adds 5 HP.", () => {
    let playerOne = new Player();
    playerOne.chooseCharacter("davidBowie");
    playerOne.discoverWeapon();
    expect(playerOne.currentPlayer.hp).toEqual(55);
    expect(playerOne.discoverWeapon()).toBe("glitter");
  });

  test("allows character to chose between the options of using a weapon or using an action", () => {
    let playerOne = new Player();
    playerOne.chooseCharacter("elVira");
    playerOne.fightChoice("weapon");
    expect(playerOne.currentPlayer.hp).toEqual(35);
    expect(playerOne.fightChoice("weapon")).toBe("dagger");
  });
});



