import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./animate.css";
import $ from "jquery";
import {Player} from './../src/RPG.js';

//User Interface Logic -->
$(document).ready(function () {
  let characters = [
  { name: "Pee Wee"},
  { name: "Ziggy Stardust"},
  { name: "El Vira"},
  ];
  characters.forEach(function (character) {
    $("#characters").append(
      `<option value="${character.name}">${character.name}</option>`
    );
  });
  $("#players").submit(function(event) {
    event.preventDefault();
    // let playerOne = new Player();
    let userInput = $("#characters").val();
    let character = playerOne.chooseCharacter(userInput);
    
    if (character === "Pee Wee") {
      $("#pee-wee").slideDown("slow");
      $("#start-page").hide();
    } else if (character === "El Vira") {
      $("#el-vira").slideDown("slow");
      $("#start-page").hide();
    } else if (character === "Ziggy Stardust") {
      $("#ziggy-stardust").slideDown("slow");
      $("#start-page").hide();
    } 
  });

});