// Business Logic
export class Player {
  constructor(currentPlayer) {
    this.player = {
      peeWee: {
        name: "Pee Wee",
        weapon: "bike",
        action: "dance",
        hp: 30,
        level: 0,
      },
      elVira: {
        name: "El Vira",
        weapon: "dagger",
        action: "spell",
        hp: 40,
        level: 0,
      },
      ziggyStardust: {
        name: "Ziggy Stardust",
        weapon: "glitter",
        action: "jump",
        hp: 50,
        level: 0,
      },
    };
    this.currentPlayer = currentPlayer;
    this.currentRoll = 0;
  }
  // methods for each character  -->
  chooseCharacter(choice) {
    if (choice === " ") {
      return (this.currentPlayer = "Please choose a character");
    } else if (choice === "Pee Wee") {
      this.currentPlayer = this.player.peeWee;
      // return "peeWee";
    } else if (choice === "Ziggy Stardust") {
      this.currentPlayer = this.player.ziggyStardust;
      // return "davidBowie"
    } else if (choice === "El Vira") {
      this.currentPlayer = this.player.elVira;
      // return "elVira"
    }
    return this.currentPlayer;
  }

  discoverWeapon() {
    this.currentPlayer.hp = this.currentPlayer.hp + 5;
    return this.currentPlayer.weapon;
  }

  fightChoice(choice) {
    if (choice === "weapon") {
      this.currentPlayer.hp = this.currentPlayer.hp - 5;
      return this.currentPlayer.weapon;
    } else if (choice === "action") {
      this.currentPlayer.hp = this.currentPlayer.hp - 10;
      return this.currentPlayer.action;
    }
  }

  rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    this.currentRoll += random;
    return this.currentRoll;
  }

  determineFate() {
    if (this.currentRoll >= 4) {
      this.currentPlayer.hp = this.currentPlayer.hp + 20;
      this.currentPlayer.level = this.currentPlayer.level + 2;
      return true;
    } else if (this.currentRoll <= 3) {
      return false;
    }
  }
}
