// Business Logic
export class Player {
  constructor() {
    // this.possibleCharacters = {
    //  peeWee: { weapon: "bike", action: "dance", level: 0 }
    // }
    // this.currentCharacter;
    this.peeWee = { weapon: "bike", action: "dance", level: 0 }
    this.davidBowie = { weapon: "glitter", action: "jump", level: 1 }
    this.elVira = { weapon: "dagger", action: "spell", level: 0 }
  }
  // methods for each character  -->
  chooseCharacter(choice, player) {
    if (choice === "peeWee") {
      this.character = player.peeWee;
      alert("peewee");
    } 
    if (choice === "davidBowie") {
      this.character = player.davidBowie;
    }
    if (choice === "elVira") {
      this.character = player.elVira;
    }
  } 
}

export class Game  {
  constructor(currentPlayer, currentAction) {
    // this.character = peeWee, davidBowie, elVira;
    // this.character = character;
    this.currentPlayer = [];
    this.currentAction = [];
    this.level= 0;
  }
  // methods for game --> 

}

// let character = new Game,Character;

// let playerOne = new Character();
// let newGame = new Game();

// let playerOne = new Character ()
// playerOne.peeWee; 

//     let peeWee =  { 
//       name: "Pee Wee",
//       weapon: "acid bowtie",
//       fightingStyle: "trickster"
//     }
//     let davidBowie = {
//       name: ""
//     } 
//   };
// }
//   this.elVira = 
//   this.davidBowie = 0;

  // chooseCharacter(choice) {
  //   if(choice == peeWee) {
  //     this.weapon = peeWeeWeapon;

  //   }
  // }
class Player {
  constructor() {
    // this.possibleCharacters = {
    //  peeWee: { weapon: "bike", action: "dance", level: 0 }
    // }
    // this.currentCharacter;
    this.peeWee = { weapon: "bike", action: "dance", level: 0 }
    this.davidBowie = { weapon: "glitter", action: "jump", level: 1 }
    this.elVira = { weapon: "dagger", action: "spell", level: 0 }
  }
  // methods for each character  -->
  chooseCharacter(choice) {
    if (choice === "peeWee") {
      this.character = this.peeWee;
    } 
    if (choice === "davidBowie") {
      this.character = this.davidBowie;
    }
    if (choice === "elVira") {
      this.character = this.elVira;
    }
  } 
}

class Game  {
  constructor(currentPlayer, currentAction) {
    // this.character = peeWee, davidBowie, elVira;
    // this.character = character;
    this.currentPlayer = [];
    this.currentAction = [];
    this.level= 0;
  }
}

class Player {
  constructor() {
    // this.possibleCharacters = {
    //  peeWee: { weapon: "bike", action: "dance", level: 0 }
    // }
    // this.currentCharacter;
    this.peeWee = { weapon: "bike", action: "dance", level: 0 }
    this.davidBowie = { weapon: "glitter", action: "jump", level: 1 }
    this.elVira = { weapon: "dagger", action: "spell", level: 0 }
  }
  // methods for each character  -->
  chooseCharacter(choice) {
    if (choice === "peeWee") {
      this.character = this.peeWee;
    } 
    if (choice === "davidBowie") {
      this.character = this.davidBowie;
    }
    if (choice === "elVira") {
      this.character = this.elVira;
    }
  } 
}

playerOne = new Player()
playerOne.chooseCharacter('davidBowie');
playerOne.character

// tomorrow morning: 
// - test chooseCharacter method in RPG.tests.js
// - see if we want to put characters inside of "character options" & push result of chooseCharacter to "selectedCharacter" variable?