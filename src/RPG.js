// Business Logic

export class Game {
  constructor(character, currentPlayer, currentAction) {
    // this.character = peeWee, davidBowie, elVira;
    this.character = character;
    this.currentPlayer = [];
    this.currentAction = [];
    this.level= 0;
  }
  // methods for game -->

}


export class Character {
  constructor() {
    this.peeWee = { weapon: "bike", action: "dance", level: 0 }
    this.davidBowie = { weapon: "glitter", action: "jump", level: 1 }
    this.elVira = { weapon: "dagger", action: "spell", level: 0 }
  }
}

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
